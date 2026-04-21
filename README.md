# 공여사들 디자인 클론

[gongysd.com](https://gongysd.com)의 디자인 구조를 클론한 프로젝트입니다.  
실제 기능 없이 **레이아웃과 UI 구조**만 재현하는 것을 목표로 합니다.

> **Production:** [https://css-clone-test.vercel.app](https://css-clone-test.vercel.app) · **Platform:** [Vercel](https://vercel.com)

## 왜 만들었는가

실서비스 사이트는 **타이포그래피, 그리드, 섹션 리듬, 반응형 네비게이션**이 한 덩어리로 얽혀 있어, 문서만 보고 떠리기보다 **직접 구현해 보며** 감이 잡히는 경우가 많습니다. 이 저장소는 특정 페이지를 **“동작하는 정적 UI”**로 옮기며, 브라우저에서 레이아웃이 어떻게 쌓이는지 학습·검증하기 위한 실험대 역할을 합니다. 백엔드나 비즈니스 로직은 의도적으로 두지 않아 **스타일과 구조**에만 집중합니다.

## 어떤 문제를 해결하려고 했는가

| 문제 | 이 프로젝트에서의 방향 |
|------|------------------------|
| 실제 사이트는 코드가 보이지 않아 구조 파악이 어려움 | 공개된 화면을 기준으로 **섹션 단위 컴포넌트**로 쪼개 재현 |
| 클론과 동시에 기능까지 넣으면 범위가 커짐 | **레이아웃·UI만** 범위로 한정해 완료 가능한 단위 유지 |
| 모바일·데스크톱 행동이 다름 | **스티키 헤더·햄버거 메뉴** 등 반응형 패턴을 코드로 고정 |

즉, “한 브랜드 사이트의 **정보 구조와 시각적 뼈대**를 Next.js 컴포넌트로 옮겨 본다”는 목적에 맞춰 설계했습니다.

## 기술 스택과 선정 이유

**정적 UI 클론**에 맞춰, 의존성과 빌드 복잡도를 낮추는 쪽으로 골랐습니다.

### [Next.js](https://nextjs.org/) 16 (App Router)

- 페이지·레이아웃·메타데이터를 **파일 기반**으로 나누기 쉬워, 섹션별 컴포넌트와 잘 맞습니다.
- 배포(Vercel 등)와의 궁합이 좋아 **포트폴리오·데모**로 공유하기 적합합니다.

### [TypeScript](https://www.typescriptlang.org/)

- 섹션·props가 늘어날수록 **컴포넌트 계약**이 분명해지고, 리팩터링 시 오타·누락을 줄입니다.

### [Tailwind CSS](https://tailwindcss.com/) v4

- **유틸리티**로 간격·타이포·브레이크포인트를 빠르게 맞추고, 클론 작업에서 자주 바뀌는 값을 코드에 남기기 좋습니다.
- 별도 CSS 파일 폭발을 줄이면서도 `globals.css`로 **전역 토큰**을 보완할 수 있습니다.

**한 줄 요약:** Next로 **페이지 조립과 배포**, TypeScript로 **구조 안전성**, Tailwind로 **반복 스타일링 속도**를 가져가는 최소 구성입니다.

## 기술 스택 (요약)

- **Next.js 16** (App Router)
- **TypeScript**
- **Tailwind CSS** v4

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
