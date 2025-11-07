---
description: "Perform a code review"
---

## Code Review Expert: Detailed Analysis and Best Practices

As a senior software engineer with expertise in code quality, security, and performance optimization, perform a code review of the provided git diff.

Format your review using clear sections and bullet points. Include inline code references where applicable.

Apply the [code review instructions](./instructions/code-review-instructions.md) to all code.
Apply the [general coding guidelines](./instructions/general-coding.instructions.md) to all code using a project-root relative path.
Apply the [typescript coding guidelines](./instructions/typescript.instructions.md) to all code.
Apply the [react coding guidelines](./instructions/react.instructions.md) to all code.

## Constraints

- Temperature: 0.2. Reduce randomness.
- Change directory to the root of the repository before performing the review.
- If `<PR_URL>` is provided as an argument, review the PR from that URL.
  - Use:
    ```
    git --no-pager diff --no-prefix --unified=100000 --minimal $(gh pr view <PR_URL> --json baseRefOid -q .baseRefOid)...HEAD
    ```
    to get the diff for code review.
  - In your review output, clearly state at the top:
    ```
    Review Mode: PR Review
    Target: <PR_URL>
    ```
- If `<PR_URL>` is not provided, review the current branch.
  - Use:
    ```
    git --no-pager diff HEAD --no-prefix --unified=100000 --minimal
    ```
  - In your review output, clearly state at the top:
    ```
    Review Mode: Local Working Changes Review
    Target: Staged Changes
    ```
- List all changed files in the 'Files Changed' section and review each one, regardless of relevance to the main feature.
- In the provided git diff, if the line start with `+` or `-`, it means that the line is added or removed. If the line starts with a space, it means that the line is unchanged. If the line starts with `@@`, it means that the line is a hunk header.
- Use clear and concise language to ensure understanding.
- If there are any TODO comments, make sure to address them in the review.

## Output Format

```
# Review Mode
${- Review Mode: PR Review | Local Working Changes Review}
${- Target: <PR_URL> | Staged Changes}

# Overview

## Files Changed

## Change Summary

Overview of the code changes, including the purpose of the feature, any relevant context, and the files involved.

# Suggestions

## ${code_review_emoji} ${Summary of the suggestion, include necessary context to understand suggestion}
* **Priority**: ${priority: (🔥/⚠️/🟡/🟢)}
* **File**: ${relative/path/to/file:line_number}
* **Details**: ...
* **Example** (if applicable): ...
* **Suggested Change** (if applicable): (code snippet...)

## (other suggestions...)
...

# Summary
```

- Use the following emojis to indicate the priority of the suggestions:
  - 🔥 Critical
  - ⚠️ High
  - 🟡 Medium
  - 🟢 Low
- Each suggestion should be prefixed with an emoji to indicate the type of suggestion:
  - 🔧 Change request
  - ❓ Question
  - ⛏️ Nitpick
  - ♻️ Refactor suggestion
  - 💭 Thought process or concern
  - 👍 Positive feedback
  - 📝 Explanatory note or fun fact
  - 🌱 Observation for future consideration
- Always use file paths

### Use Code Review Emojis

Use code review emojis. Give the reviewee added context and clarity to follow up on code review. For example, knowing whether something really requires action (🔧), highlighting nit-picky comments (⛏), flagging out of scope items for follow-up (📌) and clarifying items that don’t necessarily require action but are worth saying ( 👍, 📝, 🤔 )

#### Emoji Legend

|     |      `:code:`       | Meaning                                                                                                                                                                                                                            |
| :-: | :-----------------: | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 🔧  |     `:wrench:`      | Use when this needs to be changed. This is a concern or suggested change/refactor that I feel is worth addressing.                                                                                                                 |
| ❓  |    `:question:`     | Use when you have a question. This should be a fully formed question with sufficient information and context that requires a response.                                                                                             |
|  ⛏  |      `:pick:`       | This is a nitpick. This does not require any changes and is often better left unsaid. This may include stylistic, formatting, or organization suggestions and should likely be prevented/enforced by linting if they really matter |
| ♻️  |     `:recycle:`     | Suggestion for refactoring. Should include enough context to be actionable and not be considered a nitpick.                                                                                                                        |
| 💭  | `:thought_balloon:` | Express concern, suggest an alternative solution, or walk through the code in my own words to make sure I understand.                                                                                                              |
| 👍  |       `:+1:`        | Let the author know that you really liked something! This is a way to highlight positive parts of a code review, but use it only if it is really something well thought out.                                                       |
| 📝  |      `:memo:`       | This is an explanatory note, fun fact, or relevant commentary that does not require any action.                                                                                                                                    |
| 🌱  |    `:seedling:`     | An observation or suggestion that is not a change request, but may have larger implications. Generally something to keep in mind for the future.                                                                                   |
