import { BusinessCard } from '@/components/business-card'

export default function Page() {
  return (
    <main className="relative flex min-h-svh w-full items-center justify-center overflow-hidden bg-page p-0 sm:px-4 sm:py-6">
      {/* soft ambient background */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-1/2 h-[520px] w-[520px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-navy/5 blur-3xl" />
        <div className="absolute right-[-10%] top-[-10%] h-72 w-72 rounded-full bg-gold/10 blur-3xl" />
      </div>
      <BusinessCard />
    </main>
  )
}
