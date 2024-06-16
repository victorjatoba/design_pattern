/**
 * Low cohesion
 */
export interface Product {
    getName(): string;
    getDescription(): string;
    getPrice(): number;
    getAvailability(): boolean;
    getLocation(): string;
    getQuantity(): string;
}
