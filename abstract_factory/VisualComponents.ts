export class VisualComponents {
    label: String;
    button: String;

    constructor(theme: String) {
        if (theme == "dark") {
            this.label = "dark";
            this.button = "dark";
        } else if (theme == "light") {
            this.label = "light";
            this.button = "light";
        }
    }
}