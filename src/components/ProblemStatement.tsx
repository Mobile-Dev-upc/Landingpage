import { Card } from './ui/card';
import { AlertCircle, CheckCircle } from 'lucide-react';

export function ProblemStatement() {
  const challenges = [
    'Shortage of professionals: Only 2-3 psychiatrists per 100,000 inhabitants',
    'Administrative overload: Professionals spend valuable time on administrative tasks instead of direct patient care',
    'Fragmented information: Clinical data scattered across multiple systems',
    'Limited access: More than 1 million people affected, 8 out of 10 without adequate care',
    'Lack of follow-up: Difficulties monitoring patient progress between sessions'
  ];
  
  const solutions = [
    'Centralized clinical information',
    'Automated administrative workflows',
    'Real-time patient monitoring',
    'Improved accessibility',
    'Continuous progress tracking'
  ];
  
  return (
    <section className="py-16 md:py-24" style={{ background: '#F9F9F9' }}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="inline-block px-4 py-1.5 rounded-full mb-4" style={{ background: '#E9FFFF', color: '#308B82' }}>
            The Challenge & Our Solution
          </div>
          <h2 className="text-gray-900 mb-4">
            Addressing the Mental Health Crisis in Peru
          </h2>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          {/* The Current Challenge */}
          <Card className="p-8 bg-white border-gray-200">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-xl flex items-center justify-center" style={{ background: '#FFE5E5' }}>
                <AlertCircle className="w-6 h-6" style={{ color: '#D32F2F' }} />
              </div>
              <h3 className="text-gray-900">The Current Challenge</h3>
            </div>
            <p className="text-gray-700 mb-6">
              The mental health system in Peru faces a critical crisis:
            </p>
            <ul className="space-y-4">
              {challenges.map((challenge, index) => (
                <li key={index} className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 rounded-full flex-shrink-0 mt-2" style={{ background: '#D32F2F' }} />
                  <span className="text-gray-700">{challenge}</span>
                </li>
              ))}
            </ul>
          </Card>
          
          {/* The PSYMED Solution */}
          <Card className="p-8 border-2" style={{ background: 'linear-gradient(135deg, #E7FFFD 0%, #E9FFFF 100%)', borderColor: '#69BFB6' }}>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-xl flex items-center justify-center" style={{ background: '#69BFB6' }}>
                <CheckCircle className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-gray-900">The PSYMED Solution</h3>
            </div>
            <p className="text-gray-900 mb-6">
              A specialized platform that integrates all necessary functionalities for efficient and secure management of clinical information in mental health.
            </p>
            <ul className="space-y-4">
              {solutions.map((solution, index) => (
                <li key={index} className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5" style={{ background: '#69BFB6' }}>
                    <CheckCircle className="w-3 h-3 text-white" />
                  </div>
                  <span className="text-gray-900">{solution}</span>
                </li>
              ))}
            </ul>
          </Card>
        </div>
        
        <div className="text-center">
          <p className="text-gray-700 max-w-3xl mx-auto">
            PSYMED bridges the gap between overwhelming demand and limited resources, empowering professionals to provide better care while making mental health services more accessible to those who need them most.
          </p>
        </div>
      </div>
    </section>
  );
}
