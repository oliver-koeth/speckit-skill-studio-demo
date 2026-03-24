# Data Model: Skill Studio

## 1. Storage keys

- `skillStudio.skills`
- `skillStudio.tags`
- `skillStudio.settings`
- `skillStudio.schemaVersion`

## 2. Entity: Skill

```ts
interface SkillRecord {
  id: string;
  title: string;
  tagId: string;
  markdownBody: string;
  createdAt: string; // ISO timestamp
  updatedAt: string; // ISO timestamp
}
```

### Rules

- `id` is a UUID.
- `title` is required for saved records; unsaved drafts may use a placeholder.
- `tagId` must reference an existing tag.
- `markdownBody` stores the exact `SKILL.md` body.
- `updatedAt` changes on every save.

## 3. Entity: Tag

```ts
interface TagRecord {
  id: string;
  name: string;
  createdAt: string;
  updatedAt: string;
}
```

### Rules

- Tag names must be unique, case-insensitive.
- Tag names are admin-managed only.
- Deleting a tag must be blocked when referenced by existing skills unless a reassignment flow is completed.

## 4. Entity: Settings

```ts
interface SettingsRecord {
  openAiApiKey: string;
  themeMode: 'light';
  showSecurityWarningDismissed: boolean;
}
```

### Rules

- `openAiApiKey` is optional but required for generation.
- `themeMode` remains fixed to light in v1 but leaves room for extension.

## 5. View model: Skill draft

```ts
interface SkillDraft {
  id?: string;
  title: string;
  tagId: string;
  markdownBody: string;
  dirty: boolean;
  source: 'template' | 'generated' | 'existing';
}
```

## 6. Derived state

- skills grouped by tag
- selectedTagId
- selectedSkillId
- generation status: idle | loading | success | error
- preview content rendered from current draft body

## 7. Migration strategy

Use `skillStudio.schemaVersion`.

### Version 1

- Introduces skill, tag, and settings records.
- Bootstraps default tags if no tags are found on first load.

### Bootstrap tags

- Programming
- Operations
- Management

## 8. Sample localStorage payloads

### skills

```json
[
  {
    "id": "d7d6dbec-1000-470d-9a44-2e1b6fb32eb5",
    "title": "Angular Markdown Skill Creator",
    "tagId": "tag-programming",
    "markdownBody": "# SKILL: Angular Markdown Skill Creator\n...",
    "createdAt": "2026-03-23T09:00:00.000Z",
    "updatedAt": "2026-03-23T09:30:00.000Z"
  }
]
```

### tags

```json
[
  {
    "id": "tag-programming",
    "name": "Programming",
    "createdAt": "2026-03-23T08:00:00.000Z",
    "updatedAt": "2026-03-23T08:00:00.000Z"
  }
]
```
