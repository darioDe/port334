import React from 'react'

interface ToggleProps {
    label: string;
    context: { 
        value: string;
        toggle: () => void;
    }
    icon: string;
};

export const Toggle: React.FC<ToggleProps> = ({ label, context, icon}) => {
    const { value, toggle } = context;

    return (
        <button
            onClick={toggle}
            className={`w-10 h-10 flex items-center justify-center rounded-full cursor-pointer ${
                value === label ? 'bg-gray-300' : 'bg-gray-700'
              }`}        
        >
            <img 
                src={icon}
                alt={`${label} icon`}
                className='w-7 h-7'
            />
            
        </button>
    )
}
