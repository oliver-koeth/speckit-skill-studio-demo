# Feature Specification: Skill Studio

**Feature Branch**: `001-skill-studio`  
**Status**: Draft for implementation  
**Type**: Greenfield frontend-only feature series

## 1. Goal

Build a browser-only Angular web application that enables users to create, read, update, delete, generate, and export Markdown-based agent skill files named `SKILL.md`.

The application must:

- store all data in browser localStorage
- provide a markdown editor with syntax highlighting and monospace styling
- provide a split view with live preview
- organize each skill under exactly one admin-managed tag
- allow administrators to manage tags and the OpenAI API key from an admin page
- generate a draft skill either from a built-in template or from a user prompt sent to OpenAI, with the template supplied as generation context
- visually align closely with NTT DATA brand language while remaining implementable without proprietary design tooling
- use end-to-end tests only

## 2. Scope

### In scope

- Angular SPA with client-side routing
- CRUD for skills
- CRUD for tags on admin page
- localStorage persistence for skills, tags, and settings
- CodeMirror markdown editor
- live markdown preview
- export of a single skill as `.md`
- OpenAI integration using direct browser calls with an API key stored in admin settings
- prompt-based generation of initial `SKILL.md` content
- template-based creation of initial `SKILL.md` content
- filtering and browsing skills by tag
- Playwright E2E test suite
- responsive desktop-first UI inspired by NTT DATA visual style

### Out of scope

- backend services
- server-side authentication
- secure secret storage
- multi-user collaboration
- role-based access control with true security guarantees
- markdown import, zip export, or bulk export
- unit tests or Karma/Jasmine setup
- skill version history beyond most recent saved state
- rich asset upload inside markdown

## 3. Users

### Primary user

A practitioner who wants to author and maintain agent skill files locally in the browser.

### Secondary user

A demo administrator who configures the OpenAI API key and allowed tags.

## 4. Core user stories

### US-01: Create skill from template

As a user, I want to create a new skill from a hardcoded `SKILL.md` template so that I can start with a structured document instead of a blank file.

**Acceptance criteria**

1. User can click `New Skill from Template`.
2. App creates a draft skill with default title placeholder, one selected tag, and prefilled markdown content.
3. Draft opens immediately in the editor.
4. Split preview reflects the template content.

### US-02: Create skill from prompt using OpenAI

As a user, I want to describe a skill in plain language and generate a first draft using OpenAI so that I can author faster.

**Acceptance criteria**

1. User can enter a generation prompt.
2. App sends the prompt and the built-in template structure to OpenAI.
3. App receives markdown content and loads it into the editor.
4. User can edit the generated content before saving.
5. If API key is missing, user sees a clear action message directing them to admin settings.
6. If generation fails, user sees a non-destructive error state and retains the prompt.

### US-03: Read and browse skills by tag

As a user, I want to browse skills grouped or filtered by tag so that I can quickly locate a skill.

**Acceptance criteria**

1. Sidebar lists tags and counts.
2. Selecting a tag filters the skill list.
3. Selecting a skill opens its content in editor and preview.
4. Empty states are shown when no skills exist for a tag.

### US-04: Update skill content and metadata

As a user, I want to edit the markdown content and metadata of a skill so that I can maintain it over time.

**Acceptance criteria**

1. User can edit title, selected tag, and markdown body.
2. Save updates the corresponding localStorage record.
3. Unsaved changes are visibly indicated.
4. Preview refreshes as content changes.

### US-05: Delete skill

As a user, I want to delete a skill so that I can remove obsolete content.

**Acceptance criteria**

1. User can trigger delete from skill detail view or skill list.
2. App asks for confirmation.
3. On confirmation, skill is removed from storage and list.
4. If deleted skill was open, editor transitions to a safe empty state.

### US-06: Export skill as Markdown

As a user, I want to export a skill as a `.md` file so that I can store or share the `SKILL.md` file outside the browser.

**Acceptance criteria**

1. User can export the currently open skill.
2. Downloaded filename defaults to a slugified title or `SKILL.md` when title is empty.
3. Exported file content exactly matches the saved markdown.

### US-07: Manage tags

As an admin user, I want to create, update, and delete allowed tags so that skills remain organized under a controlled taxonomy.

**Acceptance criteria**

1. Admin page lists all tags.
2. Admin user can create a tag name and edit an existing tag name.
3. Admin user can delete a tag only if no skill is assigned to it, or the app forces reassignment first.
4. Skill creation and editing allow only one tag from the approved tag list.

### US-08: Manage OpenAI API key

As an admin user, I want to save the OpenAI API key so that prompt-based generation can work.

**Acceptance criteria**

1. Admin page includes key input with masked display by default.
2. Admin can save and replace the key.
3. App stores the key in localStorage.
4. App can validate presence of the key before generation attempts.
5. App must display a warning that browser-only storage is not secure.

## 5. Functional requirements

### Skill management

- FR-01: The app must maintain a list of skills in localStorage.
- FR-02: Each skill must contain id, title, tagId, markdownBody, createdAt, updatedAt.
- FR-03: Each skill must have exactly one tag.
- FR-04: The editor must support Markdown authoring with syntax highlighting.
- FR-05: The preview must render common Markdown elements including headings, lists, tables, code fences, block quotes, and links.
- FR-06: The app must support creation from template and creation from prompt.
- FR-07: The app must support save, delete, and export operations.

### Tag administration

- FR-08: The app must maintain a controlled tag catalog in localStorage.
- FR-09: Tags must be manageable only from the admin page.
- FR-10: The app must prevent a skill from referencing a missing tag.

### Settings

- FR-11: The app must store app settings in localStorage.
- FR-12: Settings must include the OpenAI API key.
- FR-13: The admin page must display a warning about insecure client-side key storage.

### AI generation

- FR-14: The app must send the user prompt and a hardcoded skill template as context to OpenAI.
- FR-15: The app must request markdown-only output suitable for `SKILL.md`.
- FR-16: The generated response must be inserted into the editor without automatic save.
- FR-17: Failed generation must not overwrite existing saved content.

### Navigation and UI

- FR-18: The app must include routes for skill workspace and admin settings.
- FR-19: The main workspace must include tag filter, skill list, metadata panel, editor panel, and preview panel.
- FR-20: The visual system must use a dark blue enterprise palette, generous whitespace, strong section headers, and clean card surfaces inspired by NTT DATA.
- FR-21: The app must include NTT DATA logo placement in header for demo branding.

### Testing

- FR-22: The project must include end-to-end tests only.
- FR-23: Playwright must cover all critical user journeys and major error paths.

## 6. Non-functional requirements

- NFR-01: App must remain usable after browser refresh because state persists in localStorage.
- NFR-02: Initial application load should render the workspace in under 2 seconds on a typical developer laptop with fewer than 250 locally stored skills.
- NFR-03: Markdown typing latency should remain acceptable for documents up to 50 KB.
- NFR-04: Interactive controls must be keyboard accessible.
- NFR-05: Color contrast must be sufficient for readable enterprise UI.
- NFR-06: The design must be responsive down to tablet width; mobile support is best effort but not primary.

## 7. Constraints

- Must use Angular and TypeScript.
- Must use CodeMirror, not Monaco.
- Must not use any backend.
- Must not introduce Karma or Jasmine.
- Must use Playwright for tests.
- Data persistence must use localStorage only.
- API calls are executed directly from the browser.

## 8. Risks and edge cases

- Browser storage can be cleared, losing all data.
- API key exposure risk is inherent to localStorage and direct browser requests.
- Missing tags after admin edits can invalidate existing skills if migration rules are not enforced.
- OpenAI output may include prose around markdown unless response constraints are explicit.
- Large markdown bodies may degrade preview performance if rendering is not throttled.

## 9. Success criteria

- A demo user can create a valid `SKILL.md` from template in under 30 seconds.
- A demo user can generate a draft from prompt and continue editing without page reload.
- A demo user can find a saved skill by tag and export it as `.md`.
- A demo admin can configure tags and API key without leaving the app.
- Playwright suite passes for all core workflows and error states.
