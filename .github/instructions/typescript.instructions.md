---
applyTo: "**/*.ts,**/*.tsx"
---

Apply the [general coding guidelines](./general-coding.instructions.md) to all code.

# Project coding standards for TypeScript and React

## Perspectives

These guidelines aim to:
- Encourage strong type safety and reduce runtime errors
- Improve maintainability and readability across the codebase
- Promote predictable, functional, and testable React code
- Help Copilot produce consistent, type-correct suggestions

## TypeScript Guidelines

- Always define explicit types for function parameters and return values
- Avoid using the `any` type to maintain type safety
- Prefer immutable data (`const`, `readonly`) to keep state predictable
- Use optional chaining (`?.`) and nullish coalescing (`??`) operators for safer property access
- Write unit tests for all utility functions

## GraphQL Guidelines

- Always define types for GraphQL resolvers
- Avoid destructuring GraphQL context and input arguments in resolvers to keep it clear where each variable comes from.
- Always use snake_case for GraphQL schema and database column names
