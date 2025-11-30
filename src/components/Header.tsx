import { Button } from './ui/button';
import { Brain } from 'lucide-react';

export function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-b border-gray-200">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-xl flex items-center justify-center" style={{ background: '#308B82' }}>
              <Brain className="w-6 h-6 text-white" />
            </div>
            <span className="text-gray-900">PSYMED</span>
          </div>
          
          <nav className="hidden md:flex items-center gap-8">
            <a href="#features" className="text-gray-600 hover:text-gray-900 transition-colors">
              Features
            </a>
            <a href="#about" className="text-gray-600 hover:text-gray-900 transition-colors">
              About
            </a>
            <a href="#impact" className="text-gray-600 hover:text-gray-900 transition-colors">
              Impact
            </a>
            <a href="#contact" className="text-gray-600 hover:text-gray-900 transition-colors">
              Contact
            </a>
          </nav>
          
          <div className="flex items-center gap-3">
            <Button variant="ghost">Sign In</Button>
            <Button style={{ background: '#308B82', color: 'white' }}>Register</Button>
          </div>
        </div>
      </div>
    </header>
  );
}