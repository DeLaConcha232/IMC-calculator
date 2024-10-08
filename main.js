
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
    const img = document.querySelector('.img-fluid');

    const CALC = weight / (height / 100) ** 2;

    CardResult.classList.toggle('inactive');

    if (CALC < 18.5){
        title.innerText = "Bajo Peso";
        description.innerText = "Peso insuficiente para la altura, posible riesgo de desnutrición";
        recommendations.innerText = "Aumentar calorías con alimentos nutritivos y hacer ejercicios de fuerza.";
        img.src = "https://media.istockphoto.com"
    }
    else if(CALC >= 18.5 && CALC <= 24.9){

        title.innerText = "Normal";
        description.innerText = "Peso adecuado para la altura, asociado con buena salud general.";
        recommendations.innerText = "Mantener una dieta balanceada y hacer ejercicio regularmente.";
    }
    else if(CALC >= 25 && CALC <= 29.9){

        title.innerText = "Sobrepeso";
        description.innerText = "Exceso de peso que aumenta el riesgo de enfermedades";
        recommendations.innerText = "Reducir alimentos ultraprocesados, mejorar la dieta y aumentar la actividad física";
    }
    else if(CALC >= 30 && CALC <= 34.9){

        title.innerText = "Obesidad Grado 1";
        description.innerText = "Aumento significativo del riesgo de enfermedades crónicas";
        recommendations.innerText = "Adoptar una dieta baja en calorías, aumentar el ejercicio y consultar a un especialistas";
    }
    else if(CALC >= 35 && CALC <= 39.9){

        title.innerText = "Obesidad Grado 2";
        description.innerText = "Obesidad severa con alto riesgo de problemas de salud graves.";
        recommendations.innerText = "Seguir un plan supervisado por especialistas en nutrición y ejercicio.";
    }
    else if(CALC >= 40){

        title.innerText = "Obesidad Grado 3";
        description.innerText = "Obesidad mórbida con riesgo extremo de complicaciones de salud.";
        recommendations.innerText = "Buscar tratamiento médico especializado, considerar opciones como cirugía bariátrica y apoyo psicológico";
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


