import Section from '../components/Section';
import { experience, education } from '../data/portfolioData';

const Experience = () => {
  return (
    <Section id="experience" title="Experience & Education" className="bg-gray-800/50">
      <div className="grid md:grid-cols-2 gap-12">
        {/* Experience */}
        <div>
          <h3 className="text-2xl font-semibold mb-6 text-blue-400 flex items-center gap-2">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
            Work Experience
          </h3>
          <div className="space-y-6">
            {experience.map((exp) => (
              <div 
                key={exp.id}
                className="relative pl-8 pb-6 border-l-2 border-gray-700 last:pb-0"
              >
                {/* Timeline dot */}
                <div className="absolute -left-[9px] top-0 w-4 h-4 bg-blue-500 rounded-full border-4 border-gray-900"></div>
                
                <div className="bg-gray-800 p-5 rounded-lg border border-gray-700 hover:border-blue-500 transition-all duration-200">
                  <h4 className="text-lg font-semibold text-white mb-1">{exp.title}</h4>
                  <div className="text-blue-400 font-medium mb-1">{exp.company}</div>
                  <div className="text-sm text-gray-400 mb-3">
                    {exp.location} • {exp.period}
                  </div>
                  <ul className="space-y-2">
                    {exp.responsibilities.map((resp, index) => (
                      <li key={index} className="text-sm text-gray-300 flex items-start gap-2">
                        <span className="text-blue-400 mt-1">•</span>
                        <span>{resp}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Education */}
        <div>
          <h3 className="text-2xl font-semibold mb-6 text-blue-400 flex items-center gap-2">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
            </svg>
            Education
          </h3>
          <div className="space-y-6">
            {education.map((edu) => (
              <div 
                key={edu.id}
                className="relative pl-8 pb-6 border-l-2 border-gray-700 last:pb-0"
              >
                {/* Timeline dot */}
                <div className={`absolute -left-[9px] top-0 w-4 h-4 rounded-full border-4 border-gray-900 ${edu.current ? 'bg-green-500 animate-pulse' : 'bg-blue-500'}`}></div>
                
                <div className="bg-gray-800 p-5 rounded-lg border border-gray-700 hover:border-blue-500 transition-all duration-200">
                  {edu.current && (
                    <span className="inline-block px-2 py-1 bg-green-600/20 border border-green-500/50 rounded text-xs text-green-400 mb-2">
                      Current
                    </span>
                  )}
                  <h4 className="text-lg font-semibold text-white mb-1">{edu.degree}</h4>
                  <div className="text-blue-400 font-medium mb-1">{edu.field}</div>
                  <div className="text-sm text-gray-400 mb-2">{edu.institution}</div>
                  <div className="text-sm text-gray-500">{edu.period}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Experience;
