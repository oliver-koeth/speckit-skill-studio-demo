# Design and UX Specification: Skill Studio

## 1. Product design direction

The application should feel close to the public NTT DATA web presence:

- dark blue global header
- clean, spacious enterprise layout
- large section headlines
- white and pale neutral surfaces
- restrained use of accent color
- clear card separation and table/list organization
- prominent, understated logo placement

## 2. Information architecture

### Routes

- `/` — Skill workspace
- `/admin` — Admin settings and tag management

## 3. Workspace layout

### Desktop layout

A 3-column layout is preferred:

1. **Navigation rail / sidebar**
   - logo
   - tag filter list
   - skill list for selected tag
   - primary actions

2. **Editor workspace**
   - title input
   - tag selector
   - create from template button
   - create from prompt flow
   - save / delete / export actions
   - CodeMirror markdown editor

3. **Rendered preview**
   - live markdown rendering
   - scroll sync is optional, not required for v1

### Tablet layout

- sidebar collapses into an overlay panel or stacked section
- editor and preview become vertical panes

## 4. Admin layout

### Sections

1. API settings card
   - masked key input
   - show/hide toggle
   - save button
   - insecure storage warning

2. Tag management card
   - list existing tags
   - add tag form
   - edit inline action
   - delete action with validation feedback

## 5. Component inventory

- `AppShellComponent`
- `HeaderComponent`
- `SidebarComponent`
- `TagFilterComponent`
- `SkillListComponent`
- `SkillToolbarComponent`
- `SkillMetadataFormComponent`
- `MarkdownEditorComponent`
- `MarkdownPreviewComponent`
- `PromptGenerationDialogComponent`
- `AdminSettingsComponent`
- `TagCrudComponent`
- `ConfirmationDialogComponent`
- `ToastComponent`

## 6. Interaction details

### New skill from template

- user clicks primary CTA
- app creates a draft with template markdown and selected tag
- focus moves to title input

### Generate from prompt

- user opens prompt dialog
- user enters prompt
- user submits
- UI shows loading state in dialog and toolbar
- response inserts into draft body and marks draft dirty
- editor receives focus

### Save

- save button enabled when draft is dirty and valid
- save writes to localStorage and updates timestamps
- success toast appears briefly

### Export

- export button creates a blob and downloads `.md`
- content comes from saved state if no unsaved changes; otherwise current draft state may be exported with a visible note in UI

## 7. Accessibility requirements

- all interactive elements reachable by keyboard
- visible focus indicators
- appropriate labels for form controls
- sufficient contrast in header, buttons, and editor chrome
- status messages announced politely where feasible

## 8. Suggested visual tokens

These are implementation suggestions, not official brand tokens.

- Primary header background: deep navy
- Surface: white
- Secondary surface: very light gray-blue
- Border: light cool gray
- Accent: bright cyan-blue or teal-blue used sparingly
- Heading typography: strong, modern sans-serif
- Code/editor typography: monospace

## 9. Logo treatment

Use the publicly visible NTT DATA logo in the header for demo branding, aligned left. Maintain generous clear space. Avoid stretching or recoloring the mark.

## 10. Empty states

- no skills yet: encourage creation from template or prompt
- no tags configured: direct user to admin page
- no API key set: explain that generation needs an admin-configured key

## 11. Error states

- invalid or missing API key
- network failure during generation
- tag deletion blocked by assigned skills
- localStorage quota exceeded

Each error must be actionable and non-destructive.
