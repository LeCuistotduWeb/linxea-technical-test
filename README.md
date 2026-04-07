# Technical test

## Setup

### Prerequisites

- Node.js: `>= 24` (adjust based on your target version)
- `pnpm` installed globally

### Installation

```bash
pnpm i
```

### Run in development

```bash
pnpm dev
```

Application available at: [http://localhost:3000](http://localhost:3000)

### Useful scripts

```bash
pnpm lint
pnpm build
pnpm start
```

## Technical decisions

### Project structure

- `src/app`: routes and Next.js App Router structure
- `src/components`: reusable UI components
- `src/app/features`: business logic by feature
- `src/datas`: static data / fixtures
- `src/docs`: additional documentation
  
### Rendering (SSR / SSG)

- Selected strategy: [SSR | SSG | hybrid]
- Rationale:
	- [Ex: SSR for dynamic data]
	- [Ex: SSG for stable, high-performance pages]

## Time spent

- Total time: [Xh]
- Breakdown (optional):
	- Setup / configuration: [Xh]
	- Feature development: [Xh]
	- UI / UX: [Xh]
	- Tests / QA: [Xh]