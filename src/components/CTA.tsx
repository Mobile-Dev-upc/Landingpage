import { Button } from './ui/button';
import { Card } from './ui/card';
import { Stethoscope, Heart, ArrowUp } from 'lucide-react';

export function CTA() {
  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-gray-900 mb-4">
            Ready to Transform Mental Health Care?
          </h2>
          <p className="text-gray-700 max-w-2xl mx-auto">
            Join PSYMED and be part of the transformation in mental health care in Peru. Choose your profile and get started today.
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          {/* For Professionals */}
          <Card className="p-8 border-2 hover:shadow-xl transition-shadow" style={{ borderColor: '#69BFB6' }}>
            <div className="w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6" style={{ background: '#69BFB6' }}>
              <Stethoscope className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-gray-900 text-center mb-3">
              Are you a Mental Health Professional?
            </h3>
            <p className="text-gray-700 text-center mb-6">
              Join PSYMED and transform how you manage your patients.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" style={{ background: '#69BFB6', color: 'white' }}>
                Sign Up
              </Button>
              <Button size="lg" variant="outline" style={{ borderColor: '#69BFB6', color: '#69BFB6' }}>
                View Demo
              </Button>
            </div>
          </Card>
          
          {/* For Patients */}
          <Card className="p-8 border-2 hover:shadow-xl transition-shadow" style={{ borderColor: '#308B82' }}>
            <div className="w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6" style={{ background: '#308B82' }}>
              <Heart className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-gray-900 text-center mb-3">
              Are you a Patient?
            </h3>
            <p className="text-gray-700 text-center mb-6">
              Connect with your mental health professional securely and efficiently.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" style={{ background: '#308B82', color: 'white' }}>
                Access Platform
              </Button>
              <Button size="lg" variant="outline" style={{ borderColor: '#308B82', color: '#308B82' }}>
                Learn More
              </Button>
            </div>
          </Card>
        </div>
        
        <div className="text-center">
          <div className="inline-block p-6 rounded-2xl max-w-3xl" style={{ background: '#E7FFFD' }}>
            <h3 className="text-gray-900 mb-3">
              PSYMED: Where technology meets human care.
            </h3>
            <p className="text-gray-700">
              In a country where mental health needs more attention, PSYMED is the platform that empowers professionals to provide better care and allows patients to access continuous and personalized follow-up.
            </p>
            <p className="text-gray-900 mt-4">
              Together, we transform mental health care in Peru.
            </p>
          </div>
        </div>
        
        {/* Back to Top Button */}
        <div className="text-center mt-12">
          <Button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="gap-2"
            style={{ background: '#69BFB6', color: 'white' }}
          >
            <ArrowUp className="w-4 h-4" />
            Back to Top
          </Button>
        </div>
      </div>
    </section>
  );
}
