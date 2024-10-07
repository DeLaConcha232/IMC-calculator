
const form = document.querySelector('#myForms');
form.addEventListener('submit', DATA);

// Definir el correo, asunto y cuerpo del mensaje
const email = "diegodiazdelaconcha23@gmail.com";
const subject = "Asunto del correo";
const body = "Hola, Buen dia...";

// Seleccionar el enlace por su ID
const emailLink = document.getElementById("sendEmail");

// Agregar el evento click
emailLink.addEventListener("click", function () {
    // Redirigir usando mailto:
    window.location.href = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
});

function DATA(event) {
    event.preventDefault();
   
    const CardResult = document.querySelector('.CardResult');
    const weight = document.querySelector('#Weight').value;
    const height = document.querySelector('#Height').value;
    const title = document.querySelector('.card-title');
    const description = document.querySelector('.card-text1');
    const recommendations = document.querySelector('.card-text2');

    const CALC = weight / (height / 100) ** 2;

    CardResult.classList.toggle('inactive');

    if (CALC < 18.5){
        title.innerText = "Bajo Peso";
        description.innerText = "Tu peso es inferior al normal, te recomendamos acudir con un especialista para que te ayude a mejorar tu alimentación.";
        recommendations.innerText = "Te recomendamos consumir alimentos ricos en proteínas y carbohidratos.";
    }
    else if(CALC >= 18.5 && CALC <= 24.9){

        title.innerText = "Normal";
        description.innerText = "Tu peso es normal, te recomendamos seguir con una alimentación balanceada y realizar ejercicio.";
        recommendations.innerText = "";
    }
    else if(CALC >= 25 && CALC <= 29.9){

        title.innerText = "Sobrepeso";
        description.innerText = "Tu peso es superior al normal, te recomendamos acudir con un especialista para que te ayude a mejorar tu alimentación.";
        recommendations.innerText = "";
    }
    else if(CALC >= 30 && CALC <= 34.9){

        title.innerText = "Obesidad Grado 1";
        description.innerText = "";
        recommendations.innerText = "";
    }
    else if(CALC >= 35 && CALC <= 39.9){

        title.innerText = "Obesidad Grado 2";
        description.innerText = "";
        recommendations.innerText = "";
    }
    else if(CALC >= 40){

        title.innerText = "Obesidad Grado 3";
        description.innerText = "";
        recommendations.innerText = "";
    }
    else if(isNaN(CALC)){
        throw new Error("Error en el calculo");
    }
    else {
        title.innerText = "Valor no reconocido";
        description.innerText = "El valor calculado no es reconocido. Por favor, verifica los datos ingresados.";
        recommendations.innerText = "";
    }

}


