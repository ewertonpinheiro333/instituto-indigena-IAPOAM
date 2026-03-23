import { Header } from "@/app/components/Header";
import { Hero } from "@/app/components/Hero";
import { InstitutionalBanner } from "@/app/components/InstitutionalBanner";
import { ProjetosAcoes } from "@/app/components/ProjetosAcoes";
import { Presidente } from "@/app/components/Presidente";
import { Equipe } from "@/app/components/Equipe";
import { Programas } from "@/app/components/Programas";
import AreasDeAtuacao from "@/app/components/AreasDeAtuacao";
import DonationCTA from "@/app/components/DonationCTA";
import { Footer } from "@/app/components/Footer";
import { NossaLuta } from "@/app/components/NossaLuta";
import { EstruturaIapoam } from "@/app/components/EstruturaIapoam";
import { Direitos } from "@/app/components/Direitos";


export default function Home() {
  return (
    <div className="min-h-screen bg-[#13181b]">
      <Header />
      <main>
        <Hero />
        <Programas />
       
        <NossaLuta />
        <InstitutionalBanner />
        <ProjetosAcoes />
        <EstruturaIapoam />
        <Presidente />
        <Equipe />
        
        <Direitos />
        <AreasDeAtuacao />
        <DonationCTA />
      </main>
      <Footer />
    </div>
  );
}