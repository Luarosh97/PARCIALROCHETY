import { Credito } from "./credito";

export class Abono {
    idCredito: Credito;
    fecha: string;
    valorAbono: number;
    constructor () {
        this.idCredito = new Credito();
        
    }
}

