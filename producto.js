export class Producto {
    constructor(nombre, precio, categoria) {
        this.nombre = nombre;
        this.precio = precio;
        this.categoria = categoria;
    }
    calcularTotal() {
        return this.precio * 1.19;
    }
    aplicarDescuento(porcentaje) {
        return this.precio * (1 - porcentaje / 100);
    }
    resumen() {
        return `Nombre: ${this.nombre} | Categoría: ${this.categoria} | Precio: $${this.precio}`
    }
    tarjeta() {
        return `${this.nombre} (${this.categoria}) — $${this.calcularTotal().toFixed(2)} con IVA`
    }
}

export class ProductoDigital extends Producto {
    constructor(nombre, precio, licencia) {
        super(nombre, precio, "Digital");
        this.licencia = licencia;
    }
    calcularTotal() {
        return this.precio;
    }
    tarjeta() {
        return `${this.nombre} — Licencia ${this.licencia} — $${this.precio} (sin IVA)`
    }
}