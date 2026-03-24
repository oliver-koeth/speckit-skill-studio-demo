import { Injectable } from '@angular/core';

import { SettingsRecord, SkillRecord, TagRecord } from '../../shared/models/skill-studio.models';

const STORAGE_KEYS = {
  skills: 'skillStudio.skills',
  tags: 'skillStudio.tags',
  settings: 'skillStudio.settings',
  schemaVersion: 'skillStudio.schemaVersion'
} as const;

const CURRENT_SCHEMA_VERSION = 1;

const DEFAULT_SETTINGS: SettingsRecord = {
  openAiApiKey: '',
  themeMode: 'light',
  showSecurityWarningDismissed: false
};

const DEFAULT_TAGS: ReadonlyArray<Pick<TagRecord, 'id' | 'name'>> = [
  { id: 'tag-programming', name: 'Programming' },
  { id: 'tag-operations', name: 'Operations' },
  { id: 'tag-management', name: 'Management' }
];

@Injectable({
  providedIn: 'root'
})
export class BrowserStorageService {
  bootstrap(): void {
    if (this.readSchemaVersion() === null) {
      this.writeSchemaVersion(CURRENT_SCHEMA_VERSION);
    }

    if (this.readSkills().length === 0 && !this.hasStoredValue(STORAGE_KEYS.skills)) {
      this.writeSkills([]);
    }

    if (this.readTags().length === 0) {
      this.writeTags(this.buildDefaultTags());
    }

    if (!this.hasStoredValue(STORAGE_KEYS.settings)) {
      this.writeSettings(DEFAULT_SETTINGS);
    }
  }

  readSkills(): SkillRecord[] {
    return this.readJson(STORAGE_KEYS.skills, []);
  }

  writeSkills(skills: SkillRecord[]): void {
    this.writeJson(STORAGE_KEYS.skills, skills);
  }

  readTags(): TagRecord[] {
    return this.readJson(STORAGE_KEYS.tags, []);
  }

  writeTags(tags: TagRecord[]): void {
    this.writeJson(STORAGE_KEYS.tags, tags);
  }

  readSettings(): SettingsRecord {
    return this.readJson(STORAGE_KEYS.settings, DEFAULT_SETTINGS);
  }

  writeSettings(settings: SettingsRecord): void {
    this.writeJson(STORAGE_KEYS.settings, settings);
  }

  readSchemaVersion(): number | null {
    const rawValue = this.storage.getItem(STORAGE_KEYS.schemaVersion);

    if (rawValue === null) {
      return null;
    }

    const parsedValue = Number.parseInt(rawValue, 10);
    return Number.isFinite(parsedValue) ? parsedValue : null;
  }

  writeSchemaVersion(version: number): void {
    this.storage.setItem(STORAGE_KEYS.schemaVersion, String(version));
  }

  private buildDefaultTags(): TagRecord[] {
    const timestamp = new Date().toISOString();

    return DEFAULT_TAGS.map((tag) => ({
      ...tag,
      createdAt: timestamp,
      updatedAt: timestamp
    }));
  }

  private hasStoredValue(key: (typeof STORAGE_KEYS)[keyof typeof STORAGE_KEYS]): boolean {
    return this.storage.getItem(key) !== null;
  }

  private readJson<T>(key: (typeof STORAGE_KEYS)[keyof typeof STORAGE_KEYS], fallbackValue: T): T {
    const rawValue = this.storage.getItem(key);

    if (rawValue === null) {
      return fallbackValue;
    }

    try {
      return JSON.parse(rawValue) as T;
    } catch {
      return fallbackValue;
    }
  }

  private writeJson<T>(key: (typeof STORAGE_KEYS)[keyof typeof STORAGE_KEYS], value: T): void {
    this.storage.setItem(key, JSON.stringify(value));
  }

  private get storage(): Storage {
    return globalThis.localStorage;
  }
}
