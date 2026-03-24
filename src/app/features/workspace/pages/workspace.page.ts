import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  standalone: true,
  selector: 'app-workspace-page',
  imports: [RouterLink],
  template: `
    <main class="page">
      <section class="card">
        <p class="eyebrow">Skill Studio</p>
        <h1>Workspace foundation is in place.</h1>
        <p>
          This placeholder route keeps the first iteration focused on the Angular scaffold, central
          routing, and feature-oriented app structure.
        </p>
        <a routerLink="/admin">Open the admin placeholder</a>
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
        background: linear-gradient(180deg, #ffffff 0%, #f8fbff 100%);
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
        margin: 0 0 1.25rem;
        line-height: 1.6;
      }

      a {
        color: #0f3f8c;
        font-weight: 600;
        text-decoration: none;
      }
    `
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class WorkspacePageComponent {}
