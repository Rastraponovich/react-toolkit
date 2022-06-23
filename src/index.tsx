import React from "react"
import ReactDOM from "react-dom/client"
import "./index.css"
import { BrowserRouter } from "react-router-dom"
import { App } from "./app"
import { Provider } from "react-redux"
import { store } from "app/providers"

const rootDocument = document.getElementById("root")

try {
    const root = ReactDOM.createRoot(rootDocument!)
    root.render(
        <Provider store={store}>
            <BrowserRouter>
                <App />
            </BrowserRouter>
        </Provider>
    )
} catch (error) {
    throw new Error("document not found")
}
