import React, { useEffect, useRef, useState } from 'react';

const Journey = () => {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        });
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const journeyData = [
    {
      period: "2008 - 2018",
      title: "Primary School",
      school: "SH.F.M.U 'GJ.K - SKENDERBEU'",
      description: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.",
      location: "Sallagrazhdë, Kosovo"
    },
    {
      period: "2018 - 2021",
      title: "High School",
      school: "Gymnasium 'Jeta e Re'",
      description: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.",
      location: "Suharekë, Kosovo"
    },
    {
      period: "2021 - 2025",
      title: "Studies",
      school: "University of Prizren",
      description: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.",
      location: "Prizren, Kosovo"
    }
  ];

  return (
    <section id="journey" ref={sectionRef} className="py-20 px-6 md:px-12 bg-gray-900">
      <div className="max-w-7xl mx-auto">
        <div className='border-t-4 mx-0 sm:mx-4 md:mx-20 rounded-full border-blue-800'></div>
        
        <div className="pt-8">
          <h2 
            className={`text-4xl md:text-5xl font-bold text-center text-gray-900 dark:text-white mb-12 transition-all duration-700 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            My Journey
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {journeyData.map((item, index) => (
              <div
                key={index}
                className={`bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 ${
                  isVisible 
                    ? 'opacity-100 translate-y-0' 
                    : 'opacity-0 translate-y-16'
                }`}
                style={{ transitionDelay: `${index * 150}ms`, transitionDuration: '700ms' }}
              >
                <div className="mb-4">
                  <span className="text-blue-600 dark:text-blue-400 font-semibold text-sm">
                    {item.period}
                  </span>
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mt-1">
                    {item.title}
                  </h3>
                </div>
                
                <div className="space-y-2">
                  <p className="text-gray-700 dark:text-gray-300 font-medium">
                    📚 {item.school}
                  </p>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">
                    📍 {item.location}
                  </p>
                  <p className="text-gray-600 dark:text-gray-300 mt-3 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Journey;