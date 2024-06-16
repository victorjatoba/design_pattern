/**
 * High cohesion
 */
interface ProductCatalog {
    getName(): string;
    getDescription(): string;
}

interface Sales {
    getPrice(): number;
    getAvailability(): boolean;
}

interface Warehouse {
    getLocation(): string;
    getQuantity(): number;
}