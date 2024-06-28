/**
 * Abstract Factory Example
 * 
 * Input: the theme
 * Output: the components
 * 
 *         dark | light
 * label     x  |   y
 * button    a  |   b
 */

import { VisualComponents } from "./VisualComponents";

let view: VisualComponents = new VisualComponents("light");

console.log(view.label)