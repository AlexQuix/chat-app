import { useState, createContext, useContext } from "react"

const StateContext = createContext({} as Context.IStateContext)

export function ContextProvider({ children }: { children: JSX.Element }) {
	let [darkMode, setDarkMode] = useState(false)

	return (
		<StateContext.Provider
			value={{
				darkMode,
				setDarkMode,
			}}
		>
			{children}
		</StateContext.Provider>
	)
}

export const useStateContext = () => useContext(StateContext)
