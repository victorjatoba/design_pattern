import { ComponentFactory } from "./ComponentFactory";

export class LightComponent implements ComponentFactory {
    createButton(): string {
        return "light";
    }

    createLabel(): string {
        return "light";
    }
}