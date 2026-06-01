class Usuario {
    constructor(nombre,mail,rol="Cliente") {
        this.rol = rol;
        this.nombre = nombre;
        this.mail = mail;
        this.activo = true;
    }
    saludo(){
        return `Bienvenido ${this.nombre} (${this.rol})`
    }
    desactivar(){
        this.activo = false;
        return `Su cambio se ha hecho exitoso, ahora mismo te encuentras desactivado`
    }
    resumen(){
        return `Tus datos son:
        Nombre: ${this.nombre}
        email: ${this.mail}
        Y actualmente te encuentras ${this.activo ? "Activo" : "Desactivado"}`
    }
}

class UsuarioVIP extends Usuario {
    constructor(nombre,mail,membresia) {
        super (nombre,mail,"Cliente VIP")
        this.membresia = membresia;
    }
    saludo(){
        return `SEA BIENVENIDO PARA NUESTRO USUARIO VIP, recuerda ${this.nombre} que actualmente cuentas con una membresia nivel ${this.membresia}`
    }
    beneficios(){
        if (this.membresia === "Gold") {
            return `Tienes envío gratis, 10% de descuento en tu próxima compra y acceso anticipado a ofertas`
        } else if (this.membresia === "Platinum"){
            return `Tienes envío express gratis, 20% de descuento permanente y atención preferencial 24/7`
        }
    }
}