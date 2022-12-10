namespace Context {
	type SetStateAction<T> = React.Dispatch<React.SetStateAction<T>>

	interface IStateContext {
		darkMode: boolean
		setDarkMode: SetStateAction<boolean>
	}
}
