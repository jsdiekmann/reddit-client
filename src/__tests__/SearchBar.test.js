import SearchBar from "../Components/SearchBar/SearchBar";
import { parser } from "../parser";
import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import React from "react";

describe("SearchBox", () => {
  test("renders correctly", () => {
    render(<SearchBar />);

    const inputBox = screen.getByPlaceholderText("What Interests You?");
    const button = screen.getByRole("button");
    const filterBox = screen.getByPlaceholderText("Filter Results");
    
    expect(inputBox).toBeVisible();
    expect(button).toBeVisible();
    expect(filterBox).toBeVisible();
  });

  test("updates state of term to typed input", async () => {
    const user = userEvent.setup();
    const mockHandleTermChange = jest.fn();

    render(<SearchBar handleTermChange={mockHandleTermChange} />);

    const inputBox = screen.getByPlaceholderText("What Interests You?");
    await user.type(inputBox, "Dog");
    await waitFor(() => {
      expect(mockHandleTermChange).toHaveBeenCalledWith("Dog");
    });
  });

  test("parses input to remove spaces and apostrophes", () => {
    const term = "The Dog's Tail";
    const parsedTerm = parser(term);
    expect(parsedTerm).toBe("TheDogsTail");
  });

  test("on button click, fires function to update state of searchTerm to term", async () => {
    const user = userEvent.setup();
    const mockHandleSubmit = jest.fn();

    render(<SearchBar handleSubmit={mockHandleSubmit} />);

    const button = screen.getByRole("button");
    
    await user.click(button);
    await waitFor(() => {
      expect(mockHandleSubmit).toHaveBeenCalled();
    });
  });

  test("updates state of filteredTerm to typed input", async () => {
    const user = userEvent.setup();
    const mockHandleFilterChange = jest.fn();

    render(<SearchBar handleFilterChange={mockHandleFilterChange} />);

    const filterInput = screen.getByPlaceholderText("Filter Results");
    await user.type(filterInput, "Do");
    await waitFor(() => {
      expect(mockHandleFilterChange).toHaveBeenCalledWith("Do");
      expect(mockHandleFilterChange).toHaveBeenCalledTimes(2);
    });
  });
});
