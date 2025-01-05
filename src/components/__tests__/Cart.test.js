import { act } from "react";
import RestaurantMenu from "../RestaurantMenu";
import { BrowserRouter } from "react-router-dom";
import {fireEvent, render,screen} from "@testing-library/react";
import MOCK_DATA from "../mocks/mockResMenu.json";
import "@testing-library/jest-dom";
import React from "react";
import {Provider} from 'react-redux';
import appStore from '../../utils/appStore';
import Header from "../Header";
import Cart from "../Cart";

global.fetch = jest.fn(()=>
     Promise.resolve({
        json:()=>  Promise.resolve(MOCK_DATA)
    })
);

it('should load restarrunt menu compoentn',async()=>{
    await act(async()=>render(<BrowserRouter><Provider store={appStore}><Header/><Cart/><RestaurantMenu/></Provider></BrowserRouter>));
    const accordionHeader = screen.getByText('Snacks (9)');

    fireEvent.click(accordionHeader);

    expect(screen.getAllByTestId("foodItems").length).toBe(9);

    const addBtns = screen.getAllByRole('button',{name:'Add +'});

    fireEvent.click(addBtns[0]);

expect(screen.getByText('Cart (1 Items)')).toBeInTheDocument();

// fireEvent.click(screen.getByRole('button',{name:'Clear Cart'}));

// expect(screen.getAllByTestId('foodItems').length).toBe(0);

// expect(screen.getByText('Your Cart Is Empty. Add Items to the Cart')).toBeInTheDocument();

});