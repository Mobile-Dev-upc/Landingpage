import { Card } from './ui/card';
import { Check } from 'lucide-react';

export function ValueProposition() {
  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12">
          {/* For Mental Health Professionals */}
          <Card className="p-8 border-2" style={{ borderColor: '#69BFB6', background: '#F9F9F9' }}>
            <div className="inline-block px-4 py-1.5 rounded-full mb-4" style={{ background: '#E9FFFF', color: '#308B82' }}>
              For Mental Health Professionals
            </div>
            <h2 className="text-gray-900 mb-4">
              Free your time. Improve care.
            </h2>
            <p className="text-gray-700 mb-6">
              In Peru, there are only 2 to 3 psychiatrists per 100,000 inhabitants, and administrative overload limits your ability to care for those who need it most. PSYMED eliminates the barriers preventing you from providing quality care.
            </p>
            
            <div className="mb-6">
              <p className="text-gray-900 mb-4">What you get:</p>
              <ul className="space-y-3">
                {[
                  'Centralized management of clinical information in one place',
                  'Efficient scheduling of appointments with automatic reminders',
                  'Real-time tracking of your patients\' progress',
                  'Medication control with consumption confirmation',
                  'Monitoring of emotional states and biological functions',
                  'Secure access to complete clinical histories',
                  'Improved multidisciplinary collaboration'
                ].map((benefit, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5" style={{ background: '#69BFB6' }}>
                      <Check className="w-3 h-3 text-white" />
                    </div>
                    <span className="text-gray-700">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="p-4 rounded-lg" style={{ background: '#E7FFFD' }}>
              <p className="text-gray-900">
                <span style={{ color: '#308B82' }}>Result:</span> Reduce your administrative burden by 30% and increase time available for direct patient care.
              </p>
            </div>
          </Card>
          
          {/* For Patients */}
          <Card className="p-8 border-2" style={{ borderColor: '#308B82', background: '#F9F9F9' }}>
            <div className="inline-block px-4 py-1.5 rounded-full mb-4" style={{ background: '#E5FFFC', color: '#308B82' }}>
              For Patients
            </div>
            <h2 className="text-gray-900 mb-4">
              Your mental well-being, at your fingertips.
            </h2>
            <p className="text-gray-700 mb-6">
              More than 1 million people in Peru suffer from mental disorders, and 8 out of 10 do not receive the care they need. PSYMED connects you with your mental health professional in a secure and accessible way.
            </p>
            
            <div className="mb-6">
              <p className="text-gray-900 mb-4">What you get:</p>
              <ul className="space-y-3">
                {[
                  '24/7 access to your treatment information',
                  'Smart reminders for appointments and medications',
                  'Daily recording of your emotional state and biological functions',
                  'Direct communication with your therapist or psychiatrist',
                  'Clear visualization of your therapeutic progress',
                  'Clinical history always available',
                  'Secure platform with encrypted data'
                ].map((benefit, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5" style={{ background: '#308B82' }}>
                      <Check className="w-3 h-3 text-white" />
                    </div>
                    <span className="text-gray-700">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="p-4 rounded-lg" style={{ background: '#E7FFFD' }}>
              <p className="text-gray-900">
                <span style={{ color: '#308B82' }}>Result:</span> Improve your satisfaction with the care received and maintain active tracking of your treatment.
              </p>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
}
