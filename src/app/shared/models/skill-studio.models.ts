export type ThemeMode = 'light';

export interface SkillRecord {
  id: string;
  title: string;
  tagId: string;
  markdownBody: string;
  createdAt: string;
  updatedAt: string;
}

export interface TagRecord {
  id: string;
  name: string;
  createdAt: string;
  updatedAt: string;
}

export interface SettingsRecord {
  openAiApiKey: string;
  themeMode: ThemeMode;
  showSecurityWarningDismissed: boolean;
}

export type SkillDraftSource = 'template' | 'generated' | 'existing';

export interface SkillDraft {
  id?: string;
  title: string;
  tagId: string;
  markdownBody: string;
  dirty: boolean;
  source: SkillDraftSource;
}
