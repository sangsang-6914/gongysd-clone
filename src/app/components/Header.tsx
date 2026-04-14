"use client";

import { useState } from "react";
import Link from "next/link";

const NAV_ITEMS = [
  { label: "공여사들 소개", href: "/about" },
  { label: "템플릿", href: "/templates" },
  { label: "시스템", href: "/system" },
  { label: "블로그", href: "/blog" },
  { label: "인사이트", href: "/insights" },
];

/** 사이트 상단 네비게이션 헤더 */
export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full bg-white/80 backdrop-blur-md border-b border-border">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
        <Link href="/" className="text-xl font-bold tracking-tight text-primary">
          공여사들
        </Link>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-8 md:flex">
          {NAV_ITEMS.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-muted transition-colors hover:text-primary"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden md:block">
          <button className="rounded-full border border-primary bg-primary px-5 py-2 text-sm font-medium text-white transition-all hover:bg-white hover:text-primary">
            로그인
          </button>
        </div>

        {/* Mobile hamburger */}
        <button
          className="flex flex-col gap-1.5 md:hidden"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="메뉴 열기"
        >
          <span
            className={`h-0.5 w-6 bg-primary transition-transform ${mobileOpen ? "translate-y-2 rotate-45" : ""}`}
          />
          <span
            className={`h-0.5 w-6 bg-primary transition-opacity ${mobileOpen ? "opacity-0" : ""}`}
          />
          <span
            className={`h-0.5 w-6 bg-primary transition-transform ${mobileOpen ? "-translate-y-2 -rotate-45" : ""}`}
          />
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <nav className="flex flex-col gap-4 border-t border-border bg-white px-6 py-6 md:hidden">
          {NAV_ITEMS.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-base font-medium text-foreground"
              onClick={() => setMobileOpen(false)}
            >
              {item.label}
            </Link>
          ))}
          <button className="mt-2 w-full rounded-full bg-primary py-2.5 text-sm font-medium text-white">
            로그인
          </button>
        </nav>
      )}
    </header>
  );
}
