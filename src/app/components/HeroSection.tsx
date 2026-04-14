import Link from "next/link";

/** 메인 히어로 섹션 - "We Make Systems for Your Orbit" */
export default function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-white">
      <div className="mx-auto flex max-w-7xl flex-col items-center gap-12 px-6 py-24 md:flex-row md:py-32 lg:py-40">
        {/* Text */}
        <div className="flex-1 space-y-8">
          <h1 className="text-4xl font-bold leading-tight tracking-tight text-primary md:text-5xl lg:text-6xl">
            We Make Systems
            <br />
            for Your Orbit
          </h1>
          <p className="max-w-md text-lg leading-relaxed text-muted md:text-xl">
            <span className="font-semibold text-foreground">각자의 궤도는 달라도,</span>
            <br />
            <span className="font-semibold text-foreground">중심축은 단단해야 하니까.</span>
            <br />
            일과 삶의 중심이 되는 구조.
          </p>
          <Link
            href="/about"
            className="inline-flex items-center gap-2 rounded-full bg-primary px-7 py-3.5 text-sm font-semibold text-white transition-all hover:scale-105 hover:shadow-lg"
          >
            About →
          </Link>
        </div>

        {/* Orbit visual */}
        <div className="relative flex flex-1 items-center justify-center">
          <div className="relative h-72 w-72 md:h-96 md:w-96">
            {/* Outer ring */}
            <div className="absolute inset-0 animate-[spin_20s_linear_infinite] rounded-full border-2 border-dashed border-gray-200" />
            {/* Middle ring */}
            <div className="absolute inset-8 animate-[spin_15s_linear_infinite_reverse] rounded-full border-2 border-dashed border-gray-300" />
            {/* Inner ring */}
            <div className="absolute inset-16 animate-[spin_10s_linear_infinite] rounded-full border-2 border-dashed border-gray-400" />
            {/* Center dot */}
            <div className="absolute inset-0 m-auto h-8 w-8 rounded-full bg-primary shadow-lg" />
            {/* Orbiting dots */}
            <div className="absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2">
              <div className="h-4 w-4 rounded-full bg-gray-400" />
            </div>
            <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2">
              <div className="h-3 w-3 rounded-full bg-gray-300" />
            </div>
            <div className="absolute bottom-0 left-1/4 translate-y-1/2">
              <div className="h-5 w-5 rounded-full bg-gray-500" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
