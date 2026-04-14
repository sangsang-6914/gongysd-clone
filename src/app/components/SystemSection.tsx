import Link from "next/link";

const SYSTEMS = [
  {
    label: "개인",
    title: "일과 삶의 밸런스를\n내 기준으로 다시 세우고\n싶은 사람을 위한 시스템",
    href: "/personal",
    icon: "🌱",
  },
  {
    label: "전문가",
    title: "나의 경험과 전문성이\n빛날 수 있도록 일의 기준을\n잡아주는 전문가용 시스템",
    href: "/pro",
    icon: "⚡",
  },
  {
    label: "기업",
    title: "작은 조직이 안정적으로\n성장할 수 있도록 돕는\n사업 운영 시스템",
    href: "/system",
    icon: "🏢",
  },
];

/** Our System 섹션 - 개인/전문가/기업 카드 */
export default function SystemSection() {
  return (
    <section className="bg-white py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-16 text-center">
          <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-muted">
            Our System
          </p>
          <h2 className="text-3xl font-bold tracking-tight text-primary md:text-4xl">
            나에게 맞는 구조를 선택해 보세요
          </h2>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {SYSTEMS.map((s) => (
            <Link
              key={s.label}
              href={s.href}
              className="group flex flex-col justify-between rounded-2xl border border-border bg-white p-8 transition-all hover:-translate-y-1 hover:border-primary hover:shadow-xl md:min-h-[320px] md:p-10"
            >
              <div>
                <span className="mb-6 inline-block text-3xl">{s.icon}</span>
                <span className="mb-4 block text-xs font-bold uppercase tracking-widest text-muted">
                  {s.label}
                </span>
                <h3 className="whitespace-pre-line text-lg font-bold leading-relaxed text-primary md:text-xl">
                  {s.title}
                </h3>
              </div>
              <div className="mt-8 flex items-center gap-2 text-sm font-semibold text-muted transition-colors group-hover:text-primary">
                View More
                <span className="transition-transform group-hover:translate-x-1">→</span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
