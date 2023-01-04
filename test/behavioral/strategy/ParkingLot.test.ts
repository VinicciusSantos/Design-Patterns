/* 
    definir uma família de algoritmos, encapsular cada uma
    delas e tornÁ-las INTERCAMBIÁVEIS (policy)
*/

import AirportPriceCalculator from "../../../src/behavioral/strategy/AirportPriceCalculator";
import BeachPriceCalculator from "../../../src/behavioral/strategy/BeachPriceCalculator";
import ParkingLot from "../../../src/behavioral/strategy/ParkingLot";
import ShoppingPriceCalculator from "../../../src/behavioral/strategy/ShoppingPriceCalculator";

test("Deve criar um estacionamento vazio", () => {
    const parkingLot = new ParkingLot("shopping", 500, new ShoppingPriceCalculator());
    expect(parkingLot.getEmptySpaces()).toBe(500)
});

test("Deve entrar um carro", () => {
    const parkingLot = new ParkingLot("shopping", 500, new ShoppingPriceCalculator());
    parkingLot.checkIn("AAA-9999", new Date("2022-01-01T10:00:00"));
    expect(parkingLot.getEmptySpaces()).toBe(499)
});

test("Deve sair um carro", () => {
    const parkingLot = new ParkingLot("shopping", 500, new ShoppingPriceCalculator());
    parkingLot.checkIn("AAA-9999", new Date("2022-01-01T10:00:00"));
    parkingLot.checkOut("AAA-9999", new Date("2022-01-01T15:00:00"));
    expect(parkingLot.getEmptySpaces()).toBe(500)
});

test("Deve calcular o valor que deve ser pago na praia, 20 reais por tempo ilimitado", () => {
    const parkingLot = new ParkingLot("beach", 500, new BeachPriceCalculator());
    parkingLot.checkIn("AAA-9999", new Date("2022-01-01T10:00:00"));
    const price = parkingLot.checkOut("AAA-9999", new Date("2022-01-01T15:00:00"));
    expect(price).toBe(20)
});

test("Deve calcular o valor que deve ser pago no shopping, 10 reais por hora, o carro permaneceu 5 horas", () => {
    const parkingLot = new ParkingLot("shopping", 500, new ShoppingPriceCalculator());
    parkingLot.checkIn("AAA-9999", new Date("2022-01-01T10:00:00"));
    const price = parkingLot.checkOut("AAA-9999", new Date("2022-01-01T15:00:00"));
    expect(price).toBe(50)
});

test("Deve calcular o valor que deve ser pago no aeroporto, 3 horas por 20 reais e depois 10 reais por hora, o carro permaneceu 5 horas", () => {
    const parkingLot = new ParkingLot("airport", 500, new AirportPriceCalculator());
    parkingLot.checkIn("AAA-9999", new Date("2022-01-01T10:00:00"));
    const price = parkingLot.checkOut("AAA-9999", new Date("2022-01-01T15:00:00"));
    expect(price).toBe(40)
});
