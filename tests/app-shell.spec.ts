import { expect, test } from '@playwright/test';

test('renders the workspace shell with branding and navigation', async ({ page }) => {
  await page.goto('/');

  await expect(page.getByRole('img', { name: 'NTT DATA logo' })).toBeVisible();
  await expect(page.getByRole('link', { name: 'Workspace', exact: true })).toHaveClass(/is-active/);
  await expect(page.getByRole('heading', { name: 'Draft skills from a single shared studio shell.' })).toBeVisible();
});

test('renders the admin route inside the same shared shell', async ({ page }) => {
  await page.goto('/admin');

  await expect(page.getByRole('link', { name: 'Admin' })).toHaveClass(/is-active/);
  await expect(page.getByRole('heading', { name: 'Administration tools share the same global frame.' })).toBeVisible();
  await expect(page.getByRole('banner')).toBeVisible();
});

test('redirects unknown routes back to the workspace entry point', async ({ page }) => {
  await page.goto('/missing-route');

  await expect(page).toHaveURL(/\/$/);
  await expect(page.getByRole('heading', { name: 'Draft skills from a single shared studio shell.' })).toBeVisible();
});
