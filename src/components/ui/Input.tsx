import type { InputHTMLAttributes } from 'react'

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string
  error?: string
}

export const Input = ({ label, error, className = '', ...props }: InputProps) => {
  return (
    <div className="field-group">
      {label && <label>{label}</label>}
      <input className={`input ${error ? 'input-error' : ''} ${className}`.trim()} {...props} />
      {error && <span className="field-error">{error}</span>}
    </div>
  )
}
