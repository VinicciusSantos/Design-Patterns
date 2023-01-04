import PriceCalculator from "./PriceCalculator";

export default class AirportPriceCalculator implements PriceCalculator {
  calculate(hours: number): number {
    let price = 20;
    const reaminingHours = hours - 3;
    if (reaminingHours <= 0) return price;
    return price + reaminingHours * 10;
  }
}
