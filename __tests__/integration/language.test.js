/* eslint-disable */

import React from 'react';
import "@testing-library/jest-dom/extend-expect";
import { Provider } from 'react-redux';
import { render, screen, cleanup, fireEvent } from "@testing-library/react";
import Header from '../../components/Header';
import store from '../../store';
import { changeLanguage } from "../../actions/articleActions";

afterEach(cleanup);

describe("Integration tests: change language", () => {

  test('Store is updated correctly', () => {
   
    render(
      <Provider store={store}>
          <Header />
      </Provider>
    );

    const englishListItem = screen.getByText("en");
    expect(englishListItem).toBeInTheDocument();

    // const languageDropdown = screen.getByTestId("language-nav-dropdown");
    fireEvent.click(englishListItem);

    const germanListItem = screen.getByText("German");
    fireEvent.click(germanListItem);

    const _germanListItem = screen.getByText("de");
    expect(_germanListItem).toBeInTheDocument();

    return store.dispatch(changeLanguage("de"))
    .then(() => {
      const newState = store.getState();
      expect(newState.language.language).toBe("de");
    })
    
  })

});