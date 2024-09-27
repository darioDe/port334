import React, { useState, useCallback, useRef } from 'react';
import InputField from '../components/InputField'
import TextAreaField from '../components/TextAreaField';

interface FormState {
  name: string;
  email: string;
  subject: string;
  comment: string;
}

export default function Contact() {
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

    if (!formRef.current.name.trim()) {
      newErrors.name = 'El nombre es obligatorio.';
      isValid = false;
    }
    
    if (!formRef.current.email.trim()) {
      newErrors.email = 'El correo es obligatorio.';
      isValid = false;
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formRef.current.email)) {
      newErrors.email = 'El correo no es válido.';
      isValid = false;
    }
    
    if (!formRef.current.subject.trim()) {
      newErrors.subject = 'El asunto es obligatorio.';
      isValid = false;
    }
    
    if (!formRef.current.comment.trim()) {
      newErrors.comment = 'El comentario es obligatorio.';
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

  return (
    <div id='contact' className="min-h-screen text-white p-6 flex flex-col justify-center mt-32">
      <h3 className="text-5xl mb-8 md:mb-20 text-center">CONTACTO</h3>
      <form onSubmit={handleSubmit} className="max-w-3xl mx-auto w-full">
        <InputField
          name="name"
          label="NOMBRE COMPLETO"
          value={formRef.current.name}
          onChange={handleChange}
          error={errors.name}
        />
        <InputField
          name="email"
          label="CORREO"
          type="email"
          value={formRef.current.email}
          onChange={handleChange}
          error={errors.email}
        />
        <InputField
          name="subject"
          label="ASUNTO"
          value={formRef.current.subject}
          onChange={handleChange}
          error={errors.subject}
        />
        <TextAreaField
          name="comment"
          label="COMENTARIO"
          value={formRef.current.comment}
          onChange={handleChange}
          error={errors.comment}
        />
        <div className="flex justify-center mt-6">
          <button
            type="submit"
            className="w-full md:w-1/2 bg-emerald-500 hover:bg-emerald-600 text-white py-2 rounded-full font-bold mt-6 
            transition-colors text-lg"
          >
            ENVIAR
          </button>
        </div>
      </form>

      <div>
        <h4> Detalles de contacto</h4>

      </div>
    </div>
  );
}
