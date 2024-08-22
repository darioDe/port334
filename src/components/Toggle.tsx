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
            className='w-8 h-8 flex items-center justify-center rounded-full cursor-pointer bg-blue-500 group transition-transform duration-300 ease-in-out transform hover:scale-110 hover:bg-blue-700'      
        >
            <img 
                src={icon}
                alt={`${label} icon`}
                className='w-5 h-5'
            />
        </button>
    )
}
