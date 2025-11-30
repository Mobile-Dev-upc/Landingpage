export function AboutProduct() {
  // Extract video ID from YouTube URL
  const videoId = '97MtjWkinhc';
  const embedUrl = `https://www.youtube.com/embed/${videoId}?rel=0`;

  return (
    <section id="about" className="py-16 md:py-24" style={{ background: '#E5FFFC' }}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="inline-block px-4 py-1.5 rounded-full mb-4" style={{ background: '#E9FFFF', color: '#308B82' }}>
            About the Product
          </div>
          <h2 className="text-gray-900 mb-4">
            See PSYMED in Action
          </h2>
          <p className="text-gray-700 max-w-2xl mx-auto">
            Discover how PSYMED transforms mental health care management through innovative technology.
          </p>
        </div>
        
        <div className="max-w-2xl mx-auto">
          <div className="relative w-full bg-gray-200 rounded-2xl overflow-hidden shadow-2xl" style={{ paddingBottom: '56.25%' }}>
            <iframe
              src={embedUrl}
              title="About PSYMED Product"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
              className="absolute top-0 left-0 w-full h-full"
              style={{ border: 'none' }}
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

