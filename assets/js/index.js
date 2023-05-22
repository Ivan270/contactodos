let contactForm = document.getElementById('contactForm');
class Contacto {
	constructor(nombre, apellido, telefono, correo, nota) {
		this.nombre = nombre;
		this.apellido = apellido;
		this.telefono = telefono;
		this.correo = correo;
		this.nota = nota;
	}
}
// Instancia del modal de confirmación
const confirmationModal = new bootstrap.Modal('#confirmationModal');

contactForm.addEventListener('submit', (event) => {
	event.preventDefault();
	let nuevoContacto = new Contacto(
		inputNombre.value,
		inputApellido.value,
		inputTelefono.value,
		inputEmail.value,
		inputNota.value
	);
	// Destructuring para nombre completo
	const {
		nombreCompleto = `${nuevoContacto.nombre} ${nuevoContacto.apellido}`,
	} = nuevoContacto;
	const { correo, telefono } = nuevoContacto;
	// Logica del modal
	procesarModal(nombreCompleto, correo, telefono);
	contactForm.reset();
});

const procesarModal = (nombre, correo, telefono) => {
	modalBody.innerHTML = cuerpoModal(nombre, correo, telefono);
	modalLlamar.addEventListener('click', () => {
		llamarTelefono(telefono);
	});
	modalEscribir.addEventListener('click', () => {
		escribirEmail(correo);
	});
	confirmationModal.show();
};
const cuerpoModal = (nombre, email, telefono) => {
	return `Nombre: ${nombre} Email: ${email} Teléfono: ${telefono}`;
};
const llamarTelefono = (tel) => {
	window.open(`tel:${tel}`);
};
const escribirEmail = (email) => {
	window.open(`mailto:${email}`);
};
