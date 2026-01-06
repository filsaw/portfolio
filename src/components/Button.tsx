import { ReactNode } from 'react';

interface ButtonProps {
  children: ReactNode;
  href?: string;
  onClick?: () => void;
  variant?: 'primary' | 'secondary';
  className?: string;
}

const Button = ({ 
  children, 
  href, 
  onClick, 
  variant = 'primary',
  className = '' 
}: ButtonProps) => {
  const baseClasses = "px-6 py-3 rounded-lg font-medium transition-all duration-200 inline-block";
  const variantClasses = variant === 'primary' 
    ? "bg-blue-600 hover:bg-blue-700 text-white" 
    : "bg-gray-800 hover:bg-gray-700 text-gray-200 border border-gray-700";

  const combinedClasses = `${baseClasses} ${variantClasses} ${className}`;

  if (href) {
    return (
      <a href={href} className={combinedClasses} target="_blank" rel="noopener noreferrer">
        {children}
      </a>
    );
  }

  return (
    <button onClick={onClick} className={combinedClasses}>
      {children}
    </button>
  );
};

export default Button;
