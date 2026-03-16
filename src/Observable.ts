import { Observer } from "./Observer";
/**
 * Interfaz para clases observable
 */
export interface Observable {
  suscribe(observer: Observer): void;
  unsuscribe(observer: Observer): void;
  notify(): void;
}