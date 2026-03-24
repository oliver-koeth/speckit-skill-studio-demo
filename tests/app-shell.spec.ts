import { expect, test } from '@playwright/test';

test('renders the workspace shell with branding and navigation', async ({ page }) => {
  await page.goto('/');

  await expect(page.getByRole('img', { name: 'NTT DATA logo' })).toBeVisible();
  await expect(page.getByRole('link', { name: 'Workspace', exact: true })).toHaveClass(/is-active/);
  await expect(page.getByRole('heading', { name: 'Draft skills from a single shared studio shell.' })).toBeVisible();
  await expect(page.locator('.page-card')).toHaveCSS('border-radius', '24px');
  await expect(page.locator('.section-eyebrow')).toHaveCSS('text-transform', 'uppercase');
});

test('renders the admin route inside the same shared shell', async ({ page }) => {
  await page.goto('/admin');

  await expect(page.getByRole('link', { name: 'Admin' })).toHaveClass(/is-active/);
  await expect(page.getByRole('heading', { name: 'Administration tools share the same global frame.' })).toBeVisible();
  await expect(page.getByRole('banner')).toBeVisible();
  await expect(page.locator('.surface-frame')).toBeVisible();
  await expect(page.locator('.surface-frame')).toHaveCSS('backdrop-filter', /blur/);
});

test('redirects unknown routes back to the workspace entry point', async ({ page }) => {
  await page.goto('/missing-route');

  await expect(page).toHaveURL(/\/$/);
  await expect(page.getByRole('heading', { name: 'Draft skills from a single shared studio shell.' })).toBeVisible();
});

test('bootstraps schema version and default browser storage records once', async ({ page }) => {
  await page.goto('/');

  const initialState = await page.evaluate(() => ({
    schemaVersion: window.localStorage.getItem('skillStudio.schemaVersion'),
    skills: window.localStorage.getItem('skillStudio.skills'),
    settings: window.localStorage.getItem('skillStudio.settings'),
    tags: window.localStorage.getItem('skillStudio.tags')
  }));

  expect(initialState.schemaVersion).toBe('1');
  expect(JSON.parse(initialState.skills ?? 'null')).toEqual([]);
  expect(JSON.parse(initialState.settings ?? 'null')).toEqual({
    openAiApiKey: '',
    themeMode: 'light',
    showSecurityWarningDismissed: false
  });
  expect(JSON.parse(initialState.tags ?? 'null')).toEqual([
    expect.objectContaining({ id: 'tag-programming', name: 'Programming' }),
    expect.objectContaining({ id: 'tag-operations', name: 'Operations' }),
    expect.objectContaining({ id: 'tag-management', name: 'Management' })
  ]);

  await page.reload();

  const reloadedTags = await page.evaluate(() => JSON.parse(window.localStorage.getItem('skillStudio.tags') ?? '[]'));

  expect(reloadedTags).toHaveLength(3);
  expect(reloadedTags.map((tag: { id: string }) => tag.id)).toEqual([
    'tag-programming',
    'tag-operations',
    'tag-management'
  ]);
});
