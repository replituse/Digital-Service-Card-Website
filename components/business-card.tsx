'use client'

import { useState } from 'react'
import Image from 'next/image'
import {
  Phone,
  Mail,
  Globe,
  MapPin,
  Layout,
  Code2,
  ShoppingCart,
  LayoutGrid,
  ArrowUpRight,
  ArrowLeft,
  ExternalLink,
} from 'lucide-react'
import {
  WhatsAppIcon,
  InstagramIcon,
  LinkedInIcon,
  GitHubIcon,
} from '@/components/social-icons'

const services = [
  {
    name: 'Static Website',
    desc: 'Fast, elegant single-page & multi-page sites',
    price: 'Start from ₹3,999/-',
    icon: Layout,
    image: '/services/static.png',
  },
  {
    name: 'Dynamic Website',
    desc: 'CMS-driven sites with custom admin panels',
    price: 'Start from ₹9,999/-',
    icon: Code2,
    image: '/services/dynamic.png',
  },
  {
    name: 'E-commerce',
    desc: 'Full online stores with cart & payments',
    price: 'Start from ₹24,999/-',
    icon: ShoppingCart,
    image: '/services/ecommerce.png',
  },
  {
    name: 'Digital Catalogue',
    desc: 'Shareable product catalogues, always updated',
    price: '₹499/m',
    icon: LayoutGrid,
    image: '/services/catalogue.png',
  },
]

const projects = [
  {
    name: 'Sai Krishna Restaurant',
    category: 'Food & Dining',
    image: '/work/restaurant.png',
    url: 'https://tempsaikrishna.netlify.app/',
  },
  {
    name: 'Saree Cataloge',
    category: 'Fashion Store',
    image: '/work/clothshop.png',
    url: 'https://saree-catalog-v10.vercel.app/',
  },
  {
    name: 'Digital Menu',
    category: 'Food & Dining',
    image: '/work/restaurant.png',
    url: 'https://vivicafe.netlify.app/',
  },
  {
    name: 'Nova Cloth',
    category: 'E-commerce',
    image: '/work/ecommerce.png',
    url: 'https://nikzone-clothing.vercel.app/',
  },
  {
    name: 'Product Catalogue',
    category: 'Digital Catalogue',
    image: '/work/catalogue.png',
    url: 'https://menu.mingschinesecuisine.in/menu',
  },
  {
    name: 'Iron Peak Gym',
    category: 'Fitness & Membership',
    image: '/work/gym.png',
    url: 'https://hocgym.netlify.app/',
  },
  {
    name: 'BrightMind Academy',
    category: 'Education & Coaching',
    image: '/work/education.png',
    url: 'https://malaydamania.netlify.app/',
  },
  {
    name: 'Prime Estates',
    category: 'Real Estate',
    image: '/work/realestate.png',
    url: 'https://eclean.live/',
  },
  {
    name: 'Food Platform Restaurant',
    category: 'Food & Dining',
    image: '/work/restaurant.png',
    url: 'https://restaurant-website-deploy-7emo.vercel.app/',
  },
  {
    name: 'Wander Trails',
    category: 'Travel & Tourism',
    image: '/work/travel.png',
    url: 'https://pocketlawer.netlify.app/',
  },
  {
    name: 'Brew & Bake Cafe',
    category: 'Cafe & Bakery',
    image: '/work/cafe.png',
    url: 'https://hoc-cafe.netlify.app/',
  },
]

const socials = [
  { label: 'WhatsApp', Icon: WhatsAppIcon, url: 'https://wa.me/918975623356' },
  { label: 'Instagram', Icon: InstagramIcon, url: 'https://instagram.com/all_tech_content' },
  { label: 'LinkedIn', Icon: LinkedInIcon, url: 'https://linkedin.com' },
  { label: 'GitHub', Icon: GitHubIcon, url: 'https://github.com' },
]

const contacts = [
  { Icon: Phone, text: '+91 89756 23356', href: 'tel:+918975623356' },
  { Icon: Mail, text: 'patukadam25@gmail.com', href: 'mailto:patukadam25@gmail.com' },
  { Icon: Globe, text: 'www.pratikkadam.dev', href: 'https://www.pratikkadam.dev' },
  { Icon: MapPin, text: 'Thane, Maharashtra, India', href: undefined },
]

function CircuitCorner({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 120 120"
      fill="none"
      aria-hidden="true"
      className={className}
    >
      <g stroke="currentColor" strokeWidth="1" opacity="0.5">
        <path d="M10 40 L40 40 L60 20 L110 20" />
        <path d="M10 60 L30 60 L50 40 L110 40" />
        <path d="M10 80 L45 80 L70 55 L110 55" />
      </g>
      <g fill="currentColor" opacity="0.7">
        <circle cx="110" cy="20" r="2.5" />
        <circle cx="110" cy="40" r="2.5" />
        <circle cx="110" cy="55" r="2.5" />
        <circle cx="40" cy="40" r="2" />
        <circle cx="45" cy="80" r="2" />
      </g>
    </svg>
  )
}

export function BusinessCard() {
  const [flipped, setFlipped] = useState(false)

  return (
    <div className="perspective h-svh w-full sm:h-[96svh] sm:max-h-[900px] sm:max-w-[440px]">
      <div
        className={`preserve-3d relative h-full w-full transition-transform duration-700 ease-[cubic-bezier(0.4,0.15,0.2,1)] ${
          flipped ? 'rotate-y-180' : ''
        }`}
      >
        {/* ---------- FRONT ---------- */}
        <div
          className="backface-hidden absolute inset-0 flex flex-col overflow-hidden rounded-none border border-gold/25 bg-navy text-cream shadow-[0_30px_70px_-25px_rgba(6,12,22,0.85)] sm:rounded-[26px]"
          aria-hidden={flipped}
        >
          {/* subtle top glow */}
          <div className="pointer-events-none absolute -top-24 left-1/2 h-56 w-56 -translate-x-1/2 rounded-full bg-gold/15 blur-3xl" />
          <CircuitCorner className="pointer-events-none absolute -right-2 top-2 h-28 w-28 text-gold/40" />

          {/* Header */}
          <div className="relative flex items-center gap-4 px-6 pt-6">
            <div className="relative h-16 w-16 shrink-0 overflow-hidden rounded-full border border-gold/30 shadow-[0_8px_20px_-8px_rgba(200,138,82,0.6)]">
              <Image
                src="/pk-logo.png"
                alt="Pratik Kadam PK logo"
                fill
                sizes="64px"
                className="object-cover"
                priority
              />
            </div>
            <div className="min-w-0">
              <h1 className="font-display text-2xl font-bold leading-tight tracking-wide text-cream text-balance">
                PRATIK KADAM
              </h1>
              <p className="mt-1 text-[10px] font-medium uppercase tracking-[0.22em] text-gold-light">
                Web Developer &amp; Digital Solutions
              </p>
            </div>
          </div>

          <div className="mx-6 mt-5 h-px bg-gradient-to-r from-transparent via-gold/40 to-transparent" />

          {/* Services */}
          <div className="min-h-0 flex-1 overflow-y-auto px-6 pt-4 no-scrollbar">
            <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.2em] text-gold-light/80">
              Services
            </p>
            <div className="grid grid-cols-2 gap-3">
              {services.map((s) => {
                const Icon = s.icon
                return (
                  <div
                    key={s.name}
                    className="group relative flex aspect-[4/3.4] flex-col justify-between overflow-hidden rounded-2xl border border-gold/20 p-3 transition-all duration-300 hover:-translate-y-1 hover:border-gold/60 hover:shadow-[0_14px_30px_-12px_rgba(200,138,82,0.55)]"
                  >
                    <Image
                      src={s.image || '/placeholder.svg'}
                      alt=""
                      fill
                      sizes="200px"
                      className="object-cover opacity-70 transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-navy-deep via-navy/70 to-navy/30" />
                    <div className="relative flex items-center gap-1.5">
                      <span className="flex h-7 w-7 items-center justify-center rounded-lg border border-gold/40 bg-navy-deep/80 text-gold-light">
                        <Icon className="h-3.5 w-3.5" strokeWidth={2} />
                      </span>
                    </div>
                    <div className="relative">
                      <h3 className="font-display text-[13px] font-semibold leading-tight text-cream">
                        {s.name}
                      </h3>
                      <p className="mt-0.5 text-[9.5px] leading-snug text-cream/65 line-clamp-2">
                        {s.desc}
                      </p>
                      <span className="mt-1.5 inline-block whitespace-nowrap rounded-md bg-gold/90 px-1.5 py-0.5 text-[9.5px] font-bold text-navy-deep shadow">
                        {s.price}
                      </span>
                    </div>
                  </div>
                )
              })}
            </div>

            {/* Contact */}
            <div className="mx-0 my-4 h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent" />
            <div className="grid grid-cols-1 gap-2 pb-2">
              {contacts.map(({ Icon, text, href }) => {
                const inner = (
                  <span className="flex items-center gap-2.5">
                    <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg border border-gold/30 bg-navy-soft text-gold-light">
                      <Icon className="h-3.5 w-3.5" strokeWidth={2} />
                    </span>
                    <span className="truncate text-[12.5px] text-cream/90">{text}</span>
                  </span>
                )
                return href ? (
                  <a
                    key={text}
                    href={href}
                    className="rounded-lg transition-colors hover:text-gold-light"
                  >
                    {inner}
                  </a>
                ) : (
                  <div key={text}>{inner}</div>
                )
              })}
            </div>
          </div>

          {/* Socials + CTA */}
          <div className="relative px-6 pb-6 pt-3">
            <div className="mb-4 flex items-center justify-center gap-3">
              {socials.map(({ label, Icon, url }) => (
                <a
                  key={label}
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-gold/25 bg-cream/95 transition-all duration-300 hover:-translate-y-0.5 hover:border-gold hover:shadow-[0_8px_18px_-6px_rgba(200,138,82,0.7)]"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
            <button
              type="button"
              onClick={() => setFlipped(true)}
              className="group flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-gold-light via-gold to-gold-light px-5 py-3.5 font-display text-sm font-bold uppercase tracking-[0.18em] text-navy-deep shadow-[0_12px_28px_-10px_rgba(200,138,82,0.9)] transition-all duration-300 hover:brightness-110 active:scale-[0.98]"
            >
              My Work
              <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" strokeWidth={2.5} />
            </button>
          </div>
        </div>

        {/* ---------- BACK ---------- */}
        <div
          className="backface-hidden rotate-y-180 absolute inset-0 flex flex-col overflow-hidden rounded-none border border-gold/25 bg-navy text-cream shadow-[0_30px_70px_-25px_rgba(6,12,22,0.85)] sm:rounded-[26px]"
          aria-hidden={!flipped}
        >
          <div className="pointer-events-none absolute -top-24 left-1/2 h-56 w-56 -translate-x-1/2 rounded-full bg-gold/15 blur-3xl" />
          <CircuitCorner className="pointer-events-none absolute -left-2 top-2 h-28 w-28 -scale-x-100 text-gold/40" />

          {/* Header */}
          <div className="relative flex items-center justify-between px-6 pt-6">
            <div>
              <h2 className="font-display text-xl font-bold tracking-wide text-cream">
                My Work
              </h2>
              <p className="mt-1 text-[10px] font-medium uppercase tracking-[0.2em] text-gold-light">
                Tap a project to open it live
              </p>
            </div>
            <button
              type="button"
              onClick={() => setFlipped(false)}
              aria-label="Back to card"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-gold/40 bg-navy-deep/70 text-gold-light transition-all duration-300 hover:border-gold hover:text-cream active:scale-95"
            >
              <ArrowLeft className="h-5 w-5" strokeWidth={2} />
            </button>
          </div>

          <div className="mx-6 mt-5 h-px bg-gradient-to-r from-transparent via-gold/40 to-transparent" />

          {/* Projects grid */}
          <div className="min-h-0 flex-1 overflow-y-auto px-6 py-4 no-scrollbar">
            <div className="grid grid-cols-2 gap-3">
              {projects.map((p) => (
                <a
                  key={p.name}
                  href={p.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative flex flex-col overflow-hidden rounded-2xl border border-gold/20 bg-navy-soft transition-all duration-300 hover:-translate-y-1 hover:border-gold/60 hover:shadow-[0_16px_32px_-14px_rgba(200,138,82,0.6)] active:scale-[0.98]"
                >
                  <div className="relative aspect-[16/11] w-full overflow-hidden">
                    <Image
                      src={p.image || '/placeholder.svg'}
                      alt={`${p.name} website preview`}
                      fill
                      sizes="200px"
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-navy-deep/80 to-transparent opacity-60" />
                    <span className="absolute right-2 top-2 flex h-6 w-6 items-center justify-center rounded-full bg-gold text-navy-deep opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                      <ExternalLink className="h-3 w-3" strokeWidth={2.5} />
                    </span>
                  </div>
                  <div className="flex flex-col gap-0.5 p-2.5">
                    <h3 className="font-display text-[12.5px] font-semibold leading-tight text-cream">
                      {p.name}
                    </h3>
                    <p className="text-[9.5px] uppercase tracking-wide text-gold-light/80">
                      {p.category}
                    </p>
                  </div>
                </a>
              ))}
            </div>
          </div>

          {/* Footer */}
          <div className="relative px-6 pb-6 pt-3">
            <div className="mb-4 h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent" />
            <div className="mb-4 flex flex-col items-center gap-2 text-center">
              <div className="relative h-11 w-11 overflow-hidden rounded-full border border-gold/30 shadow-[0_6px_16px_-6px_rgba(200,138,82,0.6)]">
                <Image
                  src="/pk-logo.png"
                  alt="Pratik Kadam PK logo"
                  fill
                  sizes="44px"
                  className="object-cover"
                />
              </div>
              <p className="font-display text-base font-bold tracking-wide text-cream">
                Let&apos;s Build Your Next
              </p>
            </div>
            <button
              type="button"
              onClick={() => setFlipped(false)}
              className="group flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-gold-light via-gold to-gold-light px-5 py-3.5 font-display text-sm font-bold uppercase tracking-[0.18em] text-navy-deep shadow-[0_12px_28px_-10px_rgba(200,138,82,0.9)] transition-all duration-300 hover:brightness-110 active:scale-[0.98]"
            >
              <ArrowLeft className="h-4 w-4 transition-transform duration-300 group-hover:-translate-x-0.5" strokeWidth={2.5} />
              Back To Services
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
