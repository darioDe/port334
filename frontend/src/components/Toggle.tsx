interface ToggleProps {
    // label: string;
    context: { 
        value: string;
        toggle: () => void;
    }
    icon: string;
};

export const Toggle: React.FC<ToggleProps> = ({  context, icon}) => {
    const { toggle } = context;

    return (
        <button
            onClick={toggle}
            className='w-15 h-8 flex items-center justify-center rounded-full cursor-pointer group transition-transform duration-300 ease-in-out transform hover:scale-125 m-3'     
        >
            <p className="text-emerald-600 font-bold">
                {icon}
            </p>
        </button>
    )
}
