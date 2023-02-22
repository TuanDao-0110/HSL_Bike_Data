import { render, screen, act, fireEvent, getByText } from "@testing-library/react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { configureStore } from "@reduxjs/toolkit";
import languageReducer from "../../redux/langague_reducer";
import { setEng, setFin, setSE } from "../../redux/langague_reducer";
import { store } from "../../redux/store";

import App from "../../App";

import "@testing-library/jest-dom";
import { Provider } from "react-redux";
import { state_EN } from "../../redux/language/English";

describe("App component", () => {
  it("should render component", () => {
    const views = render(
      <Provider store={store}>
        {/* <BrowserRouter>
          <Routes>
            <Route path="/*" element={<App />}></Route>
          </Routes>
        </BrowserRouter> */}
        <App></App>
      </Provider>
    );
    //  const dropdown = getByTestId("language-dropdown");
    //  fireEvent.click(dropdown);

    store.dispatch(setFin());
    //  const textInFinnish = getByTestId("text-in-finnish");
    //  expect(textInFinnish).toBeInTheDocument();
    expect(views.getByTestId("link").textContent).toBe("GitHub");
  });
});
