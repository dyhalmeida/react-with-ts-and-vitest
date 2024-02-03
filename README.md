## How to config vitest + react

1. I bootstrapped a react + vite + ts project, using bunx create-vite

```shell
bunx create-vite
```

2. Install the test dependencies below:

```shell
bun add -D vitest @testing-library/react @testing-library/jest-dom jsdom
```

3. Make the test configuration in `vite.config.ts`

```json
/// <reference types="vitest" />
/// <reference types="vite/client" />
{...}
test: {
    globals: true,
    environment: "jsdom"
}
```

4. In all test files (.test.tsx|.spec.tsx), use `import '@testing-library/jest-dom'` and the vitest test suite functions, `import { describe, it, expect , vi } from 'vitest'` and that's it.
