import PriceCalculator from "./PriceCalculator";

export default class ParkingLot {
  parkedCars: { plate: string; checkInDate: Date }[] = [];

  constructor(
    readonly location: string,
    readonly capacity: number,
    readonly priceCalculator: PriceCalculator
  ) {}

  public checkIn(plate: string, checkInDate: Date) {
    this.parkedCars.push({ plate, checkInDate });
  }

  public checkOut(plate: string, checkOutDate: Date) {
    const parkedCar = this.parkedCars.find((car) => car.plate === plate);
    if (!parkedCar) throw new Error("Car not found");
    this.parkedCars.splice(this.parkedCars.indexOf(parkedCar), 1);

    const diff =
      (checkOutDate.getTime() - parkedCar.checkInDate.getTime()) /
      (1000 * 60 * 60);

    return this.priceCalculator.calculate(diff);
  }

  public getEmptySpaces(): number {
    return this.capacity - this.parkedCars.length;
  }
}
