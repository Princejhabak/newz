/* eslint-disable */

import moxios from "moxios";
import store from "../../store";
import { listArticles } from "../../actions/articleActions";
import {SPORTS_DATA} from "../../utils/metadata";

describe("Integration tests: fetch list of articles", () => {

  beforeEach(() => {
    moxios.install();
  });

  afterEach(() => {
    moxios.uninstall();
  });


  test('Store is updated correctly', () => {
    const expectedState = SPORTS_DATA;

    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith({
        status: 200,
        response: expectedState
      })
    });

    return store.dispatch(listArticles(undefined, "sports"))
    .then(() => {
      const newState = store.getState();

      expect(newState.articleList.articles).toBe(expectedState);
      expect(newState.articleList.articles.data.length).toBe(2);
      expect(newState.articleList.articles.data[0].category).toBe('sports');
    })

  })

});