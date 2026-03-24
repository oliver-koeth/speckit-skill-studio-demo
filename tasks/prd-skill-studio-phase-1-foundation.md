# PRD: Skill Studio Phase 1 Foundation

## Introduction

Phase 1 establishes the minimum technical foundation for Skill Studio so later phases can add workspace CRUD, admin flows, OpenAI generation, and end-to-end coverage without reworking core app structure. This phase is limited to app scaffolding, top-level routing and shell, visual tokens and branding setup, browser persistence bootstrap, and shared TypeScript models.

The outcome of this phase is not a feature-complete product. It is a stable Angular frontend base that can render the workspace and admin routes, apply the intended visual language, and provide a durable storage/model contract for all later work.

## Goals

- Create an Angular standalone application structure aligned with the planned feature-oriented layout.
- Establish the root application shell with a global header and working routes for `/` and `/admin`.
- Introduce shared design tokens and layout primitives that reflect the NTT DATA-inspired design direction.
- Define and implement the localStorage foundation, including schema version bootstrapping and default tags.
- Define shared TypeScript models for skills, tags, settings, and drafts so later phases can build against stable contracts.

## User Stories

### US-001: Scaffold the Angular application foundation
**Description:** As a developer, I want a standalone Angular app scaffold with the planned folder structure so that later feature work can be added without restructuring the project.

**Acceptance Criteria:**
- [ ] Angular app uses standalone bootstrapping rather than NgModule-based app startup.
- [ ] Project structure includes `core`, `features`, and `shared` areas consistent with the implementation plan.
- [ ] Route configuration exists in a central app routes file.
- [ ] App can start successfully without backend dependencies.
- [ ] Typecheck passes.

### US-002: Add the application shell and route-level entry points
**Description:** As a user, I want a consistent shell with a global header and working navigation between workspace and admin pages so that the app has a usable frame before detailed features are built.

**Acceptance Criteria:**
- [ ] Root route `/` renders a workspace page placeholder inside the shared shell.
- [ ] `/admin` renders an admin page placeholder inside the shared shell.
- [ ] A global header is visible on both routes.
- [ ] The header includes demo branding with NTT DATA logo placement.
- [ ] Unknown routes redirect to `/`.
- [ ] Typecheck passes.
- [ ] Verify in browser using dev-browser skill.

### US-003: Establish shared design tokens and layout primitives
**Description:** As a developer, I want reusable theme tokens and layout primitives so that later UI work stays visually consistent with the intended enterprise design language.

**Acceptance Criteria:**
- [ ] Shared style tokens define header, surface, border, and accent colors aligned with the design notes.
- [ ] Typography, spacing, and card/container primitives are defined in a reusable way.
- [ ] Global shell and page placeholders consume the shared tokens rather than hardcoded one-off values.
- [ ] Logo assets are stored in a stable app asset location for later reuse.
- [ ] Typecheck passes.
- [ ] Verify in browser using dev-browser skill.

### US-004: Bootstrap browser storage and schema versioning
**Description:** As a developer, I want a storage service with schema version handling and default-tag bootstrap so that the app starts from a valid localStorage state on first load and can evolve safely later.

**Acceptance Criteria:**
- [ ] Storage service reads and writes the documented localStorage keys: `skillStudio.skills`, `skillStudio.tags`, `skillStudio.settings`, and `skillStudio.schemaVersion`.
- [ ] First-run bootstrap initializes schema version `1`.
- [ ] First-run bootstrap creates default tags `Programming`, `Operations`, and `Management` when no tag data exists.
- [ ] Bootstrap does not duplicate tags on later app loads.
- [ ] Storage service exposes explicit typed read/write helpers or equivalent APIs for skills, tags, and settings.
- [ ] Typecheck passes.

### US-005: Define stable shared models for persisted data and draft state
**Description:** As a developer, I want shared TypeScript models for skill records, tags, settings, and drafts so that later features use one consistent contract for persistence and UI state.

**Acceptance Criteria:**
- [ ] Shared model definitions exist for `SkillRecord`, `TagRecord`, `SettingsRecord`, and `SkillDraft`.
- [ ] Model fields match the data model specification, including timestamps and single-tag ownership.
- [ ] Settings model includes `openAiApiKey`, `themeMode`, and `showSecurityWarningDismissed`.
- [ ] Draft model includes `dirty` and `source` state for future workspace flows.
- [ ] Model definitions are imported from a shared location suitable for later services and UI components.
- [ ] Typecheck passes.

## Functional Requirements

1. FR-1: The app must bootstrap using Angular standalone application APIs.
2. FR-2: The app must define a feature-oriented source structure with clear `core`, `features`, and `shared` boundaries.
3. FR-3: The app must provide a root workspace route at `/`.
4. FR-4: The app must provide an admin route at `/admin`.
5. FR-5: The app must provide a global shell and header that wrap both top-level routes.
6. FR-6: The shell must include visible demo branding with NTT DATA logo placement in the header.
7. FR-7: Shared styling must define reusable visual tokens for header background, surfaces, borders, accent color, spacing, and typography.
8. FR-8: Shared layout primitives must be reusable by later workspace and admin components.
9. FR-9: The app must store data under the keys `skillStudio.skills`, `skillStudio.tags`, `skillStudio.settings`, and `skillStudio.schemaVersion`.
10. FR-10: The storage layer must initialize schema version `1` on first load.
11. FR-11: The storage layer must bootstrap default tags when tags are missing.
12. FR-12: The default tags must be `Programming`, `Operations`, and `Management`.
13. FR-13: The bootstrap flow must be idempotent and must not duplicate default tags on subsequent loads.
14. FR-14: Shared TypeScript models must exist for skill records, tag records, settings, and draft state.
15. FR-15: Skill records must include `id`, `title`, `tagId`, `markdownBody`, `createdAt`, and `updatedAt`.
16. FR-16: Tag records must include `id`, `name`, `createdAt`, and `updatedAt`.
17. FR-17: Settings must include `openAiApiKey`, `themeMode`, and `showSecurityWarningDismissed`.
18. FR-18: Draft state must include `title`, `tagId`, `markdownBody`, `dirty`, and `source`.

## Non-Goals

- No skill CRUD implementation beyond storage and model groundwork.
- No CodeMirror integration or markdown preview rendering.
- No template creation flow, generation flow, save flow, delete flow, or export flow.
- No tag CRUD UI or API key settings UI beyond route placeholders and shell framing.
- No Playwright coverage in this phase.
- No backend services, secret management, or authentication.

## Design Considerations

- Use the NTT DATA-inspired direction from the design spec: dark blue header, light surfaces, generous spacing, strong section headings, and restrained accent usage.
- Keep page content intentionally skeletal in this phase. The purpose is to prove shell structure and visual foundations, not to ship detailed workspace/admin screens yet.
- Use a public NTT DATA logo asset and place it in a stable header-friendly location under app assets so later phases do not need to revisit branding setup.

## Technical Considerations

- The storage service should centralize key names and schema version logic to avoid key drift in later phases.
- Default-tag bootstrap should use fixed semantic IDs `tag-programming`, `tag-operations`, and `tag-management` so tests, migrations, and future references remain predictable.
- The route shell should make it easy to add feature pages without changing top-level bootstrapping again.
- Shared models should be framework-agnostic TypeScript interfaces/types that can be imported by services and UI code.
- Since the app is frontend-only, all persistence logic must work entirely in the browser without any server assumptions.

## Success Metrics

- A developer can run the app and navigate between `/` and `/admin` within a shared shell.
- The application initializes localStorage into a valid versioned state on first load.
- Later phases can build services and UI on top of shared models without redefining storage contracts.
- The visual baseline already reflects the intended enterprise demo styling before feature-complete screens are added.

## Open Questions

- No blocking open questions remain for Phase 1 scope based on the current spec and confirmed assumptions.

## Backlog

1. T001 Scaffold Angular application structure with standalone routing.
2. T002 Add application shell, global header, and workspace/admin routes.
3. T003 Add NTT DATA-inspired design tokens, layout primitives, and logo asset placement.
4. T004 Implement storage service with schema versioning and bootstrap default tags.
5. T005 Define TypeScript models for skills, tags, settings, and drafts.
