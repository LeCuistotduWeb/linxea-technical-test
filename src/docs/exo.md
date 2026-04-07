# Test technique Front-end React/Next.js – 2–3h

> **Durée** : 2 à 3 heures (timebox)
>
> **Objectif** : évaluer votre capacité à livrer une petite fonctionnalité front orientée contenu avec une stack moderne (Next.js, React Query, Zod, Tailwind), en conditions proches de l’usage d’un CMS headless (Strapi).

---

## 1) Contexte

Linxea expose des contenus de type **Produit** via un CMS headless (comme Strapi). Vous devez créer :

* Une page **listing** des produits : `/products`.
* Une page **détail** d’un produit : `/products/[id]`.

Les données proviennent d’un **mock d’API** local (fourni ci-dessous). Justifiez brièvement vos choix **SSR/SSG**.

---

## 2) Stack à utiliser

* **Next.js** (App Router ou Pages, au choix) + **TypeScript**
* **Tailwind CSS** (UI responsive)

---

## 3) Modèle de données (type & contrat d’API)

**TypeScript attendu côté front** :

```ts
export type Product = {
  id: string;
  slug: string; // utilisable dans l’URL
  title: string;
  description: string;
  price: number; // en euros
  imageUrl: string;
  tags: string[];
  updatedAt: string; // ISO date
};
```

**Contrat d’API mock** :

* `GET /api/products` → `Product[]`
* `GET /api/products/:id` → `Product`

---

## 4) Données mock (à copier)

Créez un fichier `products.json` dans votre projet (ou servez-le via `/api/products`).

```json
[
  {
    "id": "pdt_1",
    "slug": "assurance-vie-avenir",
    "title": "Assurance Vie Avenir",
    "description": "Un contrat souple pour préparer vos projets à long terme.",
    "price": 0,
    "imageUrl": "/images/assurance-vie-avenir.jpg",
    "tags": ["assurance-vie", "long-terme"],
    "updatedAt": "2025-08-20T10:15:00.000Z"
  },
  {
    "id": "pdt_2",
    "slug": "pea-dynamique",
    "title": "PEA Dynamique",
    "description": "Un plan d'épargne en actions orienté performance.",
    "price": 2.5,
    "imageUrl": "/images/pea-dynamique.jpg",
    "tags": ["pea", "actions"],
    "updatedAt": "2025-08-21T14:03:00.000Z"
  },
  {
    "id": "pdt_3",
    "slug": "per-retraite",
    "title": "PER Retraite",
    "description": "Préparez votre retraite avec un cadre fiscal avantageux.",
    "price": 1.0,
    "imageUrl": "/images/per-retraite.jpg",
    "tags": ["per", "retraite"],
    "updatedAt": "2025-08-22T09:00:00.000Z"
  }
]
```

---

## 5) Implémentation attendue

### 5.1 Listing `/products`

* Récupérer `GET /api/products`.
* Afficher une grille de **cards** : image, titre, tags, « à partir de X€/mois » (si `price > 0`, sinon « Sans frais »).
* Lien vers la **page détail** (utiliser `slug` ou `id`).
* **Filtrage** côté client par tag (ex. boutons badge).
* **Tri** par `updatedAt` (descendant) par défaut.
* **Justifier** le choix **SSR** *ou* **SSG (+ revalidate)** dans le README.

### 5.2 Détail `/products/[id]`

* Récupérer `GET /api/products/:id`.
* Afficher image, titre, description, tags, price.

### 5.3 UI & a11y

* **Tailwind** : layout responsive, bonnes pratices HTML.

---

## 6) Structure d’API mock (suggestion)

* `pages/api/products/index.ts` (ou `app/api/products/route.ts`) : renvoie le JSON.
* `pages/api/products/[id].ts` (ou `app/api/products/[id]/route.ts`) : renvoie un élément par `id`.

> Vous pouvez aussi lire le JSON local côté serveur et le passer aux composants.

---

## 7) Contraintes

* **Pas d’over-engineering** : visez l’essentiel.
* Pas besoin d’authentification.

---

## 8) Livraison

* Repo public (GitHub/GitLab) ou archive `.zip`.
* Inclure un **README** avec :

  * **Setup** : `pnpm i` (ou npm/yarn), `pnpm dev`, prérequis Node.
  * **Décisions** : SSR/SSG, structure, limites, pistes d’amélioration.
  * **Temps passé** & parties non terminées si applicable.

Bonne chance ✨