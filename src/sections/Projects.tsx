import { useState } from 'react';
import Section from '../components/Section';
import { projects } from '../data/portfolioData';

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState<number | null>(null);

  return (
    <Section id="projects" title="Featured Projects">
      <div className="grid md:grid-cols-1 lg:grid-cols-1 gap-8">
        {projects.map((project) => (
          <div
            key={project.id}
            className="bg-gray-800 rounded-lg border border-gray-700 hover:border-blue-500 transition-all duration-300 overflow-hidden group"
          >
            {/* Project Header */}
            <div className="p-6">
              <div className="flex items-start justify-between mb-4">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    {project.featured && (
                      <span className="px-3 py-1 bg-blue-600/20 border border-blue-500/50 rounded-full text-xs text-blue-400">
                        Featured
                      </span>
                    )}
                    <span className="text-xs text-gray-400">{project.category}</span>
                  </div>
                  <h3 className="text-2xl font-bold text-white group-hover:text-blue-400 transition-colors duration-200">
                    {project.title}
                  </h3>
                </div>
                <button
                  onClick={() => setSelectedProject(selectedProject === project.id ? null : project.id)}
                  className="text-blue-400 hover:text-blue-300 transition-colors duration-200"
                  aria-label={selectedProject === project.id ? "Collapse details" : "Expand details"}
                >
                  <svg 
                    className={`w-6 h-6 transform transition-transform duration-200 ${selectedProject === project.id ? 'rotate-180' : ''}`} 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
              </div>

              <p className="text-gray-300 leading-relaxed mb-6">
                {project.description}
              </p>

              {/* Tech Stack Pills */}
              <div className="flex flex-wrap gap-2">
                {project.techStack.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 bg-gray-700 text-gray-300 text-xs rounded-full border border-gray-600"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Expandable Details */}
            {selectedProject === project.id && (
              <div className="px-6 pb-6 animate-slide-up">
                <div className="border-t border-gray-700 pt-6">
                  <h4 className="text-lg font-semibold text-blue-400 mb-4">Key Features</h4>
                  <ul className="space-y-2">
                    {project.keyFeatures.map((feature, index) => (
                      <li key={index} className="flex items-start gap-3 text-gray-300">
                        <svg className="w-5 h-5 text-blue-400 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </Section>
  );
};

export default Projects;
