import { Suspense, useMemo } from 'react'
import { Canvas } from '@react-three/fiber'
import { Float, MeshDistortMaterial, Sphere } from '@react-three/drei'
import { useReducedMotion } from 'framer-motion'
import { useMediaQuery } from '@/hooks/useMediaQuery'

function CoreScene({ simplified }: { simplified: boolean }) {
  return (
    <>
      <ambientLight intensity={0.35} />
      <directionalLight position={[4, 6, 2]} intensity={1.2} color="#9aa6ff" />
      <pointLight position={[-3, -2, -2]} intensity={0.8} color="#8b5cf6" />

      <Float speed={simplified ? 0.6 : 1.2} rotationIntensity={simplified ? 0.15 : 0.35} floatIntensity={0.6}>
        <Sphere args={[1.05, simplified ? 32 : 64, simplified ? 32 : 64]}>
          <MeshDistortMaterial
            color="#6c7cff"
            attach="material"
            distort={simplified ? 0.18 : 0.35}
            speed={simplified ? 1.2 : 2}
            roughness={0.25}
            metalness={0.55}
          />
        </Sphere>
      </Float>

      {!simplified ? (
        <>
          <Float speed={1.6} floatIntensity={0.8} rotationIntensity={0.4}>
            <mesh position={[1.8, 0.7, 0.4]}>
              <torusGeometry args={[0.55, 0.035, 16, 64]} />
              <meshStandardMaterial color="#c5c8d8" metalness={0.9} roughness={0.2} />
            </mesh>
          </Float>
          <Float speed={1.1} floatIntensity={0.5}>
            <mesh position={[-1.6, -0.5, 0.6]}>
              <icosahedronGeometry args={[0.35, 0]} />
              <meshStandardMaterial color="#8b5cf6" metalness={0.6} roughness={0.25} transparent opacity={0.9} />
            </mesh>
          </Float>
          <Float speed={1.4} floatIntensity={0.7}>
            <mesh position={[0.2, -1.4, 0.8]}>
              <sphereGeometry args={[0.18, 24, 24]} />
              <meshStandardMaterial color="#45d6a0" emissive="#45d6a0" emissiveIntensity={0.35} />
            </mesh>
          </Float>
        </>
      ) : null}
    </>
  )
}

const labels = ['Paid Media', 'AI', 'Social', 'Web', 'Leads']

export function GrowthEngineScene() {
  const reduce = useReducedMotion()
  const isMobile = useMediaQuery('(max-width: 768px)')
  const simplified = Boolean(reduce || isMobile)

  const dpr = useMemo(() => (simplified ? ([1, 1.25] as [number, number]) : ([1, 1.75] as [number, number])), [simplified])

  if (reduce) {
    return (
      <div
        aria-hidden
        className="relative aspect-square w-full max-w-lg overflow-hidden rounded-[2rem] border border-border bg-surface"
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_40%,rgba(108,124,255,0.35),transparent_60%)]" />
        <div className="absolute left-1/2 top-1/2 h-40 w-40 -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent/30 blur-2xl" />
      </div>
    )
  }

  return (
    <div className="relative aspect-square w-full max-w-lg">
      <div
        className="absolute inset-0 rounded-[2rem] border border-border bg-surface/60 shadow-[0_30px_80px_rgba(0,0,0,0.45)]"
        aria-hidden
      >
        <Suspense fallback={<div className="h-full w-full animate-pulse bg-surface-light" />}>
          <Canvas
            dpr={dpr}
            camera={{ position: [0, 0, 4.2], fov: 42 }}
            gl={{ antialias: !simplified, alpha: true, powerPreference: 'high-performance' }}
            style={{ touchAction: 'none' }}
          >
            <CoreScene simplified={simplified} />
          </Canvas>
        </Suspense>
      </div>

      {!simplified
        ? labels.map((label, index) => {
            const positions = [
              'left-4 top-8',
              'right-2 top-16',
              'left-0 bottom-24',
              'right-6 bottom-16',
              'left-1/2 top-2 -translate-x-1/2',
            ]
            return (
              <div
                key={label}
                className={`pointer-events-none absolute ${positions[index]} rounded-full border border-border bg-background/70 px-3 py-1.5 font-mono text-[10px] uppercase tracking-[0.16em] text-muted-foreground backdrop-blur`}
              >
                {label}
              </div>
            )
          })
        : null}

      <div className="pointer-events-none absolute -bottom-3 left-6 rounded-2xl border border-border bg-background/80 px-4 py-3 backdrop-blur md:left-8">
        <p className="font-display text-lg text-foreground">Growth Engine</p>
        <p className="font-mono text-[10px] uppercase tracking-[0.16em] text-muted-foreground">
          Channels fused into one system
        </p>
      </div>
    </div>
  )
}

