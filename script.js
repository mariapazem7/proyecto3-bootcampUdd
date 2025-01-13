let suscriptores = [];

const emailImput = document.getElementById('emailImput');
const boton = document.getElementById('botonSuscribir');
const mensaje = document.getElementById('mensaje');


boton.addEventListener('click', function() {
    const email = emailInput.value.trim(); 

    if (email === "") {
        mensaje.textContent = "Por favor, ingresa un correo electrónico.";
        mensaje.style.color = "red";
        return;
    }

    const validarEmail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!validarEmail.test(email)) {
        mensaje.textContent = "Por favor, ingresa un correo electrónico válido";
        mensaje.style.color = "red";
        return;
    }

    suscriptores.push(email);

    mensaje.textContent = `¡Gracias por suscribirte, ${email}!`;
    mensaje.style.color = "green";

    emailInput.value = "";
    
    console.log(suscriptores);
});