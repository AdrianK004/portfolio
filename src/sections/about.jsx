import React, { useEffect, useRef, useState } from 'react';
import cvFile from '../assets/AdrianKrasniqiCV.pdf';

const About = () => {
  const [skills, setSkills] = useState([
    { name: 'FULL-STACK', percent: 85, width: 0 },
    { name: 'JAVA', percent: 70, width: 0 },
    { name: 'PYTHON', percent: 40, width: 0 },
    { name: 'C++', percent: 30, width: 0 },
    { name: 'C#', percent: 30, width: 0 },
    { name: 'OBJECT-ORIENTED PROGRAMMING', percent: 50, width: 0 },
  ]);
  
  const sectionRef = useRef(null);
  const [hasAnimated, setHasAnimated] = useState(false);
  const [textVisible, setTextVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasAnimated) {
            setHasAnimated(true);
            setTextVisible(true);
            skills.forEach((skill, index) => {
              setTimeout(() => {
                setSkills((prev) =>
                  prev.map((s, i) =>
                    i === index ? { ...s, width: s.percent } : s
                  )
                );
              }, index * 150);
            });
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
  }, [hasAnimated]);

  return (
    <section id="about" ref={sectionRef} className="py-20 px-6 md:px-12 bg-gray-900">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h3 
              className={`text-sm uppercase tracking-wider text-blue-400 font-semibold mb-2 transition-all duration-700 ${
                textVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: '0ms' }}
            >
              WHO AM I?
            </h3>
            <h2 
              className={`text-3xl md:text-4xl font-bold text-white mb-4 transition-all duration-700 ${
                textVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: '100ms' }}
            >
              I'm Adrian Krasniqi, a <span className="text-blue-500">Software Developer</span>
            </h2>
            <p 
              className={`text-gray-300 leading-relaxed mb-6 transition-all duration-700 ${
                textVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: '200ms' }}
            >
              Motivated software developer with a bachelor's degree in software design. Passionate about computers and 
              information technology since a young age. Experience with full-stack development, programming, and databases. 
              Particularly interested in developing modern web applications and efficiently solving technical problems. 
            </p>
            <p 
              className={`text-gray-300 leading-relaxed mb-8 transition-all duration-700 ${
                textVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: '300ms' }}
            >
              My goal is to further develop my skills in a professional IT environment and contribute to innovative software projects.
            </p>

            <div 
              className={`flex flex-wrap gap-4 items-center transition-all duration-700 ${
                textVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
                }`}
                style={{ transitionDelay: '800ms' }}
            >
              <p className="text-gray-300 font-semibold">
                CONNECT WITH ME &gt;
              </p>

              <div className="flex gap-3">
                {/* LinkedIN */}
                <a href="https://www.linkedin.com/in/adrian-krasniqi-170511400/" className="text-gray-400 hover:text-blue-400 transition-colors duration-200">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-brand-linkedin"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M8 11v5" /><path d="M8 8v.01" /><path d="M12 16v-5" /><path d="M16 16v-3a2 2 0 1 0 -4 0" /><path d="M3 7a4 4 0 0 1 4 -4h10a4 4 0 0 1 4 4v10a4 4 0 0 1 -4 4h-10a4 4 0 0 1 -4 -4l0 -10" /></svg>
                </a>

                {/* GitHub */}
                <a href="https://github.com/AdrianK004" className="text-gray-400 hover:text-blue-400 transition-colors duration-200">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-brand-github"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5" /></svg>
                </a>

                {/* Facebook */}
                <a href="https://www.facebook.com/adrian.krasniqi.32241/" className="text-gray-400 hover:text-blue-400 transition-colors duration-200">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-brand-facebook"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M7 10v4h3v7h4v-7h3l1 -4h-4v-2a1 1 0 0 1 1 -1h3v-4h-3a5 5 0 0 0 -5 5v2h-3" /></svg>
                </a>
                {/* Whatsapp */}
                <a href="https://wa.me/38349427652" className="text-gray-400 hover:text-blue-400 transition-colors duration-200">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-brand-whatsapp"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M3 21l1.65 -3.8a9 9 0 1 1 3.4 2.9l-5.05 .9" /><path d="M9 10a.5 .5 0 0 0 1 0v-1a.5 .5 0 0 0 -1 0v1a5 5 0 0 0 5 5h1a.5 .5 0 0 0 0 -1h-1a.5 .5 0 0 0 0 1" /></svg>
                </a>
              </div>

              <a 
                href={cvFile}
                download="AdrianKrasniqiCV.pdf"
                className="bg-blue-600/10 backdrop-blur-sm hover:bg-blue-600/20 text-blue-200 px-4 py-2 rounded-xl flex items-center text-sm font-bold border border-blue-400/50"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="4 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-file-download"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M14 3v4a1 1 0 0 0 1 1h4" /><path d="M17 21h-10a2 2 0 0 1 -2 -2v-14a2 2 0 0 1 2 -2h7l5 5v11a2 2 0 0 1 -2 2" /><path d="M12 17v-6" /><path d="M9.5 14.5l2.5 2.5l2.5 -2.5" /></svg>
                Download CV
              </a>
            </div>
          </div>

          <div className="space-y-6">
            {skills.map((skill, idx) => (
              <div key={idx}>
                <div className="flex justify-between mb-2">
                  <span className="text-xl font-bold text-gray-200">{skill.name}</span>
                  <span className="text-xl font-bold text-blue-600">{skill.width}%</span>
                </div>
                <div className="w-full bg-gray-700 rounded-full h-2.5">
                  <div 
                    className="bg-blue-600 h-2.5 rounded-full transition-all duration-1000 ease-out" 
                    style={{ width: `${skill.width}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;