import React, { useState, useCallback, useRef, useEffect } from 'react';
import InputField from '../components/InputField';
import TextAreaField from '../components/TextAreaField';
import ContactInfo from '../components/ContactInfo';
import { useLang } from '../context/LangContext';
import emailjs from 'emailjs-com'

interface FormState {
  name: string;
  email: string;
  subject: string;
  comment: string;
}

export default function Contact() {
  const { lang } = useLang(); // Access the current language from context

  // Use a ref to store form values
  const formRef = useRef<FormState>({
    name: '',
    email: '',
    subject: '',
    comment: ''
  });

  // State to manage validation errors for the form fields
  const [errors, setErrors] = useState<FormState>({
    name: '',
    email: '',
    subject: '',
    comment: ''
  });

  // States for animations and form submission feedback
  const [isTitleVisible, setIsTitleVisible] = useState<boolean>(false);
  const [isFormVisible, setIsFormVisible] = useState<boolean>(false);
  const [isButtonVisible, setIsButtonVisible] = useState<boolean>(false);
  const [isContactInfoVisible, setIsContactInfoVisible] = useState<boolean>(false);
  const [successMessage, setSuccessMessage] = useState<boolean>(false);

  // Refs for animating specific elements when they are in view
  const titleRef = useRef<HTMLHeadingElement>(null);
  const formWrapperRef = useRef<HTMLFormElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const contactInfoRef = useRef<HTMLDivElement>(null);

  // State to control the loading indicator during form submission
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [, forceUpdate] = useState({}); // Trigger a re-render

  // Function to handle input changes and update formRef
  const handleChange = useCallback((e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    formRef.current[name as keyof FormState] = value;
    forceUpdate({}); // Forces the component to re-render
  }, []);

  // Form validation logic based on the current language
  const validateForm = () => {
    const newErrors: FormState = { name: '', email: '', subject: '', comment: '' };
    let isValid = true;

    // Error messages in different languages
    const errorName = lang === 'spanish' ? 'El nombre es obligatorio.' : 'Name is required.';
    const errorEmail1 = lang === 'spanish' ? 'El correo es obligatorio.' : 'Mail is required.';
    const errorEmail2 = lang === 'spanish' ? 'El correo no es válido.' : 'The mail is not valid';
    const subjectError = lang === 'spanish' ? 'El asunto es obligatorio.' : 'Subject is required';
    const commentError = lang === 'spanish' ? 'El comentario es obligatorio' : 'Comment is required';

    // Validation checks
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

    setErrors(newErrors); // Update error state
    return isValid;
  };

  // Handle form submission using EmailJS API
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (validateForm()) {
        setIsSubmitting(true); // Show loader
        setSuccessMessage(false);

        try {
            await emailjs.send(
                'service_flei6je',  // Service ID from EmailJS
                'contact-form',  // Template ID from EmailJS
                {
                  name: formRef.current.name,
                  email: formRef.current.email,
                  subject: formRef.current.subject,
                  comment: formRef.current.comment,
                },     // Datos del formulario
                '_J5h-PKfB08qNMPz6'       // User ID from EmailJS
            );

            console.log('Email sent successfully');
            setSuccessMessage(true); // Show success message
            // Reset form after submission
            formRef.current = { name: '', email: '', subject: '', comment: '' };
            setErrors({ name: '', email: '', subject: '', comment: '' });
        } catch (error) {
            console.error('Error sending email:', error);
        } finally {
            setIsSubmitting(false);
            forceUpdate({}); // Force re-render

            // Hide success message after 3 seconds
            setTimeout(() => setSuccessMessage(false), 3000);

        }
    }
};


  // Intersection observer for triggering animations when elements are in view
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const target = entry.target as HTMLElement;

            if (target === titleRef.current) {
              setIsTitleVisible(true);
            } else if (target === formWrapperRef.current) {
              setIsFormVisible(true);
            } else if (target === buttonRef.current) {
              setIsButtonVisible(true);
            } else if (target === contactInfoRef.current) {
              setIsContactInfoVisible(true);
            }

            observer.unobserve(entry.target); // Stop observing after animation triggers
          }
        });
      },
      { threshold: 0.7 } // Trigger when 70% of the element is visible
    );

    // Start observing elements
    if (titleRef.current) observer.observe(titleRef.current);
    if (formWrapperRef.current) observer.observe(formWrapperRef.current);
    if (buttonRef.current) observer.observe(buttonRef.current);
    if (contactInfoRef.current) observer.observe(contactInfoRef.current);

    return () => {
      // Clean up observers
      if (titleRef.current) observer.unobserve(titleRef.current);
      if (formWrapperRef.current) observer.unobserve(formWrapperRef.current);
      if (buttonRef.current) observer.unobserve(buttonRef.current);
      if (contactInfoRef.current) observer.unobserve(contactInfoRef.current);
    };
  }, []);

  // Text labels depending on the current language
  const firstH3 = lang === 'spanish' ? 'CONTACTO' : 'CONTACT';
  const nameLabel = lang === 'spanish' ? 'NOMBRE COMPLETO' : 'NAME & LASTNAME';
  const emailLabel = lang === 'spanish' ? 'CORREO' : 'EMAIL';
  const subjectLabel = lang === 'spanish' ? 'ASUNTO' : 'SUBJECT';
  const messageLabel = lang === 'spanish' ? 'MENSAJE' : 'MESSAGE';
  const sendForm = lang === 'spanish' ? 'ENVIAR' : 'SEND';
  const successMessageText = lang === 'spanish' ? '¡El mensaje fue enviado con éxito!' : 'Message sent successfully!';

  return (
    <div id='contact' className="min-h-screen text-white p-6 flex flex-col justify-center mt-32">
      <h3
        ref={titleRef}
        className={`text-5xl mb-8 md:mb-20 text-center transition-opacity duration-1000 ${isTitleVisible ? 'opacity-100' : 'opacity-0'}`}
      >
        {firstH3}
      </h3>

      <form
        ref={formWrapperRef}
        onSubmit={handleSubmit}
        className={`max-w-3xl mx-auto w-full transition-opacity duration-1000 ${isFormVisible ? 'opacity-100' : 'opacity-0'}`}
      >
        <InputField
          name="name"
          label={nameLabel}
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

        <div className="flex justify-center mt-10">
          {isSubmitting ? (
            <div className="flex justify-center items-center w-full h-full">
              <div className="loader animate-spin mt-10"></div>
            </div>
          ) : successMessage ? (
            <p className="text-center font-semibold text-cyan-300 mt-5">{successMessageText}</p>
          ) : (
            <button
              ref={buttonRef}
              type="submit"
              className={`w-full md:w-1/2 shadow-md shadow-cyan-300 hover:shadow-lg hover:shadow-cyan-500 text-white py-2 rounded-full font-bold mt-6 text-lg cursor-pointer group transition-transform duration-300 ease-in-out transform hover:scale-110 ${isButtonVisible ? 'opacity-100' : 'opacity-0'}`}
            >
              {sendForm}
            </button>
          )}
        </div>

      </form>

      <div
        ref={contactInfoRef}
        className={`mt-12 transition-opacity duration-1000 ${isContactInfoVisible ? 'opacity-100' : 'opacity-0'}`}
      >
        <ContactInfo />
      </div>
   </div>
  )
}


