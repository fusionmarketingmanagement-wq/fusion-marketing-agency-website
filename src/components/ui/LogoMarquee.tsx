const logos = [
  {
    src: 'https://svgl.app/library/procure.svg',
    alt: 'Procure',
    gradient: { from: '#60a5fa', to: '#2563eb' },
  },
  {
    src: 'https://svgl.app/library/shopify.svg',
    alt: 'Shopify',
    gradient: { from: '#fde047', to: '#eab308' },
  },
  {
    src: 'https://svgl.app/library/blender.svg',
    alt: 'Blender',
    gradient: { from: '#38bdf8', to: '#0284c7' },
  },
  {
    src: 'https://svgl.app/library/figma.svg',
    alt: 'Figma',
    gradient: { from: '#f3f4f6', to: '#9ca3af' },
  },
  {
    src: 'https://svgl.app/library/spotify.svg',
    alt: 'Spotify',
    gradient: { from: '#fb7185', to: '#e11d48' },
  },
  {
    src: 'https://svgl.app/library/lottielab.svg',
    alt: 'Lottielab',
    gradient: { from: '#facc15', to: '#22c55e' },
  },
  {
    src: 'https://svgl.app/library/google-cloud.svg',
    alt: 'Google Cloud',
    gradient: { from: '#bae6fd', to: '#38bdf8' },
  },
  {
    src: 'https://svgl.app/library/bing.svg',
    alt: 'Bing',
    gradient: { from: '#22d3ee', to: '#0d9488' },
  },
] as const

function LogoCard({
  src,
  alt,
  gradient,
}: {
  src: string
  alt: string
  gradient: { from: string; to: string }
}) {
  return (
    <div className="group relative flex h-16 w-28 shrink-0 items-center justify-center overflow-hidden rounded-full border border-border bg-surface shadow-[var(--shadow-sm)] transition-all hover:border-border-strong hover:shadow-[var(--shadow-md)] sm:h-20 sm:w-36 md:h-24 md:w-40">
      <div
        className="absolute inset-0 scale-150 opacity-0 transition-all duration-500 group-hover:scale-100 group-hover:opacity-100"
        style={{
          background: `linear-gradient(135deg, ${gradient.from}, ${gradient.to})`,
        }}
        aria-hidden
      />
      <img
        src={src}
        alt={alt}
        width={48}
        height={48}
        loading="lazy"
        className="relative z-10 h-7 w-7 object-contain transition-all duration-300 group-hover:brightness-0 group-hover:invert sm:h-9 sm:w-9 md:h-10 md:w-10"
      />
    </div>
  )
}

export function LogoMarquee() {
  const loop = [...logos, ...logos]

  return (
    <div
      className="marquee-mask relative w-full overflow-hidden"
      style={{
        maskImage: 'linear-gradient(to right, transparent, black 8%, black 92%, transparent)',
        WebkitMaskImage: 'linear-gradient(to right, transparent, black 8%, black 92%, transparent)',
      }}
    >
      <div className="marquee-track flex w-max items-center gap-4 py-1">
        {loop.map((logo, index) => (
          <LogoCard
            key={`${logo.alt}-${index}`}
            src={logo.src}
            alt={logo.alt}
            gradient={logo.gradient}
          />
        ))}
      </div>
    </div>
  )
}
