import { Observer, Order } from "./Observer";


/**
 * Clase EmailNotifier, que se encargará de notificar al usuario con el correo: @param correo - 
 * cuando se produzca una actualización de su pedido: @param order -
 */
export class EmailNotifier implements Observer{
  
  private correo : string;

  constructor(correo_ : string){
    this.correo = correo_;
  }

  update(order: Order): void {
    console.log("Usuario ", this.correo, ", se ha actualizado el contenido del pedido ", order);
  }
}