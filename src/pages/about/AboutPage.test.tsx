import { describe, it, expect, beforeEach } from "vitest";
import { render, screen, within } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import AboutPage from "./AboutPage";
import UserProvider from "../../contexts/UserContext";

describe("About page", () => {
  beforeEach(() => {
    render(
      <MemoryRouter>
        <UserProvider>
          <AboutPage />
        </UserProvider>
      </MemoryRouter>,
    );
  });
  it("renders page correctly", () => {
    expect(screen.getByText("Meet the Developer")).toBeDefined();
    expect(
      within(screen.getByTestId("header-message")).getByText("We love"),
    ).toBeDefined();

    // expect(screen.getByTestId("developer-image")).toHaveAttribute("src", "../../../dist/assets/developerImage.png");
  });
});
