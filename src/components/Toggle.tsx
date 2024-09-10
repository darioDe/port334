interface ToggleProps {
    label: string;
    context: { 
        value: string;
        toggle: () => void;
    }
    icon: string;
};

export const Toggle: React.FC<ToggleProps> = ({ label, context, icon}) => {
    const { toggle } = context;

    return (
        <button
            onClick={toggle}
            className='w-8 h-8 flex items-center justify-center rounded-full cursor-pointer group transition-transform duration-300 ease-in-out transform hover:scale-110 hover:border-2 hover:border-green-500'      
        >
            <img 
                src={icon}
                alt={`${label} icon`}
                className='w-5 h-5'
            />
        </button>
    )
}
