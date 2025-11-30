import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { ValueProposition } from './components/ValueProposition';
import { ProblemStatement } from './components/ProblemStatement';
import { AboutProduct } from './components/AboutProduct';
import { Features } from './components/Features';
import { Impact } from './components/Impact';
import { CTA } from './components/CTA';
import { Footer } from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Hero />
      <ValueProposition />
      <ProblemStatement />
      <AboutProduct />
      <Features />
      <Impact />
      <CTA />
      <Footer />
    </div>
  );
}
