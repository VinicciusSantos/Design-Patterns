import Item from "./Item";
import TaxItem from "./TaxItem";

export default class Invoice {
    items: Item[] = []

    public addItem(item: Item) {
        this.items.push(item)
    }

    public getTaxes(): number {
        let taxes = 0
        for (const item of this.items) 
        if (item instanceof TaxItem) taxes += item.calculateTax()
        return taxes
    }
} 