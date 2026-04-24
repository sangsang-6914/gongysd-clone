import Link from "next/link";

const VALUES = [
  {
    title: "Start\nEasy",
    subtitle: "시작은 가볍게",
    description: "복잡한 도구 없이도, 누구나 쉽게 시작할 수 있는 구조를 만듭니다.",
    num: "01",
  },
  {
    title: "Work\nClear",
    subtitle: "일은 명확하게",
    description: "흩어진 업무를 하나의 흐름으로 정리해 명확한 기준을 세웁니다.",
    num: "02",
  },
  {
    title: "Make\nImpact",
    subtitle: "성과는 확실하게",
    description: "반복 가능한 시스템으로 지속적인 성과를 만들어냅니다.",
    num: "03",
  },
];

/** Our Values 섹션 - 세 가지 핵심 가치 카드 */
export default function ValuesSection() {
  return (
    <section className="bg-accent py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-16 flex flex-col items-start gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-muted">
              Our Values
            </p>
            <h2 className="text-3xl font-bold tracking-tight text-primary md:text-4xl">
              공여사들이 구조로 만드는
              <br />
              세 가지 변화
            </h2>
          </div>
          <Link
            href="/about"
            className="text-sm font-semibold text-muted transition-colors hover:text-primary"
          >
            View More →
          </Link>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {VALUES.map((v) => (
            <div
              key={v.num}
              className="group relative flex flex-col justify-between rounded-2xl border border-border bg-card-bg p-8 transition-all hover:-translate-y-1 hover:shadow-xl md:p-10"
            >
              <span className="mb-8 text-xs font-bold text-subtle">{v.num}</span>
              <div>
                <h3 className="whitespace-pre-line text-4xl font-extrabold leading-tight tracking-tight text-primary md:text-5xl">
                  {v.title}
                </h3>
                <p className="mt-4 text-lg font-semibold text-foreground">
                  {v.subtitle}
                </p>
                <p className="mt-2 text-sm leading-relaxed text-muted">
                  {v.description}
                </p>
              </div>
              <div className="absolute bottom-6 right-6 h-10 w-10 rounded-full border border-border opacity-0 transition-opacity group-hover:opacity-100 flex items-center justify-center">
                <span className="text-sm text-muted">→</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
