const PERSONAS = [
  {
    description: "나만의 기준을 가진\n내 삶의 의사결정권자",
    tag: "의사결정권자",
  },
  {
    description: "일이 곧 나의 정체성,\n자기 브랜드형 실무자",
    tag: "브랜드형 실무자",
  },
  {
    description: "작지만 안정감을\n추구하는 시스템 추종자",
    tag: "시스템 추종자",
  },
];

/** No Pain, Yes Gain 섹션 + 페르소나 카드 */
export default function PersonaSection() {
  return (
    <section className="bg-inverse-surface py-24 text-inverse-foreground md:py-32">
      <div className="mx-auto max-w-7xl px-6">
        {/* Title */}
        <div className="mb-20 text-center">
          <h2 className="text-4xl font-extrabold tracking-tight md:text-5xl lg:text-6xl">
            No Pain, Yes Gain!
          </h2>
          <p className="mt-6 text-lg text-inverse-muted md:text-xl">
            시행착오 없이 빨리 가는 방법, 공여사들.
          </p>
        </div>

        {/* Common label */}
        <p className="mb-10 text-center text-sm font-semibold uppercase tracking-widest text-inverse-subtle">
          각자의 궤도에서 일하는 사람들
        </p>

        {/* Persona cards */}
        <div className="grid gap-6 md:grid-cols-3">
          {PERSONAS.map((p) => (
            <div
              key={p.tag}
              className="group relative overflow-hidden rounded-2xl border border-inverse-foreground/10 bg-inverse-foreground/5 p-8 backdrop-blur-sm transition-all hover:bg-inverse-foreground/10 md:p-10"
            >
              <span className="mb-6 inline-block rounded-full bg-inverse-foreground/10 px-4 py-1.5 text-xs font-semibold tracking-wide">
                {p.tag}
              </span>
              <p className="whitespace-pre-line text-xl font-bold leading-relaxed md:text-2xl">
                {p.description}
              </p>
              <div className="absolute -bottom-4 -right-4 h-24 w-24 rounded-full bg-inverse-foreground/5 transition-transform group-hover:scale-150" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
