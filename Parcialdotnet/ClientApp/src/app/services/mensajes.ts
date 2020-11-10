import { AlertModalComponent } from "../@base/alert-modal/alert-modal.component";


export class Mensajes {
    Mostrar( mensaje: string) {
        const messageBox = this.modalService.open(AlertModalComponent)
            messageBox.componentInstance.message = mensaje;
      }
}
}
