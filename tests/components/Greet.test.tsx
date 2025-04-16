import { render, screen } from "@testing-library/react";
import { describe, it } from "vitest";
import Greet from "../../src/components/Greet";

describe("Greet", () => {
  it("should render Hello with the name when name is provided", () => {
    render(<Greet name="Ayan Hasnain" />);
    screen.debug();
  });
});
