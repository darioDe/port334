import bootstrap from '../assets/bootstrap.svg';
import css3 from '../assets/css3.svg';
import html5 from '../assets/html5.svg';
import javascript from '../assets/javascript.svg';
import next from '../assets/next.svg';
import node from '../assets/node.svg';
import react from '../assets/react.svg';
import sass from '../assets/sass.svg';
import tailwind from '../assets/tailwind.svg';
import typescript from '../assets/typescript.svg';

interface Props {}

export const Separator = (props: Props) => {
    const icons = [
        css3, bootstrap, html5, javascript, next, node, react, sass, tailwind, typescript
    ];

    return (
        <div className="flex flex-col items-center justify-center mt-8 w-full">
            {/* Líneas y carrusel */}
            <div className="flex w-full items-center justify-center">
                {/* Línea izquierda */}
                <hr className="w-full md:w-1/4 border-t-2 border-gray-300" />

                {/* Carrusel de íconos */}
                <div className="w-full md:w-1/2 overflow-hidden relative flex items-center justify-center">
                    <div className="carousel flex space-x-4">
                        {/* Primer set de íconos */}
                        {icons.map((icon, index) => (
                            <img key={index} className="w-6 h-6" src={icon} alt={`Icon ${index}`} />
                        ))}

                        {/* Espacio en blanco antes del siguiente set */}
                        <div className="w-16"></div>

                        {/* Segundo set de íconos para el ciclo continuo */}
                        {icons.map((icon, index) => (
                            <img key={index + icons.length} className="w-6 h-6" src={icon} alt={`Icon ${index}`} />
                        ))}
                    </div>
                </div>

                {/* Línea derecha */}
                <hr className="w-full md:w-1/4 border-t-2 border-gray-300" />
            </div>
        </div>
    );
};




