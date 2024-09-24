import React, { useState, useCallback, useRef, memo } from 'react'

interface FormState {
  name: string;
  email: string;
  subject: string;
  comment: string;
}

const InputField = memo(({ name, label, type = 'text', value, onChange }: {
  name: string;
  label: string;
  type?: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}) => (
  <div className="relative mb-6 group">
    <input
      type={type}
      id={name}
      name={name}
      value={value}
      onChange={onChange}
      className="w-full bg-transparent border-b border-white text-white focus:outline-none peer pt-6"
      placeholder=" "
    />
    <label
      htmlFor={name}
      className={`absolute left-0 text-white transition-all duration-300 
        ${value ? '-top-1 text-xs opacity-70' : 'top-6 text-base opacity-100'}
        peer-focus:-top-1 peer-focus:text-xs peer-focus:opacity-70`}
    >
      {label}
    </label>
  </div>
))

const TextAreaField = memo(({ name, label, value, onChange }: {
  name: string;
  label: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
}) => (
  <div className="relative mb-6 group">
    <textarea
      id={name}
      name={name}
      value={value}
      onChange={onChange}
      className="w-full bg-transparent border-b border-white text-white focus:outline-none resize-none peer pt-6"
      rows={4}
      placeholder=" "
    />
    <label
      htmlFor={name}
      className={`absolute left-0 text-white transition-all duration-300 
                  peer-focus:-top-1 peer-focus:text-xs peer-focus:opacity-70
                  peer-placeholder-shown:top-6 peer-placeholder-shown:text-base peer-placeholder-shown:opacity-100
                  ${value ? '-top-1 text-xs opacity-70' : 'top-6 text-base opacity-100'} peer-focus:-top-1 peer-focus:text-xs peer-focus:opacity-70`}
    >
      {label}
    </label>
  </div>
))

export default function Contact() {
  const formRef = useRef<FormState>({
    name: '',
    email: '',
    subject: '',
    comment: ''
  });

  const [, forceUpdate] = useState({});

  const handleChange = useCallback((e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    formRef.current[name as keyof FormState] = value;
    forceUpdate({});
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Form submitted:', formRef.current)
    // Here you would typically send the form data to your server
  }

  return (
    <div className="min-h-screen text-white p-6 flex flex-col justify-center">
      <h1 className="text-4xl font-bold mb-8 text-center">CONTACTO</h1>
      <form onSubmit={handleSubmit} className="max-w-md mx-auto w-full">
        <InputField name="name" label="NOMBRE COMPLETO" value={formRef.current.name} onChange={handleChange} />
        <InputField name="email" label="CORREO" type="email" value={formRef.current.email} onChange={handleChange} />
        <InputField name="subject" label="ASUNTO" value={formRef.current.subject} onChange={handleChange} />
        <TextAreaField name="comment" label="COMENTARIO" value={formRef.current.comment} onChange={handleChange} />
        <button
          type="submit"
          className="w-full bg-white text-black py-3 rounded-full font-bold mt-6 hover:bg-gray-200 transition-colors"
        >
          ENVIAR
        </button>
      </form>
      <div className="mt-12">
        <h2 className="text-xl font-bold mb-4">DETALLES DE CONTACTO</h2>
        <p className="flex items-center">
          CORREO: 
          <span className="ml-2">rdduarte1811@gmail.com</span>
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2 cursor-pointer" viewBox="0 0 20 20" fill="currentColor">
            <path d="M8 3a1 1 0 011-1h2a1 1 0 110 2H9a1 1 0 01-1-1z" />
            <path d="M6 3a2 2 0 00-2 2v11a2 2 0 002 2h8a2 2 0 002-2V5a2 2 0 00-2-2 3 3 0 01-3 3H9a3 3 0 01-3-3z" />
          </svg>
        </p>
      </div>
    </div>
  )
}