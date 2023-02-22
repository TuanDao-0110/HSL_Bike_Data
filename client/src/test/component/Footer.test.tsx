import { render, screen, act, fireEvent, getByText } from "@testing-library/react";
import Footer from "../../template/Footer";
import "@testing-library/jest-dom";

describe("App component", () => {
 
  it("renders the footer", () => {
    const { getByText, getByTestId } = render(<Footer/>);
    expect(getByText("© 2023 Copyright:Tuan Dao")).toBeInTheDocument();
    expect(getByTestId("link").getAttribute("href")).toBe("https://github.com/TuanDao-0110");
    expect(getByTestId("link").textContent).toBe("GitHub");
  });
});
