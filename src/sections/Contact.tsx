import React, { useState, useCallback, useRef } from 'react';
import InputField from '../components/InputField'
import TextAreaField from '../components/TextAreaField';
import ContactInfo from '../components/ContactInfo';
import { useLang } from '../context/LangContext';

interface FormState {
  name: string;
  email: string;
  subject: string;
  comment: string;
}

export default function Contact() {
  const { lang } = useLang();

  const formRef = useRef<FormState>({
    name: '',
    email: '',
    subject: '',
    comment: ''
  });

  const [errors, setErrors] = useState<FormState>({
    name: '',
    email: '',
    subject: '',
    comment: ''
  });

  const [, forceUpdate] = useState({});

  const validateForm = () => {
    const newErrors: FormState = { name: '', email: '', subject: '', comment: '' };
    let isValid = true;

    const errorName = lang === 'spanish' ? 'El nombre es obligatorio.' : 'Name is required.';
    const errorEmail1 = lang === 'spanish' ? 'El correo es obligatorio.' : 'Mail is required.';
    const errorEmail2 = lang === 'spanish' ? 'El correo no es válido.' : 'The mail is not valid';
    const subjectError = lang === 'spanish' ? 'El asunto es obligatorio.' : 'Subject is required';
    const commentError = lang === 'spanish' ? 'El comentario es obligatorio' : 'Comment are required'


    if (!formRef.current.name.trim()) {
      newErrors.name = errorName;
      isValid = false;
    }
    
    if (!formRef.current.email.trim()) {
      newErrors.email = errorEmail1;
      isValid = false;
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formRef.current.email)) {
      newErrors.email = errorEmail2;
      isValid = false;
    }
    
    if (!formRef.current.subject.trim()) {
      newErrors.subject = subjectError;
      isValid = false;
    }
    
    if (!formRef.current.comment.trim()) {
      newErrors.comment = commentError;
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  }

  const handleChange = useCallback((e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    formRef.current[name as keyof FormState] = value;
    forceUpdate({});
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (validateForm()) {
      console.log('Form submitted:', formRef.current);
      // Aquí enviarías los datos del formulario al servidor
    }
  }

  const firstH3 = lang === 'spanish' ? 'CONTACTO' : 'CONTACT';
  const nameLabel = lang === 'spanish' ? 'NOMBRE COMPLETO' : 'NAME & LASTNAME';
  const emailLabel = lang === 'spanish' ? 'CORREO' : 'EMAIL';
  const subjectLabel = lang === 'spanish' ? 'ASUNTO' : 'SUBJECT';
  const messageLabel = lang === 'spanish' ? 'MENSAJE' : 'MESSAGE';
  const sendForm = lang === 'spanish' ? 'ENVIAR' : 'SEND'

  return (
    <div id='contact' className="min-h-screen text-white p-6 flex flex-col justify-center mt-32">
      <h3 className="text-5xl mb-8 md:mb-20 text-center">{firstH3}</h3>
      <form onSubmit={handleSubmit} className="max-w-3xl mx-auto w-full">
        <InputField
          name="name"
          label= {nameLabel}
          value={formRef.current.name}
          onChange={handleChange}
          error={errors.name}
        />
        <InputField
          name="email"
          label={emailLabel}
          type="email"
          value={formRef.current.email}
          onChange={handleChange}
          error={errors.email}
        />
        <InputField
          name="subject"
          label={subjectLabel}
          value={formRef.current.subject}
          onChange={handleChange}
          error={errors.subject}
        />
        <TextAreaField
          name="comment"
          label={messageLabel}
          value={formRef.current.comment}
          onChange={handleChange}
          error={errors.comment}
        />
        <div className="flex justify-center mt-6">
          <button
            type="submit"
            className="w-full md:w-1/2 shadow-md shadow-cyan-300 hover:shadow-lg hover:shadow-cyan-500 text-white py-2 rounded-full font-bold mt-6 text-lg cursor-pointer group transition-transform duration-300 ease-in-out transform hover:scale-110"
          >
            {
              sendForm
            }
          </button>
        </div>
      </form>

      <ContactInfo />
      
    </div>
  );
}
