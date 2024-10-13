import { ChangeEvent, FormEvent, useState, FocusEvent } from 'react';

function Contact() {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [errorMessage, setErrorMessage] = useState<{ [key: string]: string }>({});

  const { name, email, message } = formState;

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    if (e.target.name === 'email') {
      const isValid = /^\S+@\S+\.\S+$/.test(e.target.value);
      if (!isValid) {
        setErrorMessage({
          ...errorMessage,
          email: 'Please enter a valid email address.',
        });
      } else {
        setErrorMessage({ ...errorMessage, email: '' });
      }
    } else {
      if (!e.target.value.length) {
        setErrorMessage({
          ...errorMessage,
          [e.target.name]: `${e.target.name} is required.`,
        });
      } else {
        setErrorMessage({ ...errorMessage, [e.target.name]: '' });
      }
    }
    setFormState({ ...formState, [e.target.name]: e.target.value });
  };

  const handleBlur = (e: FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    if (!e.target.value.length) {
      setErrorMessage({
        ...errorMessage,
        [e.target.name]: `${e.target.name} is required.`,
      });
    } else {
      setErrorMessage({ ...errorMessage, [e.target.name]: '' });
    }
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Since there's no backend, we can display a message or log the form data
    console.log('Form submitted:', formState);
  };

  return (
    <section>
      <h2>Contact</h2>
      <form id="contact-form" onSubmit={handleSubmit} noValidate>
        <div>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            name="name"
            value={name}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          {errorMessage.name && (
            <p className="error-text">{errorMessage.name}</p>
          )}
        </div>
        <div>
          <label htmlFor="email">Email address:</label>
          <input
            type="email"
            name="email"
            value={email}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          {errorMessage.email && (
            <p className="error-text">{errorMessage.email}</p>
          )}
        </div>
        <div>
          <label htmlFor="message">Message:</label>
          <textarea
            name="message"
            rows={5}
            value={message}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          {errorMessage.message && (
            <p className="error-text">{errorMessage.message}</p>
          )}
        </div>
        <button type="submit">Submit</button>
      </form>
    </section>
  );
}

export default Contact;