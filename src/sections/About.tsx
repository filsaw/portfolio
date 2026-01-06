import Section from '../components/Section';
import { personalInfo } from '../data/portfolioData';

const About = () => {
  const highlights = [
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
        </svg>
      ),
      title: "Full Stack Development",
      description: "Proficient in modern web technologies across frontend and backend"
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
        </svg>
      ),
      title: "Microservices Architecture",
      description: "Experience with scalable, containerized microservices systems"
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
        </svg>
      ),
      title: "Enterprise Platforms",
      description: "Skilled in enterprise Java, Spring Boot, and Liferay DXP"
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4" />
        </svg>
      ),
      title: "DevOps & CI/CD",
      description: "Docker, Kubernetes, and automated deployment pipelines"
    }
  ];

  return (
    <Section id="about" title="About Me">
      <div className="grid md:grid-cols-2 gap-12 items-start">
        <div>
          <h3 className="text-2xl font-semibold mb-4 text-blue-400">Who I Am</h3>
          <p className="text-gray-300 leading-relaxed mb-4">
            I'm a 5th-year Engineering student at IGA, specializing in Software Development and Information Technologies. 
            My focus is on building robust, scalable backend systems while maintaining strong full-stack capabilities.
          </p>
          <p className="text-gray-300 leading-relaxed mb-4">
            Throughout my studies and internships, I've gained hands-on experience with enterprise platforms like 
            Liferay DXP, modern frameworks like Laravel and Django, and DevOps practices including Docker and Kubernetes.
          </p>
          <p className="text-gray-300 leading-relaxed">
            I'm passionate about clean architecture, microservices design, and building systems that solve real business problems. 
            Currently seeking a final-year internship (PFE) where I can contribute to meaningful projects and continue growing as an engineer.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {highlights.map((item, index) => (
            <div 
              key={index}
              className="bg-gray-800 p-6 rounded-lg border border-gray-700 hover:border-blue-500 transition-all duration-200 hover:shadow-lg hover:shadow-blue-500/10"
            >
              <div className="text-blue-400 mb-3">
                {item.icon}
              </div>
              <h4 className="font-semibold text-white mb-2">{item.title}</h4>
              <p className="text-sm text-gray-400">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
};

export default About;
