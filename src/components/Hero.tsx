import { Button } from './ui/button';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { Download } from 'lucide-react';

export function Hero() {
  return (
    <section className="pt-24 pb-16 md:pt-32 md:pb-24" style={{ background: '#E5FFFC' }}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="max-w-2xl">
            <div className="inline-block px-4 py-1.5 rounded-full mb-6" style={{ background: '#E9FFFF', color: '#308B82' }}>
              Transforming Mental Health Care in Peru
            </div>
            <h1 className="text-gray-900 mb-6">
              Transform Mental Health Management with Technology that Connects Professionals and Patients
            </h1>
            <p className="text-gray-600 mb-8">
              PSYMED is the comprehensive platform that centralizes clinical management, optimizes treatment tracking, and reduces administrative burden by 30%, allowing mental health professionals to focus on what really matters: their patients.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="outline" className="gap-2">
                <Download className="w-4 h-4" />
                Download Now
              </Button>
            </div>
            <div className="mt-8 flex items-center gap-8">
              <div>
                <div className="text-gray-900">30%</div>
                <div className="text-gray-600">Less Admin Burden</div>
              </div>
              <div className="h-12 w-px bg-gray-300" />
              <div>
                <div className="text-gray-900">24/7</div>
                <div className="text-gray-600">Platform Access</div>
              </div>
              <div className="h-12 w-px bg-gray-300" />
              <div>
                <div className="text-gray-900">100%</div>
                <div className="text-gray-600">Centralized Info</div>
              </div>
            </div>
          </div>
          
          <div className="relative">
            <div className="absolute inset-0 rounded-3xl blur-3xl opacity-20" style={{ background: '#69BFB6' }} />
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1758273241078-8eec353836be?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZW50YWwlMjBoZWFsdGglMjBwcm9mZXNzaW9uYWwlMjB0aGVyYXB5fGVufDF8fHx8MTc2MzExMDQwN3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
              alt="Mental health professional with patient"
              className="relative rounded-3xl shadow-2xl w-full h-[500px] object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}