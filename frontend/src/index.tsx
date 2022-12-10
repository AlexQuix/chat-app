import "./sass/main.scss"
import React from "react"
import ReactDOM from "react-dom"

import { ContextProvider } from "./context"

import App from "./App"

let root = document.getElementById("root")
ReactDOM.render(
	<React.StrictMode>
		<ContextProvider>
			<App />
		</ContextProvider>
	</React.StrictMode>,
	root
)
