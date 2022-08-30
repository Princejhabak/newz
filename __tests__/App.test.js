/* eslint-disable */

import React from 'react';

import News from "../pages/news";
import { render, screen, cleanup } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { Provider } from 'react-redux';
import store from '../store';
import { useRouter } from "next/router";
// import { createRouter } from 'next/router';
// import { RouterContext } from 'next/dist/next-server/lib/router-context';

afterEach(cleanup);

jest.setTimeout(30000);

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

    it("heading exists", async () => {
        /*
        // useRouter.mockImplementationOnce(() => ({
        //     query: { search: 'cricket' },
        // }));
        const push = jest.fn();
        useRouter.mockImplementation(() => ({
        push,
        pathname: "/news",
        route: "/",
        asPath: "/news?search=cricket",
        query: {search: 'cricket'},
        }));
        
        const mockClick = jest.fn();

        render(
            <Provider store={store}>
                <News />
            </Provider>
        );

        // const liveNewsLink = screen.getByTestId("header-link-live-news");
        // fireEvent.click(liveNewsLink);
        
        // await Promise.resolve();
        await new Promise((r) => setTimeout(r, 10000));
        // add a wait for loader to finish loading
        const heading = screen.getByTestId("news-top-heading");
        expect(heading).toBeInTheDocument();
        */
    });
    
});
