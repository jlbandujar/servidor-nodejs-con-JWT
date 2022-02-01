const mongoose = require('mongoose');
const UsuarioSchema = mongoose.Schema(
{
    nombre: {
        type:String,
        required: [true,'El nombre es obligatorio']
    },
    correo: String
}
)
let Usuario = mongoose.model('Usuario',UsuarioSchema);
module.exports = Usuario;