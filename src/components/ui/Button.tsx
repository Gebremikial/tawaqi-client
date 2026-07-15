import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'default' | 'icon-sm';
}

export const Button: React.FC<ButtonProps> = ({ 
  children, 
  variant = 'primary', 
  size = 'default',
  className = '', 
  ...props 
}) => {
  const baseStyles = 'btn';
  const variants = {
    primary: 'btn-primary',
    secondary: 'btn-secondary',
    outline: 'btn-outline',
    ghost: 'btn-ghost',
  };
  const sizes = {
    default: '',
    'icon-sm': 'btn-icon-sm',
  };

  return (
    <button className={`${baseStyles} ${variants[variant]} ${sizes[size] ?? ''} ${className}`.trim()} {...props}>
      {children}
    </button>
  );
};