import "@testing-library/jest-dom/vitest";
import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import Greet from "../../src/components/Greet";
describe("Greet", () => {
  it("should render Hello with the name when name is provided", () => {
    render(<Greet name="Ayan Hasnain" />);
    const heading = screen.getByRole("heading");
    expect(heading).toBeInTheDocument();
    expect(heading).toHaveTextContent(/Ayan Hasnain/i);
  });
});
