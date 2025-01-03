import React from "react";
import { render, screen } from "@testing-library/react";
import Contact from "../Contact";
import "@testing-library/jest-dom";

describe("Contact us test cases", () => {

    test('should load conatct us componenet', () => {
        render(<Contact />);
        const heading = screen.getByRole("heading");
        expect(heading).toBeInTheDocument();
    });

    test('should load button in conatct us componenet', () => {
        render(<Contact />);
        // const button = screen.getByRole("button");
        const button = screen.getByText("Submit");
        expect(button).toBeInTheDocument();
    });

    //test() can be also write "it", "it" is mostly used
    it('should load 2 input boxes in conatct us componenet', () => {
        render(<Contact />);
        // const button = screen.getByRole("button");
        const inputBoxes = screen.getAllByRole("textbox");
        // expect(inputBoxes).toBeInTheDocument();
        expect(inputBoxes).toHaveLength(2);
    });
});