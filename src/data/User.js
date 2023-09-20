const {v4 : uuidv4} = require('uuid');
const {hashSync} = require('bcryptjs');

const User = function ({name, surname, email, password, telefono, genero, asiento, suscripcion, fotoPerfil}) {
    this.id = uuidv4();
    this.name = name.trim();
    this.surname = surname.trim();
    this.email = email.trim();
    this.password = hashSync(password.trim(),10);
    this.rol = password.trim() === 'aventuraSF' ? 'admin' : 'user'; // Determina el rol en base a la contraseña
    this.birthday = null;
    this.telefono = telefono;
    this.genero = genero;
    this.asiento = asiento;
    this.suscripcion = suscripcion;
    this.fotoPerfil = fotoPerfil;
}


module.exports = User