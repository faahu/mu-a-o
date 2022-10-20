import {LEVELS } from "./levels.enum";


export class Task {
    Nombre = 'Pedro';
    Apellido = 'Gonzalez';
    Email = 'pedrogonzalez@gmail.com';
    Conectado = true;

    constructor(Nombre, Apellido, Conectado, Email) {
        this.Nombre = Nombre;
        this.Apellido = Apellido;
        this.Email = Email;
        this.Conectado = Conectado;
    }
}