import React from "react";
import Header from "../Header";
import { Provider } from "react-redux";
import { render, screen, fireEvent } from "@testing-library/react"
import appStore from "../../utils/appStore";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";

it("should load header compoentn with login button", () => {
    render(
        <BrowserRouter>
        <Provider store={appStore}>
            <Header />
        </Provider>
        </BrowserRouter>
    );

    const loginButton = screen.getByRole('button',{name:'Login'});
    expect(loginButton).toBeInTheDocument();
});

it("should load header compoentn with zero cart items", () => {
    render(
        <BrowserRouter>
        <Provider store={appStore}>
            <Header />
        </Provider>
        </BrowserRouter>
    );

    const cartItems = screen.getByText(/Cart/)
    expect(cartItems).toBeInTheDocument();
});

it("should chnage login button to logout on click header compent with login button", () => {
    render(
        <BrowserRouter>
        <Provider store={appStore}>
            <Header />
        </Provider>
        </BrowserRouter>
    );
    // const loginButton = screen.getByRole('button',{name:'Login'});
    const loginButton2 = screen.getByRole('button',{name:'Login'});
    fireEvent.click(loginButton2)
    const logoutButton = screen.getByRole('button',{name:'Logout'});
    expect(logoutButton).toBeInTheDocument();
});