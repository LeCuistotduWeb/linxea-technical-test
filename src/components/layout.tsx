import siteConfig from "@/constants/site"
import { cn } from "@/lib/utils"
import Link from "next/link"

export function LayoutWrapper({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-screen flex-col">
      {children}
    </div>
  )
}

export function LayoutMain({ children }: { children: React.ReactNode }) {
  return (
    <main className="flex-1">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 md:py-8">
        {children}
      </div>
    </main>
  )
}

export function LayoutTitle({ children, className }: { children: React.ReactNode, className?: string }) {
  return (
    <h1 className={cn("text-2xl md:text-3xl font-bold tracking-tight text-title", className)}>
      {children}
    </h1>
  )
}

export function LayoutDescription({ children, className }: { children: React.ReactNode, className?: string }) {
  return (
    <p className={cn("text-lg text-body", className)}>
      {children}
    </p>
  )
}

export function LayoutContainer({ children }: { children: React.ReactNode }) {
  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      {children}
    </div>
  )
}

export function LayoutHeader() {
  return (
    <header>
      <div className="mx-auto flex h-16 max-w-7xl items-center gap-8 px-4 sm:px-6 lg:px-8">
        <Link className="block text-primary font-extrabold text-xl" href="/">
          <span className="">{siteConfig.title}</span>
        </Link>
        <ul>
          <li>
            <Link href="/produits">
              Nos produits
            </Link>
          </li>
        </ul>
      </div>
    </header>
  )
}

export function LayoutFooter() {
  return (
    <footer>
      <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
        <p className="text-center text-sm">
          &copy; {new Date().getFullYear()} Linxea. All rights reserved.
        </p>
      </div>
    </footer>
  )
}