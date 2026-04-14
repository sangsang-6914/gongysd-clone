import Link from "next/link";

const FOOTER_LINKS = [
  {
    title: "ABOUT",
    links: [
      { label: "우리의 사명", href: "/mission" },
      { label: "브랜드 철학", href: "/why" },
      { label: "팀 공여사들", href: "/team" },
      { label: "미디어룸", href: "/media" },
    ],
  },
  {
    title: "제품",
    links: [
      { label: "개인용 템플릿", href: "/personal" },
      { label: "전문가용 템플릿", href: "/pro" },
      { label: "기업용 시스템", href: "/system" },
      { label: "아카데미", href: "/academy" },
    ],
  },
  {
    title: "블로그",
    links: [
      { label: "개인 생산성", href: "/personal-blog" },
      { label: "전문가 생산성", href: "/pro-blog" },
      { label: "큐레이션", href: "/curation" },
      { label: "인사이트", href: "/insights" },
    ],
  },
  {
    title: "고객지원",
    links: [
      { label: "템플릿 후기", href: "/review" },
      { label: "튜토리얼", href: "/tutorial" },
      { label: "추천보상", href: "/referral" },
      { label: "노션 위키", href: "/notion-wiki" },
    ],
  },
];

/** 사이트 하단 푸터 */
export default function Footer() {
  return (
    <footer className="border-t border-border bg-white">
      <div className="mx-auto max-w-7xl px-6 py-16">
        {/* Link columns */}
        <div className="grid grid-cols-2 gap-10 md:grid-cols-5">
          {/* Logo column */}
          <div className="col-span-2 md:col-span-1">
            <Link href="/" className="text-xl font-bold tracking-tight text-primary">
              공여사들
            </Link>
            <p className="mt-4 text-sm leading-relaxed text-muted">
              일의 구조를 만듭니다.
            </p>
          </div>

          {FOOTER_LINKS.map((section) => (
            <div key={section.title}>
              <h4 className="mb-4 text-xs font-bold uppercase tracking-widest text-primary">
                {section.title}
              </h4>
              <ul className="space-y-3">
                {section.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-muted transition-colors hover:text-primary"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="mt-16 flex flex-col items-center justify-between gap-4 border-t border-border pt-8 md:flex-row">
          <div className="text-xs leading-relaxed text-muted">
            <p>대표 이슬기 | 서울특별시 강서구 마곡중앙6로 66, A동 6층 604호</p>
            <p>사업자등록번호 672-76-00358 | 통신판매업신고번호 제2025-서울강서-0386호</p>
          </div>
          <div className="flex items-center gap-4">
            <Link href="/terms" className="text-xs text-muted hover:text-primary">
              이용약관
            </Link>
            <Link href="/privacy" className="text-xs text-muted hover:text-primary">
              개인정보처리방침
            </Link>
          </div>
        </div>

        <p className="mt-6 text-center text-xs text-gray-400">
          Copyright © 2026 공여사들 All rights reserved.
        </p>
      </div>
    </footer>
  );
}
