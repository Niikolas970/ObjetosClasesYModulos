class Producto {
    constructor(nombre,precio,categoria) {
        this.nombre = nombre;
        this.precio = precio;
        this.categoria = categoria
    }
    calcularTotal(){
        return this.precio * 1.19;
    }
    aplicarDescuento(porcentaje){
        return this.precio - porcentaje
}