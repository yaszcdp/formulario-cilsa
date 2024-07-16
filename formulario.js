document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('fecha_nac').setAttribute('max', maxDate());
    submitForm();
    addBlurEventListeners();
});

//Función para validar los campos al enviar el formulario
function submitForm(){
    document.getElementById('formulario').addEventListener('submit', function(event){
        event.preventDefault();

        const fields = ['nombre', 'apellido', 'email', 'fecha_nac', 'pais'];
        const data = {};

        fields.forEach(field =>{
            const fieldValue = document.getElementById(field).value;
            if(fieldValue === ''){
                toggleError(field, true);
            }else{
                toggleError(field, false);
            }
            data[field] = fieldValue;
        });

        console.log("Desde submit form data", data)
        alert('Formulario enviado correctamente');
        document.getElementById('formulario').reset();
    });
}

//Función para mostrar u ocultar los mensajes de error
function toggleError(inputId, isError){
    const errorElementId = `${inputId}-error`;
    if (isError) {
        document.getElementById(errorElementId).classList.add("show");
    } else {
        document.getElementById(errorElementId).classList.remove("show");
    }
} 

//Función para validar los campos al salir de ellos
function addBlurEventListeners(){
    const fields = ['nombre', 'apellido', 'email', 'fecha_nac', 'pais'];

    fields.forEach(field =>{
        document.getElementById(field).addEventListener('blur', function(){
            const isInvalid = this.value === '';
            toggleError(field, isInvalid);
        });
    });
}

//Función para obtener la fecha actual y poder setearla como fecha máxima en el campo de fecha de nacimiento
function maxDate(){
    var fechaActual = new Date();
    var dia = ('0' + fechaActual.getDate()).slice(-2); 
    var mes = ('0' + (fechaActual.getMonth() + 1)).slice(-2); 
    var año = fechaActual.getFullYear();
    var fechaMaxima = año + '-' + mes + '-' + dia;

    return fechaMaxima;
} 

//Funciones para cambiar de estilo. 
function setHighContrastStyle(){
    document.body.classList.add('high-contrast');
}

function setClassicStyle(){
    document.body.classList.remove('high-contrast');
}