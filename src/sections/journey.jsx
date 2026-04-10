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
      description: "My primary school years were a foundational period that I will never forget. During this time, I took my first and most important steps in both education and personal development. It was also when my passion for computers first began. I was a dedicated student and successfully completed this stage with excellent academic results.",
      location: "Sallagrazhdë, Kosovo"
    },
    {
      period: "2018 - 2021",
      title: "High School",
      school: "Gymnasium 'Jeta e Re'",
      description: "During high school, I continued to focus on science, further strengthening my passion for technology. I was an excellent student, actively participating in various projects. One of my most significant achievements was contributing to the development of the website visitsuhareka.com, created to promote our city.",
      location: "Suharekë, Kosovo"
    },
    {
      period: "2021 - 2025",
      title: "Studies",
      school: "University of Prizren 'Ukshin Hoti'",
      description: "I continued my studies in Computer Science, a period where I made the key decision to pursue my professional career in technology. Throughout this journey, I experienced both rewarding and challenging moments, all approached with strong focus and dedication. I achieved a GPA of 9.0 and was awarded four scholarships from both the state and the faculty. During this time, I developed various projects and continue to build on this path in a professional capacity.",
      location: "Prizren, Kosovo"
    }
  ];

  return (
    <section id="journey" ref={sectionRef} className="px-6 md:px-12 bg-gray-900">
      <div className="max-w-7xl mx-auto">
        <div className='border-t-4 mx-0 sm:mx-4 md:mx-20 rounded-full border-blue-800'></div>
        
        <div className="pt-8">
          <h2 
            className={`text-4xl md:text-5xl font-bold text-center text-white mb-12 transition-all duration-700 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            My Journey
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {journeyData.map((item, index) => (
              <div
                key={index}
                className={`bg-gray-800 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 ${
                  isVisible 
                    ? 'opacity-100 translate-y-0' 
                    : 'opacity-0 translate-y-16'
                }`}
                style={{ transitionDelay: `${index * 150}ms`, transitionDuration: '700ms' }}
              >
                <div className="mb-4">
                  <span className="text-blue-400 font-semibold text-sm">
                    {item.period}
                  </span>
                  <h3 className="text-2xl font-bold text-white  mt-1">
                    {item.title}
                  </h3>
                </div>
                
                <div className="space-y-2">
                  <p className="text-gray-300 font-medium">
                    📚 {item.school}
                  </p>
                  <p className="text-gray-400 text-sm">
                    📍 {item.location}
                  </p>
                  <p className="text-gray-300 mt-3 leading-relaxed">
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