import { describe, expect, it } from "vitest";
import { formatCurrency } from "./money";

describe("formatCurrency", () => {
  it("formats positive values correctly", () => {
    expect(formatCurrency(1999)).toBe("$19.99");
  });
  it("formats zero correctly", () => {
    expect(formatCurrency(0)).toBe("$0.00");
  });
  it("formats negative values correctly", () => {
    expect(formatCurrency(-500)).toBe("-$5.00");
  });
  it("formats large values correctly", () => {
    expect(formatCurrency(123456789)).toBe("$1,234,567.89");
  });
  it("formats values with more than two decimal places correctly", () => {
    expect(formatCurrency(1234.567)).toBe("$12.35");
  });
});
