import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'app-admin-page',
  template: `
    <main class="page">
      <section class="card">
        <p class="eyebrow">Admin</p>
        <h1>Admin tools will live here.</h1>
        <p>
          This route placeholder confirms the standalone router foundation is wired before the shared
          shell and feature UI are introduced.
        </p>
      </section>
    </main>
  `,
  styles: [
    `
      .page {
        padding: 2rem;
      }

      .card {
        max-width: 48rem;
        padding: 2rem;
        border: 1px solid #d8e1ec;
        border-radius: 1rem;
        background: #ffffff;
        box-shadow: 0 24px 60px rgba(14, 31, 53, 0.08);
      }

      .eyebrow {
        margin: 0 0 0.75rem;
        font-size: 0.75rem;
        font-weight: 700;
        letter-spacing: 0.12em;
        text-transform: uppercase;
        color: #2563eb;
      }

      h1 {
        margin: 0 0 1rem;
        font-size: clamp(2rem, 4vw, 2.75rem);
      }

      p {
        margin: 0;
        line-height: 1.6;
      }
    `
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AdminPageComponent {}
