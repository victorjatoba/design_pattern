/**
 * High cohesion
 * - Strongly focused on functionallity
 * - Enhance reusability, maintainability and readability
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