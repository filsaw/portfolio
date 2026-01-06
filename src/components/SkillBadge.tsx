interface SkillBadgeProps {
  skill: string;
}

const SkillBadge = ({ skill }: SkillBadgeProps) => {
  return (
    <span className="px-4 py-2 bg-gray-800 hover:bg-gray-700 rounded-lg text-sm text-gray-200 transition-colors duration-200 border border-gray-700 hover:border-blue-500">
      {skill}
    </span>
  );
};

export default SkillBadge;
