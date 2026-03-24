import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-shell',
  standalone: true,
  imports: [RouterLink, RouterLinkActive, RouterOutlet],
  template: `
    <div class="shell">
      <header class="header">
        <a class="brand" href="https://us.nttdata.com/en/" target="_blank" rel="noreferrer">
          <span class="brand-logo-frame">
            <img src="assets/brand/ntt-data-logo.svg" alt="NTT DATA logo" />
          </span>
          <span class="brand-copy">
            <span class="brand-kicker">Demo workspace</span>
            <span class="brand-name">Skill Studio</span>
          </span>
        </a>

        <nav class="nav" aria-label="Primary">
          <a
            routerLink="/"
            [routerLinkActiveOptions]="{ exact: true }"
            routerLinkActive="is-active"
          >
            Workspace
          </a>
          <a routerLink="/admin" routerLinkActive="is-active">Admin</a>
        </nav>
      </header>

      <main class="content">
        <router-outlet />
      </main>
    </div>
  `,
  styles: [
    `
      :host {
        display: block;
        min-height: 100%;
      }

      .shell {
        min-height: 100%;
        background:
          radial-gradient(circle at top right, rgba(74, 134, 232, 0.18), transparent 28%),
          linear-gradient(
            180deg,
            var(--ss-color-header) 0 7.5rem,
            var(--ss-color-surface-alt) 7.5rem 100%
          );
      }

      .header {
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 1.5rem;
        width: min(100%, var(--ss-content-width));
        margin-inline: auto;
        padding: 1.5rem 2rem;
      }

      .brand {
        display: inline-flex;
        align-items: center;
        gap: 1rem;
        color: inherit;
        text-decoration: none;
      }

      .brand-logo-frame {
        display: inline-flex;
        align-items: center;
        justify-content: center;
        width: 9.5rem;
        padding: 0.8rem 1rem;
        border-radius: var(--ss-radius-pill);
        background: rgba(255, 255, 255, 0.1);
        backdrop-filter: blur(10px);
      }

      img {
        display: block;
        width: 100%;
        height: auto;
      }

      .brand-copy {
        display: grid;
        gap: 0.25rem;
        color: var(--ss-color-ink-inverse);
      }

      .brand-kicker {
        font-size: 0.72rem;
        font-weight: 700;
        letter-spacing: 0.16em;
        text-transform: uppercase;
        opacity: 0.72;
      }

      .brand-name {
        font-size: 1.4rem;
        font-weight: 700;
        letter-spacing: 0.01em;
      }

      .nav {
        display: inline-flex;
        gap: 0.5rem;
        padding: 0.35rem;
        border: 1px solid rgba(255, 255, 255, 0.16);
        border-radius: var(--ss-radius-pill);
        background: rgba(7, 22, 43, 0.36);
        backdrop-filter: blur(12px);
      }

      .nav a {
        padding: 0.8rem 1.1rem;
        border-radius: 999px;
        color: rgba(248, 251, 255, 0.88);
        font-weight: 600;
        text-decoration: none;
        transition: background-color 120ms ease, color 120ms ease, transform 120ms ease;
      }

      .nav a:hover,
      .nav a:focus-visible {
        color: #ffffff;
        background: rgba(255, 255, 255, 0.1);
        transform: translateY(-1px);
      }

      .nav a.is-active {
        color: var(--ss-color-header);
        background: var(--ss-color-surface);
      }

      .content {
        padding: 1rem 2rem 2.5rem;
      }

      @media (max-width: 720px) {
        .header {
          flex-direction: column;
          align-items: stretch;
          padding-inline: 1rem;
        }

        .brand {
          flex-direction: column;
          align-items: flex-start;
        }

        .brand-logo-frame {
          width: min(100%, 11rem);
        }

        .nav {
          width: 100%;
          justify-content: space-between;
        }

        .nav a {
          flex: 1;
          text-align: center;
        }

        .content {
          padding-inline: 1rem;
        }
      }
    `
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppShellComponent {}
