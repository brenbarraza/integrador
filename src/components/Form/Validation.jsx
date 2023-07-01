export default function validate(inputs) {
     const regexEmail= /^(?:\d{3}|\(\d{3}\))([-/.])\d{3}\1\d{4}$/;
     const regexPassword= /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&]{8,15}/;
     let errors = {};
     (!inputs.email) ? errors.email = 'Campo Obligatorio': errors.email = '';
     (inputs.email.length > 35 ) ? errors.email = 'No puede superar los 35 caracteres': errors.email = '';
     (!regexEmail.test(inputs.email)) ? errors.email = 'Debe ser un email válido' : errors.email = '';
     (!regexPassword.test(inputs.password)) ?  errors.password = 'La contraseña debe tener entre 6 y 10 caracteres y al menos un número' : errors.password = '';
     return errors;
}