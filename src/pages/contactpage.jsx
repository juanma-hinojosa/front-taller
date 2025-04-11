function ContactPage() {
  return (
    <>
      <h1>Contacto</h1>
      <form className="grid gap-4 max-w-md">
        <input type="text" placeholder="Nombre" required />
        <input type="email" placeholder="Email" required />
        <textarea placeholder="Consulta" rows={4}></textarea>
        <button type="submit">Enviar</button>
      </form>

      <div className="mt-8">
        <h2>Datos de contacto</h2>
        <p>📍 Dirección del taller</p>
        <p>📞 Teléfono / WhatsApp</p>
        <p>🕐 Lunes a viernes, 9 a 18 hs</p>
        {/* Incrustar Google Maps más adelante */}
      </div>

      <h1>Solicitar Turno</h1>
      <p>Completá el formulario y nos pondremos en contacto para confirmar.</p>
      <form className="grid gap-4 max-w-md">
        <input type="text" placeholder="Nombre y apellido" required />
        <input type="text" placeholder="Marca y modelo del auto" />
        <input type="date" required />
        <textarea placeholder="Detalle del trabajo deseado" rows={4}></textarea>
        <button type="submit">Reservar turno</button>
      </form>
    </>
  );
}

export default ContactPage;
