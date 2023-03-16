import { handleCalculation } from "./calculatorHelpers";

describe("Calculation", () => {
  test("adds 3 + 5 to equal 8", () => {
    expect(handleCalculation("3 + 5")).toBe("8");
  });
  
  test("adds 7 - 9 to equal -2", () => {
    expect(handleCalculation("7 - 9")).toBe("-2");
  });
  
  test("adds 3 + (-5) to equal -2", () => {
    expect(handleCalculation("3 + (-5)")).toBe("-2");
  });
  
  test("adds (-7) - 9 to equal -16", () => {
    expect(handleCalculation("(-7) - 9")).toBe("-16");
  });
  
  test("adds 7.3 + 12.25 - 10.75 to equal 8.8", () => {
    expect(handleCalculation("7.3 + 12.25 - 10.75")).toBe("8.8");
  });
})

describe("Multiplication and Division", () => {
  test("13 * 3 * 2 to equal 78", () => {
    expect(handleCalculation("13 * 3 * 2")).toBe("78");
  });
  
  test("25 / 2 to equal 12.5", () => {
    expect(handleCalculation("25 / 2")).toBe("12.5");
  });
  
  test("8.35 * 17.25 / 10.16 to equal 14.176919291338582", () => {
    expect(handleCalculation("8.35 * 17.25 / 10.16")).toBe("14.176919291338582");
  });
  
  test("8.35 * 17.25 / 10.16 to equal 14.176919291338582", () => {
    expect(handleCalculation("8.35 * 17.25 / 10.16")).toBe("14.176919291338582");
  });
})

describe("Repeating Operations", () => {
  test("3 + 5 + 5 + 5 to equal 18", () => {
    expect(handleCalculation("3 + 5 + 5 + 5")).toBe("18");
  });
  
  test("3 + 3 + 3 to equal 9", () => {
    expect(handleCalculation("3 + 3 + 3")).toBe("9");
  });
  
  test("7 - 3 - 3 - 3 - 3 to equal -5", () => {
    expect(handleCalculation("7 - 3 - 3 - 3 - 3")).toBe("-5");
  });
  
  test("5 * 2 * 2 * 2 to equal 40", () => {
    expect(handleCalculation("5 * 2 * 2 * 2")).toBe("40");
  });

  test("2 * 2 * 2 * 2 * 2 * 2 to equal 64", () => {
    expect(handleCalculation("2 * 2 * 2 * 2 * 2 * 2")).toBe("64");
  });

  test("2^2^2^2^2 to equal 65,536", () => {
    expect(handleCalculation("2^2^2^2^2")).toBe("65536");
  });
})

describe("Roots, Exponents and Power Functions", () => {
  test("√36 to equal 6", () => {
    expect(handleCalculation("√36")).toBe("6");
  });

  test("6^2 to equal 36", () => {
    expect(handleCalculation("6^2")).toBe("36");
  });

  test("6^5 to equal 7776", () => {
    expect(handleCalculation("6^5")).toBe("7776");
  });

  test("6^(-3) to equal 0.004629629629629629", () => {
    expect(handleCalculation("6^(-3)")).toBe("0.004629629629629629");
  });
})

describe("Order of Operations", () => {
  test("3 + 5 * 2 / 4 to equal 5.5", () => {
    expect(handleCalculation("3 + 5 * 2 / 4")).toBe("5.5");
  });

  test("3^(2) + 6 * (3 * 4) to equal 81", () => {
    expect(handleCalculation("3^(2) + 6 * (3 * 4)")).toBe("81");
  });
})

describe("Additional Test", () => {
  test("1/5 to equal 0.2", () => {
    expect(handleCalculation("1/5")).toBe("0.2");
  });

  test("10000 / (1 + 0.073) * 5 to equal 46598.32246039143", () => {
    expect(handleCalculation("10000 / (1 + 0.073) * 5")).toBe("46598.32246039143");
  });

  test("10000 * ((1 + 0.073)^5) to equal 14223.242342765927", () => {
    expect(handleCalculation("10000 * ((1 + 0.073)^5)")).toBe("14223.242342765927");
  });
})

describe("Percentage Operations", () => {
  test("10% to equal 0.1", () => {
    expect(handleCalculation("10%")).toBe("0.1");
  });

  test("12 + (12 * 10%) to equal 13.2", () => {
    expect(handleCalculation("12 + (12 * 10%)")).toBe("13.2");
  });

  test("10 - (10 * 10%) to equal 9", () => {
    expect(handleCalculation("10 - (10 * 10%)")).toBe("9");
  });

  test("15 * 10% to equal 1.5", () => {
    expect(handleCalculation("15 * 10%")).toBe("1.5");
  });

  test("15 / 10% to equal 150", () => {
    expect(handleCalculation("15 / 10%")).toBe("150");
  });

  test("35.25 + (35.25 * 0.075) to equal 37.89375", () => {
    expect(handleCalculation("35.25 + (35.25 * 0.075)")).toBe("37.89375");
  });

  test("40.00 - (40.00 * 0.025) to equal 39", () => {
    expect(handleCalculation("40.00 - (40.00 * 0.025)")).toBe("39");
  });
})
