import Button from "./Button";
import Label from "./label";

export default interface WidgetFactory {
    createLabel(): Label;
    createButton(): Button;
}