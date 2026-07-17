"use client"

import { useState } from "react"
import { cn } from "@/lib/utils"
import { testimonials as defaultTestimonials, type Testimonial } from "@/data/testimonials"

type TestimonialsProps = {
  items?: Testimonial[]
  className?: string
}

export function Testimonials({ items = defaultTestimonials, className }: TestimonialsProps) {
  const [activeIndex, setActiveIndex] = useState(0)
  const [isAnimating, setIsAnimating] = useState(false)
  const [displayedQuote, setDisplayedQuote] = useState(items[0]?.quote ?? "")
  const [displayedRole, setDisplayedRole] = useState(items[0]?.role ?? "")
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  const handleSelect = (index: number) => {
    if (index === activeIndex || isAnimating || !items[index]) return
    setIsAnimating(true)

    setTimeout(() => {
      setDisplayedQuote(items[index].quote)
      setDisplayedRole(items[index].role)
      setActiveIndex(index)
      setTimeout(() => setIsAnimating(false), 400)
    }, 200)
  }

  if (!items.length) return null

  return (
    <div className={cn("flex flex-col items-center gap-10 py-8", className)}>
      <div className="relative px-8">
        <span className="pointer-events-none absolute -left-2 -top-6 select-none text-7xl font-serif text-foreground/[0.06]">
          &ldquo;
        </span>

        <p
          className={cn(
            "max-w-lg text-center text-2xl font-light leading-relaxed text-foreground transition-all duration-400 ease-out md:text-3xl",
            isAnimating ? "scale-[0.98] opacity-0 blur-sm" : "scale-100 opacity-100 blur-0",
          )}
        >
          {displayedQuote}
        </p>

        <span className="pointer-events-none absolute -bottom-8 -right-2 select-none text-7xl font-serif text-foreground/[0.06]">
          &rdquo;
        </span>
      </div>

      <div className="mt-2 flex flex-col items-center gap-6">
        <p
          className={cn(
            "text-xs uppercase tracking-[0.2em] text-muted-foreground transition-all duration-500 ease-out",
            isAnimating ? "translate-y-2 opacity-0" : "translate-y-0 opacity-100",
          )}
        >
          {displayedRole}
        </p>

        <div className="flex items-center justify-center gap-2">
          {items.map((testimonial, index) => {
            const isActive = activeIndex === index
            const isHovered = hoveredIndex === index && !isActive
            const showName = isActive || isHovered

            return (
              <button
                key={testimonial.id}
                type="button"
                onClick={() => handleSelect(index)}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                aria-pressed={isActive}
                aria-label={`Show testimonial from ${testimonial.author}`}
                className={cn(
                  "relative flex cursor-pointer items-center gap-0 rounded-full",
                  "transition-all duration-500 ease-[cubic-bezier(0.4,0,0.2,1)]",
                  isActive ? "bg-foreground shadow-[var(--shadow-md)]" : "bg-transparent hover:bg-background-muted",
                  showName ? "px-4 py-2 pl-2" : "p-0.5",
                )}
              >
                <div className="relative flex-shrink-0">
                  <img
                    src={testimonial.avatar}
                    alt=""
                    width={32}
                    height={32}
                    loading="lazy"
                    className={cn(
                      "h-8 w-8 rounded-full object-cover",
                      "transition-all duration-500 ease-[cubic-bezier(0.4,0,0.2,1)]",
                      isActive ? "ring-2 ring-white/50" : "ring-0",
                      !isActive && "hover:scale-105",
                    )}
                  />
                </div>

                <div
                  className={cn(
                    "grid transition-all duration-500 ease-[cubic-bezier(0.4,0,0.2,1)]",
                    showName ? "ml-2 grid-cols-[1fr] opacity-100" : "ml-0 grid-cols-[0fr] opacity-0",
                  )}
                >
                  <div className="overflow-hidden">
                    <span
                      className={cn(
                        "block whitespace-nowrap text-sm font-medium",
                        "transition-colors duration-300",
                        isActive ? "text-surface" : "text-foreground",
                      )}
                    >
                      {testimonial.author}
                    </span>
                  </div>
                </div>
              </button>
            )
          })}
        </div>

        <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-text-soft">
          Placeholder quotes for design demonstration
        </p>
      </div>
    </div>
  )
}
