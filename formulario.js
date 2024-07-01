document.addEventListener('DOMContentLoaded', function() {
    submitForm();
    addBlurEventListeners();
});

//Función para validar los campos al enviar el formulario
function submitForm(){
    document.getElementById('formulario').addEventListener('submit', function(event){
        event.preventDefault();

        const fields = ['nombre', 'apellido', 'email', 'fecha_nac', 'pais'];

        fields.forEach(field =>{
            const fieldValue = document.getElementById(field).value;
            toggleError(field, fieldValue === '');
        })
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
            const isInvalid = this.value === '' || !this.checkValidity();
            toggleError(field, isInvalid);
        });
    });
}

//Función para cambiar de estilo. 
function setHighContrastStyle(){
    document.body.classList.add('high-contrast');
}

function setClassicStyle(){
    document.body.classList.remove('high-contrast');
}