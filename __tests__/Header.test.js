/* eslint-disable */

import React from "react";
import {SearchButton} from "../components/SearchBox";
import { fireEvent, render, screen, cleanup } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import renderer from "react-test-renderer";

afterEach(cleanup);

describe("Search Box", () => {

    it("button exists", () => {
        render(<SearchButton>Search</SearchButton> )

        const searchButton = screen.getByTestId("nav-search-button");
        expect(searchButton).toBeInTheDocument();
    });

    it("id disabled when needed", () => {
        const handleClick = jest.fn();

        render(<SearchButton onClick={handleClick} disabled={true}>Search</SearchButton>);

        const searchButton = screen.getByTestId("nav-search-button");
        fireEvent.click(searchButton);
        expect(handleClick).toHaveBeenCalledTimes(0);
    });

    it("runs a function when clicked", () => {
        const handleClick = jest.fn();

        render(<SearchButton onClick={handleClick}>Search</SearchButton>);

        const searchButton = screen.getByTestId("nav-search-button");
        fireEvent.click(searchButton);
        expect(handleClick).toHaveBeenCalledTimes(1);
    });

    it("matches snapshot", () => {
        const tree = renderer.create(<SearchButton>Search</SearchButton>).toJSON();
        expect(tree).toMatchSnapshot();
    });

});