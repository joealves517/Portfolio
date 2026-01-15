import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { Hero } from '@/components/sections/Hero';
import { About } from '@/components/sections/About';
import { Projects } from '@/components/sections/Projects';
import { Skills } from '@/components/sections/Skills';
import { Contact } from '@/components/sections/Contact';

function App() {
  return (
    <div className="min-h-screen bg-gray-950 text-white relative">
      {/* Gradient overlay từ Hero xuống các section bên dưới - mượt mà hơn */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute inset-0 hero-gradient opacity-100" style={{ height: '120vh' }} />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-gray-950/30 to-gray-950" style={{ top: '40vh', height: '120vh' }} />
      </div>
      
      <div className="relative z-10">
        <Header />
        <main>
          <Hero />
          <About />
          <Projects />
          <Skills />
          <Contact />
        </main>
        <Footer />
      </div>
    </div>
  );
}

export default App;
