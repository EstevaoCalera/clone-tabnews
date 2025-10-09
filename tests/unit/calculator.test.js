const calculator = require("../../models/calculator");

describe("Calculator", () => {
  describe("sum", () => {
    it("should return the sum of two positive numbers", () => {
      expect(calculator.sum(2, 3)).toBe(5);
    });

    it("should return the sum of two negative numbers", () => {
      expect(calculator.sum(-2, -3)).toBe(-5);
    });

    it("should return the sum when one number is zero", () => {
      expect(calculator.sum(0, 5)).toBe(5);
    });
  });

  describe("subtract", () => {
    it("should return the difference of two numbers", () => {
      expect(calculator.subtract(5, 3)).toBe(2);
    });

    it("should return a negative result when the second is greater", () => {
      expect(calculator.subtract(3, 5)).toBe(-2);
    });

    it("should return zero when both numbers are equal", () => {
      expect(calculator.subtract(4, 4)).toBe(0);
    });
  });

  describe("multiply", () => {
    it("should return the product of two numbers", () => {
      expect(calculator.multiply(2, 3)).toBe(6);
    });

    it("should return zero when one number is zero", () => {
      expect(calculator.multiply(0, 5)).toBe(0);
    });

    it("should return a negative product for opposite signs", () => {
      expect(calculator.multiply(-2, 3)).toBe(-6);
    });
  });

  describe("divide", () => {
    it("should return the quotient of two numbers", () => {
      expect(calculator.divide(6, 3)).toBe(2);
    });

    it("should return a negative quotient for opposite signs", () => {
      expect(calculator.divide(-6, 3)).toBe(-2);
    });

    it("should throw an error when dividing by zero", () => {
      expect(() => calculator.divide(5, 0)).toThrow("Can't divide by zero");
    });

    it("should return zero when numerator is zero", () => {
      expect(calculator.divide(0, 5)).toBe(0);
    });
  });
});
