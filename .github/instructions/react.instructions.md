---
applyTo: "**/*.ts,**/*.tsx"
---

Apply the [general coding guidelines](./general-coding.instructions.md) to all code.

# Project coding standards for React

## React Guidelines

- Always define prop types or TypeScript interfaces for all components
- Keep components small and focused
- Use custom hooks for reusable logic (/src/hooks)
- Manage utility functions for reusable logic (in /src/utils)

## Performance

- Use `React.memo` and `React.useCallback` to prevent unnecessary re-renders.
- Use `React.useMemo` to cache expensive computations.
- Verify all hooks include correct dependency arrays (avoid stale closures)

## Accessibility

- Follow WCAG guidelines for accessibility
- Use semantic HTML elements whenever possible
- Ensure full keyboard navigability
- Use ARIA attributes only when necessary

## SEO

- Use proper keywords in `<title>`, meta descriptions, and headings
- Use heading tags (`<h1>`, `<h2>`, etc.) appropriately
- Always add `alt` attributes for images
- Use `srcSet` for appropriate image sizes
- Use lazy loading for images outside the first view
- Specify `width` and `height` to prevent layout shifts
- Serve static assets via S3 and CDN (`https://static.nearme.jp`)
- Test SEO performance with tools like Lighthouse

## Security

- Always sanitize user inputs to prevent XSS attacks
- Avoid exposing sensitive information in the frontend code
