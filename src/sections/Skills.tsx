import Section from '../components/Section';
import SkillBadge from '../components/SkillBadge';
import { skills } from '../data/portfolioData';

const Skills = () => {
  return (
    <Section id="skills" title="Technical Skills" className="bg-gray-800/50">
      <div className="space-y-8">
        {Object.entries(skills).map(([category, skillList]) => (
          <div key={category} className="animate-slide-up">
            <h3 className="text-xl font-semibold mb-4 text-blue-400">
              {category}
            </h3>
            <div className="flex flex-wrap gap-3">
              {skillList.map((skill) => (
                <SkillBadge key={skill} skill={skill} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
};

export default Skills;
