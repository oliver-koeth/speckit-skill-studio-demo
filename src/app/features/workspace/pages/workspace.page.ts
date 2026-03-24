import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'app-workspace-page',
  template: `
    <section class="page-card">
      <p class="eyebrow">Workspace</p>
      <h1>Draft skills from a single shared studio shell.</h1>
      <p class="body">
        The workspace route is now framed by the global application shell so later feature work can
        focus on authoring flows instead of rebuilding navigation and branding.
      </p>
    </section>
  `,
  styles: [
    `
      .page-card {
        max-width: 48rem;
        padding: 2rem;
        border: 1px solid #d4e0ef;
        border-radius: 1.5rem;
        background: linear-gradient(180deg, #ffffff 0%, #f8fbff 100%);
        box-shadow: 0 28px 80px rgba(14, 31, 53, 0.08);
      }

      .eyebrow {
        margin: 0 0 0.75rem;
        font-size: 0.75rem;
        font-weight: 700;
        letter-spacing: 0.12em;
        text-transform: uppercase;
        color: #1f5db8;
      }

      h1 {
        margin: 0 0 1rem;
        font-size: clamp(2rem, 4vw, 2.75rem);
      }

      .body {
        margin: 0;
        max-width: 42rem;
        line-height: 1.6;
      }
    `
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class WorkspacePageComponent {}
