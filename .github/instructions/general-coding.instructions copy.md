---
applyTo: '**'
---

# Project general coding standards

### Readability

- Ensure code is easy to understand at a glance
- Always use clear and consistent naming conventions
- Prefer simple structures with minimal nesting (prefer early returns)

### Domain-Driven Design

- Design around the business domain, not technical layers
- Use domain language consistently in code, documentation, and discussions (ubiquitous language)
- Define clear bounded contexts and keep domain logic independent between them
- Model entities, value objects, and aggregates explicitly to reflect real-world concepts
- Keep domain logic free from infrastructure or framework dependencies

### Efficiency

- Avoid unnecessary loops, recalculations, and redundant processing
- Use caching, memoization, and efficient data access patterns
- Balance performance with readability

### Maintainability

- Reuse existing utilities or shared functions instead of duplicating logic
- Ensure code can be modified without affecting unrelated modules
- Ensure functions and modules are easily testable
- Always log errors with contextual information

### High cohesion (Module Internal Consistency)

- Ensure each module or component follows the single-responsibility principle
- Keep related logic grouped together

### Low coupling (Module Interdependencies)

- Ensure modules work independently
- Avoid dependencies between unrelated modules
- Ensure modules communicate only through simple and well-defined interfaces
