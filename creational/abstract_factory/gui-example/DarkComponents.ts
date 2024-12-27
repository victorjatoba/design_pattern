import { ComponentFactory } from "./ComponentFactory";

export class DarkComponent implements ComponentFactory {
    createButton(): string {
        return "dark";
    }

    createLabel(): string {
        return "dark";
    }
}