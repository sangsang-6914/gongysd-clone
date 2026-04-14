# 공여사들 디자인 클론

[gongysd.com](https://gongysd.com)의 디자인 구조를 클론한 프로젝트입니다.
실제 기능 없이 **레이아웃과 UI 구조**만 재현하는 것을 목표로 합니다.

## 기술 스택

- **Next.js 16** (App Router)
- **TypeScript**
- **Tailwind CSS**

## 페이지 구조

| 섹션 | 컴포넌트 | 설명 |
|------|----------|------|
| Header | `Header.tsx` | 스티키 네비게이션 + 모바일 햄버거 메뉴 |
| Hero | `HeroSection.tsx` | "We Make Systems for Your Orbit" + 궤도 애니메이션 |
| Our Values | `ValuesSection.tsx` | Start Easy / Work Clear / Make Impact 카드 |
| Our System | `SystemSection.tsx` | 개인 / 전문가 / 기업 시스템 카드 |
| Persona | `PersonaSection.tsx` | "No Pain, Yes Gain!" + 페르소나 카드 |
| Footer | `Footer.tsx` | 다중 컬럼 링크 + 회사 정보 |

## 시작하기

```bash
# 의존성 설치
npm install

# 개발 서버 실행
npm run dev
```

[http://localhost:3000](http://localhost:3000)에서 결과를 확인할 수 있습니다.

## 프로젝트 구조

```
src/app/
├── globals.css
├── layout.tsx
├── page.tsx
└── components/
    ├── Header.tsx
    ├── HeroSection.tsx
    ├── ValuesSection.tsx
    ├── SystemSection.tsx
    ├── PersonaSection.tsx
    └── Footer.tsx
```
