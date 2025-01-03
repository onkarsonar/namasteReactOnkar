import React from "react";
import { render, screen } from "@testing-library/react";
import RestaurantCard from "../RestaurantCard";
import "@testing-library/jest-dom";
import MOCK_DATA from "../mocks/resCardMock.json"

it('should render restaurant card compoennt with props data',()=>{
    render(<RestaurantCard resData={MOCK_DATA}/>);
    const name = screen.getByText("Domino's Chicken Fiesta");
    expect(name).toBeInTheDocument();
})