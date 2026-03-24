# Ralph for Codex Interaction Demo

This document shows how `ralph.sh` and the related Codex skills can be used together in a Ralph-driven delivery workflow. For more info on the script used in this repo see https://github.com/aytzey/ralph_for_codex

## Skills used in this flow

- `prd` — creates a PRD and backlog from an existing planning document such as `MIGRATION_PLAN.md` or `PLAN.md`
- `ralph` — converts the PRD into `prd.json` format for Ralph execution

## Usage model

- Steps marked as Codex prompts are intended for copy and paste into the Codex App.
- The Ralph run itself is launched from bash.
- The phase branch is expected to be isolated per phase and uses the `ralph/` prefix.

## Example interaction flow

### Step 1. Create the phase branch

Purpose:

- suggest a branch name for the phase
- confirm the name with the user
- abort if the user does not accept it
- create and check out the branch if the user accepts it

Codex prompt:

```text
Suggest a name for the git branch for phase <NUM>. Branch shall have prefix ralph/. Check if the name suits me. If it does not suit me, abort. If it does suit me, check it out as a new branch.
```

Expected outcome:

- a new branch such as `ralph/phase-<num>-<short-name>` is created and checked out, but only after explicit user confirmation

### Step 2. Create the PRD and backlog

Purpose:

- use the `prd` skill to derive an execution-ready PRD/backlog from the source planning document
- ask follow-up questions if the source material is ambiguous
- work on the branch that is already created and checked out

```text
Use the PRD skill to create the PRD/backlog for phase <num> from PLAN.md. If things need to be clarified, do not hesitate to ask. The branch for this phase is already created and checked out.
```

Expected outcome:

- a PRD document for the selected phase
- backlog items derived from that PRD
- clarification questions if source material is incomplete

### Step 3. Convert the PRD to Ralph format and validate completeness

Purpose:

- use the `ralph` skill to turn the PRD into `prd.json`
- verify that `prd.json` contains enough information for Ralph execution
- identify any missing inputs, constraints, or acceptance details before execution starts

Codex prompt:

```text
1) Convert this PRD into prd.json format using the ralph skill.
2) Then check if all information is available for executing the prd.json. Is any information missing?
```

Alternative validation-only prompt:

```text
Can you check if all information is available for executing the prd.json? Is any information missing?
```

Expected outcome:

- `prd.json`
- a short gap analysis covering anything that would block or weaken execution

### Step 4. Run Ralph from bash

Purpose:

- execute Ralph against the prepared `prd.json`

Bash command:

```bash
./scripts/ralph/ralph.sh 20
```

Expected outcome:

- Ralph processes the queued work for the phase

### Step 5. Close the phase

Purpose:

- verify that the phase is actually complete by inspecting the relevant files
- abort phase close if implementation is incomplete
- push the current branch
- open a pull request with a concise, non-redundant description
- provide the pull request URL for merge review

Codex prompt:

```text
Close the current phase by doing the following:

1) Check if everything is implemented by really looking at the relevant files. If not complete, abort the close.
2) If complete, push the current branch to remote.
3) If push succeeds, create a PR using the gh CLI. Include a nice crisp description in the PR that is not redundant with the documentation or just links the documentation.
4) If PR succeeds, provide a URL where the PR can be merged into main.
```

Expected outcome:

- no close if the implementation is incomplete
- pushed branch if verification succeeds
- a GitHub pull request created with a focused description
- merge URL returned to the user
