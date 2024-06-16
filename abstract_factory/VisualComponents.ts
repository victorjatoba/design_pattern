import { ComponentFactory } from "./ComponentFactory";

export class VisualComponents {
    label: string;
    button: string;

    constructor(factory: ComponentFactory) {
        this.label = factory.createLabel();
        this.button = factory.createButton();
    }
}
