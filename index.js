import { Usuario, UsuarioVIP } from "./usuario.js";
import { Producto, ProductoDigital } from "./producto.js";

const cliente = new Usuario("Laura", "laura@email.com");
const admin = new Usuario("Carlos", "carlos@email.com", "Administrador");
const vip = new UsuarioVIP("Sofía", "sofia@email.com", "Platinum");

const camisa = new Producto("Camisa", 80000, "Ropa");
const curso = new ProductoDigital("Curso JavaScript", 120000, "anual");

console.log(cliente.saludo());
console.log(vip.saludo());
console.log(admin.desactivar());
console.log(admin.resumen());

console.log(camisa.tarjeta());
console.log(camisa.aplicarDescuento(20));
console.log(curso.tarjeta());