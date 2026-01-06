import { ReactNode } from 'react';

interface SectionProps {
  id: string;
  title: string;
  children: ReactNode;
  className?: string;
}

const Section = ({ id, title, children, className = '' }: SectionProps) => {
  return (
    <section id={id} className={`py-20 px-4 ${className}`}>
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-cyan-400">{title}</span>
        </h2>
        {children}
      </div>
    </section>
  );
};

export default Section;
