import { useState } from "react";

const ContactForm = () => {
  const [values, setValues] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState({ type: null, message: "" });
  const [submitting, setSubmitting] = useState(false);

  const handleChange = (e) => {
    setValues((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    setStatus({ type: null, message: "" });

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });

      const data = await res.json();

      if (res.ok) {
        setValues({ name: "", email: "", message: "" });
        setStatus({
          type: "success",
          message: "Obrigado pela mensagem! Logo, logo entro em contato. =)",
        });
      } else {
        setStatus({
          type: "error",
          message: data.error || "Oops! Houve um problema ao enviar seu formulário.",
        });
      }
    } catch {
      setStatus({
        type: "error",
        message: "Oops! Houve um problema ao enviar seu formulário.",
      });
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="content contacts">
      {/* title */}
      <div className="title">Formulário de Contato</div>
      {/* content */}
      <div className="row">
        <div className="col col-d-12 col-t-12 col-m-12 border-line-v">
          <div className="contact_form">
            {status.type === "success" ? (
              <div className="alert-success" style={{ display: "block" }}>
                {status.message}
              </div>
            ) : (
              <form onSubmit={handleSubmit} id="contactForm">
                {status.type === "error" && (
                  <div className="alert-error" style={{ marginBottom: "1rem", color: "red" }}>
                    {status.message}
                  </div>
                )}
                <div className="row">
                  <div className="col col-d-6 col-t-6 col-m-12">
                    <div className="group-val">
                      <input
                        type="text"
                        placeholder="Nome Completo"
                        name="name"
                        required
                        onChange={handleChange}
                        value={values.name}
                      />
                    </div>
                  </div>
                  <div className="col col-d-6 col-t-6 col-m-12">
                    <div className="group-val">
                      <input
                        type="email"
                        placeholder="Seu E-mail"
                        name="email"
                        required
                        onChange={handleChange}
                        value={values.email}
                      />
                    </div>
                  </div>
                  <div className="col col-d-12 col-t-12 col-m-12">
                    <div className="group-val">
                      <textarea
                        placeholder="Sua Mensagem"
                        name="message"
                        required
                        onChange={handleChange}
                        value={values.message}
                      />
                    </div>
                  </div>
                </div>
                <div className="align-left">
                  <button type="submit" className="button" disabled={submitting}>
                    <span className="text">
                      {submitting ? "Enviando..." : "Enviar Mensagem"}
                    </span>
                    <span className="arrow" />
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
        <div className="clear" />
      </div>
    </div>
  );
};
export default ContactForm;
