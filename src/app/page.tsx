import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import HeroSlider from '@/components/home/HeroSlider';
import ProjectsForSale from '@/components/home/ProjectsForSale';
import CompletedProjects from '@/components/home/CompletedProjects';
import ContactCta from '@/components/home/ContactCta';

export default function HomePage() {
  return (
    <main className="min-h-screen bg-black">
      <Header />
      <HeroSlider />
      <ProjectsForSale />
      <CompletedProjects />
      <ContactCta />
      <Footer />
    </main>
  );
}
