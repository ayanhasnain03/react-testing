import { render, screen } from "@testing-library/react";
import Greet from "../../src/components/Greet";

describe("Greet", () => {
  it("should render Hello with the name when name is provided", () => {
    render(<Greet name="Ayan Hasnain" />);
    const heading = screen.getByRole("heading", { name: /Ayan Hasnain/i });
    expect(heading).toBeInTheDocument();
  });
});
