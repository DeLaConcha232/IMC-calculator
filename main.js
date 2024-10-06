
const form = document.querySelector('#myForms');
form.addEventListener('submit', DATA);

// Definir el correo, asunto y cuerpo del mensaje
const email = "diegodiazdelaconcha23@gmail.com";
const subject = "Asunto del correo";
const body = "Hola, Buen dia...";

// Seleccionar el enlace por su ID
const emailLink = document.getElementById("sendEmail");

// Agregar el evento click
emailLink.addEventListener("click", function() {
    // Redirigir usando mailto:
    window.location.href = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
});

function DATA(event) {
    event.preventDefault();
    

    const weight = document.querySelector('#Weight').value;
    const height = document.querySelector('#Height').value;
    const age = document.querySelector('#Age').value;
    const gender = document.querySelector('#Gender').value;
    const activity = document.querySelector('#Activity').value;
    
    const defi = document.getElementById('deficit');
    const surplus = document.getElementById('surplus');
    const maintain = document.getElementById('maintain');

    const proteinD = document.getElementById('proteinD');
    const proteinS = document.getElementById('proteinS');
    const proteinM = document.getElementById('proteinM');

    const fatD = document.getElementById('fatD');
    const fatS = document.getElementById('fatS');
    const fatM = document.getElementById('fatM');

    const carbsD = document.getElementById('carbsD');
    const carbsS = document.getElementById('carbsS');
    const carbsM = document.getElementById('carbsM');
    
    if (gender == 'Man') {
        const hombre = TMBH(weight,height,age);
        if(activity == 1.2){
            const sedentary = hombre * 1.2;
            defi.innerText = Math.round(sedentary) - 300;
            surplus.innerText = Math.round(sedentary) + 300;
            maintain.innerText = Math.round(sedentary);
            proteinD.innerText = Math.round(weight * 1.8);
            proteinS.innerText = Math.round(weight * 2.0);
            proteinM.innerText = Math.round(weight * 1.8);
            fatD.innerText = Math.round(sedentary * 0.2/9);
            fatS.innerText = Math.round(sedentary * 0.35/9);
            fatM.innerText = Math.round(sedentary * 0.3/9);
            carbsD.innerText = Math.round(sedentary * 0.4/4);
            carbsS.innerText = Math.round(sedentary * 0.55/4);
            carbsM.innerText = Math.round(sedentary * 0.45/4);
            console.log("TMB + AF = " + sedentary);
        }
        else if(activity == 1.375) {
            const Lightly_active = hombre * 1.375;
            defi.innerText = Math.round(Lightly_active) - 300;
            surplus.innerText = Math.round(Lightly_active) + 300;
            maintain.innerText = Math.round(Lightly_active);
            proteinD.innerText = Math.round(weight * 1.8);
            proteinS.innerText = Math.round(weight * 2.0);
            proteinM.innerText = Math.round(weight * 1.8);
            fatD.innerText = Math.round(Lightly_active * 0.2/9);
            fatS.innerText = Math.round(Lightly_active * 0.35/9);
            fatM.innerText = Math.round(Lightly_active * 0.3/9);
            carbsD.innerText = Math.round(Lightly_active * 0.4/4);
            carbsS.innerText = Math.round(Lightly_active * 0.55/4);
            carbsM.innerText = Math.round(Lightly_active * 0.45/4);
            console.log("TMB + AF = " + Lightly_active);
        }
        else if(activity == 1.55) {
            const Moderately_active = hombre * 1.55;
            defi.innerText = Math.round(Moderately_active) - 300;
            surplus.innerText = Math.round(Moderately_active) + 300;
            maintain.innerText = Math.round(Moderately_active);
            proteinD.innerText = Math.round(weight * 2.0);
            proteinS.innerText = Math.round(weight * 2.2);
            proteinM.innerText = Math.round(weight * 1.8);
            fatD.innerText = Math.round(Moderately_active * 0.2/9);
            fatS.innerText = Math.round(Moderately_active * 0.35/9);
            fatM.innerText = Math.round(Moderately_active * 0.3/9);
            carbsD.innerText = Math.round(Moderately_active * 0.4/4);
            carbsS.innerText = Math.round(Moderately_active * 0.55/4);
            carbsM.innerText = Math.round(Moderately_active * 0.45/4);
            console.log("TMB + AF = " + Moderately_active);

        }
        else if(activity == 1.725) {
            const Very_active = hombre * 1.725;
            defi.innerText = Math.round(Very_active) - 300;
            surplus.innerText = Math.round(Very_active) + 300;
            maintain.innerText = Math.round(Very_active);
            proteinD.innerText = Math.round(weight * 2.0);
            proteinS.innerText = Math.round(weight * 2.2);
            proteinM.innerText = Math.round(weight * 2.0);
            fatD.innerText = Math.round(Very_active * 0.2/9);
            fatS.innerText = Math.round(Very_active * 0.35/9);
            fatM.innerText = Math.round(Very_active * 0.3/9);
            carbsD.innerText = Math.round(Very_active * 0.4/4);
            carbsS.innerText = Math.round(Very_active * 0.55/4);
            carbsM.innerText = Math.round(Very_active * 0.45/4);
            console.log("TMB + AF = " + Very_active);
        }
        else if(activity == 1.9) {
            const Extra_active = hombre * 1.9;
            defi.innerText = Math.round(Extra_active) - 300;
            surplus.innerText = Math.round(Extra_active) + 300;
            maintain.innerText = Math.round(Extra_active);
            proteinD.innerText = Math.round(weight * 2.0);
            proteinS.innerText = Math.round(weight * 2.2);
            proteinM.innerText = Math.round(weight * 2.0);
            fatD.innerText = Math.round(Extra_active * 0.2/9);
            fatS.innerText = Math.round(Extra_active * 0.35/9);
            fatM.innerText = Math.round(Extra_active * 0.3/9);
            carbsD.innerText = Math.round(Extra_active * 0.4/4);
            carbsS.innerText = Math.round(Extra_active * 0.55/4);
            carbsM.innerText = Math.round(Extra_active * 0.45/4);
            console.log("TMB + AF = " + Extra_active);
        }
        else{
            console.error(error);
        }
    }
    if (gender == 'Woman') {
        const mujer = TMBM(weight,height,age);
        if (activity == 1.2) {
            const sedentary = mujer * 1.2;
            defi.innerText = Math.round(sedentary) - 300;
            surplus.innerText = Math.round(sedentary) + 300;
            maintain.innerText = Math.round(sedentary);
            proteinD.innerText = Math.round(weight * 1.8);
            proteinS.innerText = Math.round(weight * 2.0);
            proteinM.innerText = Math.round(weight * 1.8);
            fatD.innerText = Math.round(sedentary * 0.2/9);
            fatS.innerText = Math.round(sedentary * 0.35/9);
            fatM.innerText = Math.round(sedentary * 0.3/9);
            carbsD.innerText = Math.round(sedentary * 0.4/4);
            carbsS.innerText = Math.round(sedentary * 0.55/4);
            carbsM.innerText = Math.round(sedentary * 0.45/4);
            console.log("TMB + AF = " + sedentary);
        }
        else if (activity == 1.375){
            const Lightly_active = mujer * 1.375;
            defi.innerText = Math.round(Lightly_active) - 300;
            surplus.innerText = Math.round(Lightly_active) + 300;
            maintain.innerText = Math.round(Lightly_active);
            proteinD.innerText = Math.round(weight * 1.8);
            proteinS.innerText = Math.round(weight * 2.0);
            proteinM.innerText = Math.round(weight * 1.8);
            fatD.innerText = Math.round(Lightly_active * 0.2/9);
            fatS.innerText = Math.round(Lightly_active * 0.35/9);
            fatM.innerText = Math.round(Lightly_active * 0.3/9);
            carbsD.innerText = Math.round(Lightly_active * 0.4/4);
            carbsS.innerText = Math.round(Lightly_active * 0.55/4);
            carbsM.innerText = Math.round(Lightly_active * 0.45/4);
            console.log("TMB + AF = " + Lightly_active);
        }
        else if (activity == 1.55){
            const Moderately_active = mujer * 1.55;
            defi.innerText = Math.round(Moderately_active) - 300;
            surplus.innerText = Math.round(Moderately_active) + 300;
            maintain.innerText = Math.round(Moderately_active);
            proteinD.innerText = Math.round(weight * 2.0);
            proteinS.innerText = Math.round(weight * 2.2);
            proteinM.innerText = Math.round(weight * 1.8);
            fatD.innerText = Math.round(Moderately_active * 0.2/9);
            fatS.innerText = Math.round(Moderately_active * 0.35/9);
            fatM.innerText = Math.round(Moderately_active * 0.3/9);
            carbsD.innerText = Math.round(Moderately_active * 0.4/4);
            carbsS.innerText = Math.round(Moderately_active * 0.55/4);
            carbsM.innerText = Math.round(Moderately_active * 0.45/4);
            console.log("TMB + AF = " + Moderately_active);
        }
        else if (activity == 1.725){
            const Very_active = mujer * 1.725;
            defi.innerText = Math.round(Very_active) - 300;
            surplus.innerText = Math.round(Very_active) + 300;
            maintain.innerText = Math.round(Very_active);
            proteinD.innerText = Math.round(weight * 2.0);
            proteinS.innerText = Math.round(weight * 2.2);
            proteinM.innerText = Math.round(weight * 2.0);
            fatD.innerText = Math.round(Very_active * 0.2/9);
            fatS.innerText = Math.round(Very_active * 0.35/9);
            fatM.innerText = Math.round(Very_active * 0.3/9);
            carbsD.innerText = Math.round(Very_active * 0.4/4);
            carbsS.innerText = Math.round(Very_active * 0.55/4);
            carbsM.innerText = Math.round(Very_active * 0.45/4);
            console.log("TMB + AF = " + Very_active);
        }
        else if (activity == 1.9){
            const Extra_active = mujer * 1.9;
            defi.innerText = Math.round(Extra_active) - 300;
            surplus.innerText = Math.round(Extra_active) + 300;
            maintain.innerText = Math.round(Extra_active);
            proteinD.innerText = Math.round(weight * 2.0);
            proteinS.innerText = Math.round(weight * 2.2);
            proteinM.innerText = Math.round(weight * 2.0);
            fatD.innerText = Math.round(Extra_active * 0.2/9);
            fatS.innerText = Math.round(Extra_active * 0.35/9);
            fatM.innerText = Math.round(Extra_active * 0.3/9);
            carbsD.innerText = Math.round(Extra_active * 0.4/4);
            carbsS.innerText = Math.round(Extra_active * 0.55/4);
            carbsM.innerText = Math.round(Extra_active * 0.45/4);
            console.log("TMB + AF = " + Extra_active);
        }
        else{
            console.error(Error);
        }
    }
}

// FUNCION PARA LA TASA METABOLICA BASAL DEL HOMBRE
function TMBH(weight,height,age) {
    const TMBhombre = 66 + (13.7 * weight) + (5 * height) - (6.8 * age);
    console.log(TMBhombre);
    return TMBhombre;
}
// FUNCION PARA LA TASA METABOLICA BASAL DE LA MUJER
function TMBM(weight,height,age) {
    const TMBmujer = 655 + (9.6 * weight) + (1.8 * height) - (4.7 * age);
    console.log(TMBmujer);
    return TMBmujer;
}
