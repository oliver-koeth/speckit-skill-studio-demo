# Implementation Plan: Skill Studio

**Branch**: `001-skill-studio`

## 1. Technical summary

Implement a browser-only Angular SPA with standalone components, CodeMirror 6 for markdown authoring, a split preview, localStorage persistence, and direct browser calls to OpenAI for prompt-based skill generation. Use Playwright as the sole testing framework for end-to-end validation.

## 2. Architecture overview

### Frontend architecture

- Angular standalone app
- Feature-oriented structure
- Route-level separation between workspace and admin pages
- State coordinated through Angular signals or RxJS-backed services

### Primary modules/services

- `storage.service.ts` — localStorage read/write, schema versioning, migration
- `skills.service.ts` — skill CRUD, filtering, selection, export
- `tags.service.ts` — tag CRUD and validation
- `settings.service.ts` — OpenAI key storage and retrieval
- `generation.service.ts` — request construction and OpenAI API calls
- `markdown.service.ts` — rendering sanitization and preview preparation

## 3. Proposed project structure

```text
src/
  app/
    core/
      services/
      models/
      guards/
    features/
      workspace/
        components/
        pages/
      admin/
        components/
        pages/
    shared/
      components/
      utils/
    app.routes.ts
  assets/
    logo/

e2e/
  skill-template.spec.ts
  skill-generation.spec.ts
  skill-crud.spec.ts
  tag-admin.spec.ts
  error-states.spec.ts
```

## 4. Routing

```ts
const routes: Routes = [
  { path: '', loadComponent: () => import('./features/workspace/pages/workspace.page') },
  { path: 'admin', loadComponent: () => import('./features/admin/pages/admin.page') },
  { path: '**', redirectTo: '' }
];
```

## 5. State management approach

Use service-based state with Angular signals for local UI responsiveness.

### Core state slices

- tags
- skills
- selectedTagId
- selectedSkillId
- currentDraft
- settings
- generationStatus

## 6. OpenAI integration

### Request approach

- endpoint called from browser using `fetch`
- bearer token sourced from localStorage settings
- request body includes system and user messages
- prompt includes the hardcoded skill template as generation context
- response must be constrained to markdown-only output

### Failure handling

- detect missing key before calling
- handle 401, 429, and generic network errors
- preserve current prompt and unsaved draft

## 7. Security posture

This app is intentionally insecure for secret handling because it is frontend-only. The plan must visibly document this limitation in UI and docs.

## 8. Persistence plan

- all entities serialized as JSON to localStorage
- writes debounced where appropriate for draft-only client state, but saved records written explicitly on save
- bootstrap default tags on first load
- migrate schema through a version flag

## 9. Markdown rendering plan

- CodeMirror 6 markdown support in editor
- rendered preview via markdown parser
- sanitize rendered HTML before injection
- support fenced code blocks and tables

## 10. Performance considerations

- debounce preview re-render by a small interval if typing performance degrades
- avoid repeated full-list recomputation when only one draft field changes
- keep skill lists lightweight, using derived memoized grouping where practical

## 11. Observability for demo

- user-facing toast notifications
- optional console logging in development mode for generation failures and storage migration

## 12. Testing strategy

Only Playwright end-to-end tests are included.

### E2E coverage matrix

1. App bootstraps with default tags
2. Create skill from template
3. Edit and save skill
4. Refresh and verify persistence
5. Delete skill
6. Export markdown
7. Create, edit, delete tags
8. Prevent deletion of in-use tag
9. Missing API key generation path
10. Successful generation path with mocked OpenAI response
11. OpenAI failure path
12. Navigation between workspace and admin

## 13. Build and dependency decisions

### Key dependencies

- Angular
- TypeScript
- CodeMirror 6 packages
- markdown parser
- HTML sanitizer
- Playwright

### Deliberate exclusions

- Karma
- Jasmine
- backend SDKs or server runtimes
- NgRx unless later complexity demands it

## 14. Milestones

### Milestone 1

Scaffold app shell, routes, storage services, default tags

### Milestone 2

Workspace CRUD, CodeMirror editor, markdown preview, export

### Milestone 3

Admin page for tags and API key

### Milestone 4

OpenAI generation flow

### Milestone 5

Playwright suite and polish
