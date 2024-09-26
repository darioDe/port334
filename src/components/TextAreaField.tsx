import React, { memo } from 'react';
import InputProps from "../types/Types";


const TextAreaField: React.FC<InputProps> = memo(({ name, label, value, onChange, error }) => (
  <div className="relative mb-6 group">
    <textarea
      id={name}
      name={name}
      value={value}
      onChange={onChange}
      className={`w-full bg-transparent border-b text-white focus:outline-none resize-none peer pt-6 ${error ? 'border-red-500' : 'border-white'}`}
      rows={4}
      placeholder=" "
    />
    <label
      htmlFor={name}
      className={`absolute left-0 text-white transition-all duration-300 
                  peer-focus:-top-1 peer-focus:text-xs peer-focus:opacity-70
                  ${value ? '-top-1 text-xs opacity-70' : 'top-6 text-base opacity-100'}`}
    >
      {label}
    </label>
    {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
  </div>
));

export default TextAreaField;
