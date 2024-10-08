import { useState } from 'react';
import copy from '../assets/copy.svg';
import check from '../assets/check.svg'
import { useLang } from '../context/LangContext';

const ContactInfo = () => {
  const [emailCopySuccess, setEmailCopySuccess] = useState('');
  const [phoneCopySuccess, setPhoneCopySuccess] = useState('');

  const { lang } = useLang();

  const infoh4 = lang === 'spanish' ? 'INFORMACIÓN DE CONTACTO' : 'CONTACT INFO';
  const infoEmail = lang === 'spanish' ? 'CORREO' : 'EMAIL';
  const infoPhone = lang === 'spanish' ? 'TELÉFONO' : 'PHONE';
  const location = lang === 'spanish' ? 'UBICACIÓN' : 'LOCATION'

  const emailCopyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text).then(() => {
      setEmailCopySuccess('copy');
      setTimeout(() => setEmailCopySuccess(''), 2000); // Eliminar el mensaje después de 2 segundos
    });
  };

  const phoneCopyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text).then(() => {
      setPhoneCopySuccess('copy');
      setTimeout(() => setPhoneCopySuccess(''), 2000); // Eliminar el mensaje después de 2 segundos
    });
  };

  return (
    <div className="flex flex-col mt-5">

        <div className='flex flex-col w-full mt-12 mb-24'>
            <h4 className='text-center text-2xl font-semibold'> { infoh4 } </h4>

            <div  className='flex flex-col md:flex-row md:justify-around'>
                <div className='mt-8'>
                    <h5 className='font-semibold text-cyan-300'>{ infoEmail }</h5>
                    <div className='flex'>
                        <p>rdduarte1811@gmail.com</p>
                        <button
                            className="ml-2 p-1  transition duration-200 bottom-3 relative"
                            onClick={() => emailCopyToClipboard('rdduarte1811@gmail.com')}
                        >
                            {emailCopySuccess ?
                                <img className='w-7 h-7' src={check} alt="" />
                                :
                                <img className='w-7 h-7' src={copy} alt="" />   
                            }
                        </button>
                    </div>
                </div>

                <div className='mt-8'>
                    <h5 className='font-semibold text-cyan-300'>{infoPhone}</h5>
                    <div className='flex'>
                        <p>+541159117295</p>
                        <button
                            className="ml-2 p-1  transition duration-200 bottom-3 relative"
                            onClick={() => phoneCopyToClipboard('+541159117295')}
                        >
                            {phoneCopySuccess ?
                                <img className='w-7 h-7' src={check} alt="" />
                                :
                                <img className='w-7 h-7' src={copy} alt="" />   
                            }
                        </button>
                    </div>
                </div>
                
                <div className='mt-8'>
                    <h5 className='font-semibold text-cyan-300'>{location}</h5>
                    <p> General San Martín, Buenos Aires</p>
                </div>
            </div>
        </div>

    </div>
    

  );
};

export default ContactInfo;
