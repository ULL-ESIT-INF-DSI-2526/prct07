/**
 * Tipo de datos OrderStatus, que marcará el estado de un pedido
 */
export type OrderStatus = "pending" | "confirmed" | "shipped" | "delivered";
/**
 * Tipo de datos Order, que tendrá almacenado los identificadores de un pedido
 */
export type Order = {
  id : string;
  status : OrderStatus;
  item : string;
}
/**
 * Interfaz para clases observer
 */
export interface Observer{
  update(order: Order): void;
}