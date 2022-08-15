import React from 'react';
import { createRoot } from "react-dom/client";
import MyApp from "../pages/_app";
import News from "../pages/news";
import { fireEvent, render, screen, cleanup } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import renderer from "react-test-renderer";
import { Provider } from 'react-redux';
import store from '../store';
import Header from "../components/Header";
import { useRouter } from "next/router";
// import { createRouter } from 'next/router';
// import { RouterContext } from 'next/dist/next-server/lib/router-context';

afterEach(cleanup);

jest.mock("next/router", () => ({
    useRouter: jest.fn(),
  }));

// const router = createRouter('', { user: 'nikita' }, '', {
//     initialProps: {},
//     pageLoader: jest.fn(),
//     App: jest.fn(),
//     Component: jest.fn(),
// });

// const useRouter = jest.spyOn(require('next/router'), 'useRouter');

describe("Integration tests", () => {

    it("heading exists", () => {

        // // useRouter.mockImplementationOnce(() => ({
        // //     query: { search: 'cricket' },
        // // }));
        // const push = jest.fn();
        // useRouter.mockImplementation(() => ({
        // push,
        // pathname: "/",
        // route: "/",
        // asPath: "/",
        // query: "",
        // }));

        // render(
        //     <Provider store={store}>
        //         <News />
        //     </Provider>
        // );

        // const heading = screen.getByTestId("news-top-heading");
        // expect(heading).toBeInTheDocument();
    });

});