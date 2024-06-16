import { DarkComponent } from "./DarkComponents";
import { VisualComponents } from "./VisualComponents";

let darkComponent = new DarkComponent();
let visualComponents = new VisualComponents(darkComponent);

console.log(visualComponents.button);