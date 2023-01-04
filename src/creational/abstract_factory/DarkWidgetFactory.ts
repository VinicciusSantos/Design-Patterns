import Button from "./Button";
import DarkButton from "./DarkButton";
import DarkLabel from "./DarkLabel";
import Label from "./label";
import WidgetFactory from "./WidgetFactory";

export default class DarkWidgetFactory implements WidgetFactory {
    createLabel(): Label {
        return new DarkLabel();
    }

    createButton(): Button {
        return new DarkButton();
    }
}