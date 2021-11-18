import React from "react";
import { Router } from "react-router-dom";
import { render } from "@testing-library/react";
import { createMemoryHistory } from "history";

export default function renderWithRouter(
    ui,
    {
        route = "/",
        history = createMemoryHistory({ initialEntries: [route] })
    } = {}
) {
    return {
        ...render(<Router navigator={history} location={history.location}>{ui}</Router>),
        history
    };
}