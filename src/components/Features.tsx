import { Card } from './ui/card';
import { 
  Target,
  Calendar,
  Pill,
  TrendingUp,
  Lock,
  Smartphone
} from 'lucide-react';

const keyFeatures = [
  {
    icon: Target,
    title: 'Comprehensive Patient Management',
    description: 'Centralize all clinical information, diagnoses, treatments, and histories in one secure and accessible place.',
    color: 'text-white',
    bg: '#69BFB6'
  },
  {
    icon: Calendar,
    title: 'Smart Appointment System',
    description: 'Schedule, modify, and manage appointments with automatic reminders. View your calendar in an intuitive interface.',
    color: 'text-white',
    bg: '#308B82'
  },
  {
    icon: Pill,
    title: 'Medication Control',
    description: 'Assign medications, set dosages and frequencies, and receive real-time consumption confirmations.',
    color: 'text-white',
    bg: '#69BFB6'
  },
  {
    icon: TrendingUp,
    title: 'Continuous Monitoring',
    description: 'Tracking of emotional states and biological functions (sleep, appetite, energy) with statistical visualizations.',
    color: 'text-white',
    bg: '#308B82'
  },
  {
    icon: Lock,
    title: 'Security and Privacy',
    description: 'Compliance with data protection regulations. Encrypted information accessible only to authorized professionals and their patients.',
    color: 'text-white',
    bg: '#69BFB6'
  },
  {
    icon: Smartphone,
    title: 'Multi-platform Access',
    description: 'Available on web and mobile (Android and iOS) for access from anywhere, anytime.',
    color: 'text-white',
    bg: '#308B82'
  }
];

export function Features() {
  return (
    <section id="features" className="py-16 md:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="inline-block px-4 py-1.5 rounded-full mb-4" style={{ background: '#E9FFFF', color: '#308B82' }}>
            Key Features
          </div>
          <h2 className="text-gray-900 mb-4">
            Everything You Need in One Platform
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            PSYMED integrates all necessary functionalities for efficient and secure management of mental health care.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {keyFeatures.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <Card key={index} className="p-6 hover:shadow-lg transition-shadow border-gray-200">
                <div className={`w-12 h-12 rounded-xl ${feature.color} flex items-center justify-center mb-4`} style={{ backgroundColor: feature.bg }}>
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
