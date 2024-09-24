import React, { useState } from 'react'

interface FormState {
  name: string;
  email: string;
  subject: string;
  comment: string;
}

export default function Contact() {
  const [formState, setFormState] = useState<FormState>({
    name: '',
    email: '',
    subject: '',
    comment: ''
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormState(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Form submitted:', formState)
    // Here you would typically send the form data to your server
  }

  const InputField: React.FC<{ name: keyof FormState; label: string; type?: string }> = ({ name, label, type = 'text' }) => (
    <div className="relative mb-6 group">
      <input
        type={type}
        id={name}
        name={name}
        value={formState[name]}
        onChange={handleChange}
        className="w-full bg-transparent border-b border-white text-white focus:outline-none peer pt-6"
        placeholder=" "
      />
      <label
        htmlFor={name}
        className={`absolute left-0 text-white transition-all duration-300 
          ${formState[name] ? '-top-1 text-xs opacity-70' : 'top-6 text-base opacity-100'}
          peer-focus:-top-1 peer-focus:text-xs peer-focus:opacity-70`}
      >
        {label}
      </label>
    </div>
  )

  return (
    <div className="min-h-screen text-white p-6 flex flex-col justify-center">
      <h1 className="text-4xl font-bold mb-8 text-center">CONTACTO</h1>
      <form onSubmit={handleSubmit} className="max-w-md mx-auto w-full">
        <InputField name="name" label="NOMBRE COMPLETO" />
        <InputField name="email" label="CORREO" type="email" />
        <InputField name="subject" label="ASUNTO" />
        <div className="relative mb-6 group">
          <textarea
            id="comment"
            name="comment"
            value={formState.comment}
            onChange={handleChange}
            className="w-full bg-transparent border-b border-white text-white focus:outline-none resize-none peer pt-6"
            rows={4}
            placeholder=" "
          />
          <label
            htmlFor="comment"
            className={`absolute left-0 top-6 text-white transition-all duration-300 
                        peer-focus:-top-1 peer-focus:text-xs peer-focus:opacity-70
                        peer-placeholder-shown:top-6 peer-placeholder-shown:text-base peer-placeholder-shown:opacity-100
                        ${formState.comment ? '-top-1 text-xs opacity-70' : 'top-6'}`}
          >
            COMENTARIO
          </label>
        </div>
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