import { Card } from './ui/card';
import { TrendingDown, TrendingUp, Database, Clock } from 'lucide-react';

export function Impact() {
  const stats = [
    {
      icon: TrendingDown,
      value: '30%',
      label: 'reduction',
      description: 'in administrative burden for professionals',
      color: '#69BFB6'
    },
    {
      icon: TrendingUp,
      value: '20%',
      label: 'improvement',
      description: 'in patient satisfaction',
      color: '#308B82'
    },
    {
      icon: Database,
      value: '100%',
      label: 'centralization',
      description: 'of clinical information',
      color: '#69BFB6'
    },
    {
      icon: Clock,
      value: '24/7',
      label: 'availability',
      description: 'platform access anytime',
      color: '#308B82'
    }
  ];
  
  return (
    <section className="py-16 md:py-24" style={{ background: '#E5FFFC' }}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="inline-block px-4 py-1.5 rounded-full mb-4" style={{ background: '#E9FFFF', color: '#308B82' }}>
            Our Impact
          </div>
          <h2 className="text-gray-900 mb-4">
            Numbers that Matter
          </h2>
          <p className="text-gray-700 max-w-2xl mx-auto">
            Designed specifically to address the unique challenges of Peru's mental health system, with functionalities that respond to real needs identified in interviews with professionals and patients.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <Card key={index} className="p-6 bg-white border-gray-200 text-center hover:shadow-lg transition-shadow">
                <div className="w-12 h-12 rounded-xl flex items-center justify-center mx-auto mb-4" style={{ background: stat.color }}>
                  <Icon className="w-6 h-6 text-white" />
                </div>
                <div className="text-gray-900 mb-1">{stat.value}</div>
                <div className="text-gray-900 mb-2">{stat.label}</div>
                <p className="text-gray-600">{stat.description}</p>
              </Card>
            );
          })}
        </div>
        
        <div className="max-w-3xl mx-auto text-center">
          <div className="p-6 rounded-2xl" style={{ background: '#E9FFFF' }}>
            <h3 className="text-gray-900 mb-4">Designed for the Peruvian Context</h3>
            <p className="text-gray-700">
              Developed specifically to address the unique challenges of Peru's mental health system, with functionalities that respond to real needs identified in interviews with professionals and patients.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
