
interface IconTecnologiesProps {
    icon: string,
    name: string,
};

const IconTecnologies: React.FC<IconTecnologiesProps> = ({ icon, name }) => {
    

  return (
    <div className="flex items-center gap-x-4 z-10">
        <div className="relative flex flex-col items-center">
            <span className='font-semibold mt-2  text-slate-800 text-sm'>
                {name}
            </span>
            <div className='w-14 h-14 bg-black p-3 rounded-2xl cursor-pointer group transition-transform duration-300 ease-in-out transform hover:scale-110'>
                <img src={icon} alt="" />
            </div >
        </div >
    </div>
  )
}

export default IconTecnologies