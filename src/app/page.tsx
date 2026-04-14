import HeroSection from "./components/HeroSection";
import ValuesSection from "./components/ValuesSection";
import SystemSection from "./components/SystemSection";
import PersonaSection from "./components/PersonaSection";

/** 메인 페이지 - 모든 섹션 조합 */
export default function Home() {
  return (
    <>
      <HeroSection />
      <ValuesSection />
      <SystemSection />
      <PersonaSection />
    </>
  );
}
