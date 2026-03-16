import { Observable } from "./Observable";
import { Observer, Order } from "./Observer";
/**
 * Clase OrderManager, que se encargará de mantener un registro de los pedidos
 * Tiene como propiedades un array de observer y un pedido.
 * Como métodos tiene addOrder, que añadirá un pedido
 * getOrder, que devolverá el pedido buscado o indefinido si no existe,
 * suscribe, que es implementado de la clase observable y sucribe a un usuario a un pedido si no lo estaba 
 * unsuscribe, que es implementado de la clase observable y desuscribe a un usuario a un pedido si no lo estaba
 * notify, que es implementado de la clase observable y notifica a todos los usuarios sobre sus pedidos
 */
export class OrderManager implements Observable{
  
  private observers: Observer[] = [];
  private orders: Order[];
   constructor() {
  }

  /**
   * El método addOrder
   * @param order - Se le pasa como parámetro order para añadir un nuevo pedido
   */
  addOrder(order: Order): void{

    
    
  }
/**
 * El método getOrder
 * @param id - Se le pasa como parámetro id para buscar un pedido
 * Si existe, se le devuelve el pedido, si no, se devuelve indefinido
 */
  getOrder(id: string): Order | undefined{



  }
/**
 * El método suscribe
 * @param observer - Se le entrega un objeto de tipo observer para que comprebe lo suscriba, 
 * si lo está devolverá un error indicándolo, si no, se suscribe.
 */
  suscribe(observer: Observer): void {
    if (this.observers.includes(observer)) {
      throw new Error('The observer had already been subscribed');
    } else {
      this.observers.push(observer);
    }
  }
/**
 * El método unsuscribe
 * @param observer - Se le entrega un objeto de tipo observer para que comprebe lo desuscriba, 
 * si lo está devolverá un error indicándolo, si no, se desuscribe.
 */
  unsuscribe(observer: Observer): void {
     const index = this.observers.indexOf(observer);
    if (index === -1) {
      throw new Error('The observer has not been subscribed');
    } else {
      this.observers.splice(index, 1);
    }
  }

  notify(): void {
    this.observers.forEach((observer) => observer.update(this.orders));
  }
}