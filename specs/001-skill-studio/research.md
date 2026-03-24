# Research Notes: Skill Studio

## 1. Why Angular standalone components

Angular standalone components reduce setup complexity, fit a modern Angular application structure, and work well for a compact SPA with route-level separation between workspace and admin areas.

## 2. Why CodeMirror 6

CodeMirror 6 is lighter than Monaco and still provides a strong markdown authoring experience with syntax highlighting, monospace editing, extension-based configuration, and adequate performance for medium documents.

## 3. Why localStorage instead of IndexedDB

The requirement explicitly states localStorage. For a demo with modest data volume, localStorage keeps persistence simple and transparent. The tradeoff is weaker scalability, no transactional behavior, and coarse write operations.

## 4. Why direct browser calls to OpenAI

The user explicitly selected direct calls using a key stored on the admin page. This keeps the demo backend-free, but it must be documented as insecure for any real production use.

## 5. Why one tag per skill

A single tag simplifies browse flows, storage schema, filtering logic, and admin rules. It also keeps the UI easier to scan in a demo.

## 6. Why split view editor + preview

A split layout is the most effective compromise between authoring and verification for markdown-heavy workflows. It lets users see structure, code blocks, and final rendering at the same time.

## 7. Why export only `.md`

The user chose a single-file markdown export. That matches the product purpose closely and avoids adding archive and backup complexity outside the current scope.

## 8. Why end-to-end tests only

The spec explicitly excludes Karma and similar test runners. The best coverage strategy is therefore a Playwright suite focused on critical paths, persistence, error handling, and regression around localStorage interactions.

## 9. Hardcoded template strategy

The built-in template should provide stable sections that both template-based creation and prompt-based creation use. This reduces output variance and improves consistency of generated skills.

### Proposed template

```md
# SKILL: <title>

## Purpose
Describe what the skill helps an agent accomplish.

## Inputs
List expected user inputs, prerequisites, or assumptions.

## Outputs
Describe what the skill should produce.

## Steps
1. Step one
2. Step two
3. Step three

## Rules
- Rule one
- Rule two

## Examples
### Example 1
Input:

Output:

## Failure Modes
- Potential issue
- Recovery action
```

## 10. Branding interpretation

The UI should be close to NTT DATA brand language but implemented with public-facing cues only:

- dark blue hero/header treatment
- white or light neutral surfaces
- clean enterprise spacing
- strong typography hierarchy
- restrained accent usage
- logo placed in top navigation

The design should avoid using non-public internal assets or inventing official brand tokens that are not available.
