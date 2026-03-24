# Contract: OpenAI Skill Generation

## 1. Purpose

Define the browser-to-OpenAI contract for generating initial `SKILL.md` content from a prompt.

## 2. Model

Use the GPT-5.3 Instant family through the current API model alias configured by the implementation.

Recommended default config field:

```ts
const OPENAI_MODEL = 'gpt-5.3-chat-latest';
```

## 3. Request contract

### Input

```ts
interface GenerateSkillInput {
  userPrompt: string;
  templateMarkdown: string;
}
```

### HTTP request

```http
POST /v1/responses
Authorization: Bearer <api-key>
Content-Type: application/json
```

### Example request body

```json
{
  "model": "gpt-5.3-chat-latest",
  "input": [
    {
      "role": "system",
      "content": [
        {
          "type": "input_text",
          "text": "You generate SKILL.md files only. Return markdown only, with no code fences and no commentary before or after the markdown. Follow the provided template structure unless the user request requires a minor adaptation."
        }
      ]
    },
    {
      "role": "user",
      "content": [
        {
          "type": "input_text",
          "text": "Template:\n# SKILL: <title>\n\n## Purpose\n...\n\nUser prompt:\nCreate a skill for Angular developers to maintain agent markdown skills."
        }
      ]
    }
  ]
}
```

## 4. Response contract

### Success handling

Implementation extracts plain text markdown from the first text output item.

```ts
interface GenerateSkillOutput {
  markdown: string;
}
```

### Validation rules

- response must not be empty
- response should begin with a top-level heading or template equivalent
- implementation strips leading and trailing whitespace
- implementation may remove accidental code fences if present

## 5. Error handling

Map API and network errors to user-facing categories:

- `missing_api_key`
- `unauthorized`
- `rate_limited`
- `network_error`
- `invalid_response`
- `unknown_error`

## 6. Prompt template used as context

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
