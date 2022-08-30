/* eslint-disable */

import React from 'react';
import { createRoot } from "react-dom/client";
import Message from "../components/Message";
import { render, screen, cleanup } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import renderer from "react-test-renderer";
import { act } from 'react-dom/test-utils';

afterEach(cleanup);

test("renders without crashing", () => {
    const div = document.createElement("div");
    act(() => {
        createRoot(div).render(<Message></Message>);
    });
});


test("renders Message component correctly", () => {
    render(<Message>Error</Message>);
    expect(screen.getByTestId('alert')).toHaveTextContent("Error");
});

test("renders 2nd Message correctly", () => {
    render(<Message>Product not found</Message>);
    const messageElement = screen.getByTestId('alert');
    expect(messageElement).toBeInTheDocument();
    expect(messageElement).toHaveTextContent("Product not found");
});

test("matches snapshot", () => {
    const tree = renderer.create(<Message variant="danger">Error</Message>).toJSON();
    expect(tree).toMatchSnapshot();
});