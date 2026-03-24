# Tasks: Skill Studio

## Phase 1: Foundation

- [ ] T001 Scaffold Angular application structure with standalone routing
- [ ] T002 Add application shell, global header, and workspace/admin routes
- [ ] T003 Add NTT DATA-inspired design tokens, layout primitives, and logo asset placement
- [ ] T004 Implement storage service with schema versioning and bootstrap default tags
- [ ] T005 Define TypeScript models for skills, tags, settings, and drafts

## Phase 2: Skill workspace

- [ ] T006 Build sidebar with tag filters and skill list
- [ ] T007 Build workspace page with title field, single-tag selector, and toolbar actions
- [ ] T008 Integrate CodeMirror 6 markdown editor with monospace styling and syntax highlighting
- [ ] T009 Build markdown preview pane with safe rendering
- [ ] T010 Implement create-from-template flow using the hardcoded `SKILL.md` template
- [ ] T011 Implement save and update behavior for skills
- [ ] T012 Implement delete flow with confirmation dialog
- [ ] T013 Implement markdown export as `.md`
- [ ] T014 Add dirty-state handling, empty states, and success/error toasts

## Phase 3: Admin features

- [ ] T015 Build admin page layout with settings card and tag CRUD card
- [ ] T016 Implement OpenAI API key save/load with masked input and security warning
- [ ] T017 Implement create/edit/delete tag flows with uniqueness validation
- [ ] T018 Implement protection against deleting tags in active use unless reassigned

## Phase 4: OpenAI generation

- [ ] T019 Implement prompt generation dialog or panel
- [ ] T020 Implement generation service that calls OpenAI Responses API directly from the browser
- [ ] T021 Include the hardcoded skill template as generation context
- [ ] T022 Constrain model output to markdown-only and insert it into the current draft
- [ ] T023 Implement generation error handling for missing key, unauthorized key, rate limit, and network failures

## Phase 5: End-to-end testing only

- [ ] T024 Add Playwright configuration and scripts
- [ ] T025 Create E2E test: bootstrap with default tags
- [ ] T026 Create E2E test: create skill from template and save
- [ ] T027 Create E2E test: edit existing skill and verify persistence after refresh
- [ ] T028 Create E2E test: delete skill
- [ ] T029 Create E2E test: export markdown file
- [ ] T030 Create E2E test: create, edit, and delete tag
- [ ] T031 Create E2E test: block deletion of tag in use
- [ ] T032 Create E2E test: generation blocked when API key missing
- [ ] T033 Create E2E test: successful generation using mocked OpenAI response
- [ ] T034 Create E2E test: generation failure path with mocked error response
- [ ] T035 Create E2E test: navigation between workspace and admin pages

## Phase 6: Polish and readiness

- [ ] T036 Improve keyboard accessibility and focus states
- [ ] T037 Tune responsive layout for tablet widths
- [ ] T038 Review copy for warnings, empty states, and error states
- [ ] T039 Verify localStorage payload integrity across all flows
- [ ] T040 Final manual walkthrough against the acceptance criteria in `spec.md`
