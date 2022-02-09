const mongoose = require('mongoose');
const ProductoSchema = mongoose.Schema(
{
    nombre: {
        type:String,
        required: [true,'El nombre es obligatorio']
    },
    imagen: {
        type:String
    },
    categoria: {
        type:String,
        required: [true,'La categoria es obligatoria']
    },
    precio: {
        type:Number
    }
}
)
let Producto = mongoose.model('Producto',ProductoSchema);
module.exports = Producto;