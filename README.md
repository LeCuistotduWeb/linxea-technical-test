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

- Stratégie retenue : Hybride (SSG + revalidate + récupération côté client)
- Justification :
	- Les pages de détail produit sont pré-générées avec `generateStaticParams` pour un premier affichage rapide et un SEO prévisible.
	- La revalidation est activée pour garder des données à jour sans rebuild complet.
	- Les interactions de la page listing (filtres, tri) sont gérées côté client avec React Query pour une UX fluide.

## Time spent
- Total time: 1h50 :
	- Setup / configuration: 0h15
	- Feature development: 1h35