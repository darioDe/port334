
interface IconTecnologiesProps {
    icon: string,
    name: string,
};

const IconTecnologies: React.FC<IconTecnologiesProps> = ({ icon, name }) => {
    

  return (
    <div className="flex items-center gap-x-4 z-10">
        <div className="relative flex flex-col items-center">
            <span className='font-semibold mt-2  text-emerald-500 text-lg'>
                {name}
            </span>
            <div className='w-14 h-14 shadow-md shadow-emerald-300 p-2 rounded-md cursor-pointer group transition-transform duration-300 ease-in-out transform hover:scale-110 hover:shadow-emerald-500 hover:shadow-lg'>
                <img src={icon} alt="" />
            </div >
        </div >
    </div>
  )
}

export default IconTecnologies