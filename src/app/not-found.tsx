import Link from "next/link";

export default function NotFound() {
  return (
    <main className="grid flex-1 place-items-center px-6 py-24 sm:py-32 lg:px-8">
      <div className="text-center">
        <p className="font-semibold text-primary text-4xl">404</p>
        <h1 className="mt-4 text-5xl font-semibold tracking-tight text-balance sm:text-7xl">
          Page non trouvée
        </h1>
        <p className="mt-6 text-lg font-medium text-pretty sm:text-xl/8">
          La page que vous recherchez n&apos;existe pas.
        </p>
        <Link href="/produits" className="text-sm hover:underline mt-4 inline-block">
          Retour à la liste des produits
        </Link>
      </div>
    </main>
  );
}
