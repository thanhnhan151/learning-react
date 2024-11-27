import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import { UsernameDisplay } from "../components/UsernameDisplay";

describe("UsernameDisplay", () => {
  it("should render username", () => {
    render(<UsernameDisplay username="kevin" />);
    // expect(result.container).toMatchSnapshot();
    expect(screen.getByText(/kev/)).toBeInTheDocument();
  });
});
