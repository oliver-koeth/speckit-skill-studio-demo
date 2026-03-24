# Repository Guidance

- Keep the Angular app standalone-first: bootstrap in `src/main.ts`, register routes in `src/app/app.routes.ts`, and prefer `loadComponent` route entry points over NgModules.
- Preserve the feature-oriented structure under `src/app`: shared cross-cutting code belongs in `core/` or `shared/`, while route pages live under `features/<feature>/pages/`.
- When adding app-wide chrome, mount it as a standalone shell route in `src/app/app.routes.ts` and keep feature pages as child `loadComponent` entries so shared header/navigation stays centralized.
- App-wide startup bootstrap work such as localStorage schema initialization should be registered in `src/app/app.config.ts` with an application initializer, rather than seeded from route components.
- Define app-wide visual tokens and reusable layout primitives in `src/styles.scss`; feature pages should consume those shared classes or CSS variables instead of duplicating one-off card and typography styles in each standalone component.
- Shared persistence and draft contracts should stay framework-agnostic under `src/app/shared/models/` so services and standalone components import the same interfaces instead of redefining storage shapes locally.
- Prefer Playwright for automated app verification. Do not reintroduce Karma/Jasmine unless the product requirements change.
- Keep browser specs under `tests/` with `playwright.config.ts` managing an `ng serve` webServer on `127.0.0.1:4200`; this is the expected local verification path for UI stories.
