import Contact from "./containers/Contact"
import Chat from "./containers/Chat"
import Profile from "./containers/Profile"
import Nav from "./components/Navbar"

import { useStateContext } from "./context"

export default function App() {
	let { darkMode } = useStateContext()
	return (
		<div className={`app ${darkMode && "dark"}`}>
			<div className="container-fluid d-flex flex-column min-vh-100 bg-prim-200 dark-bg-gray-800">
				<Nav />
				<div className="row justify-content-center">
					<div className="col-12 col-lg-6 col-xl-4 p-0 px-md-4">
						<Contact />
					</div>
					<div className="col-12 col-xl-4 order-lg-3 p-0 px-md-4">
						<Chat />
					</div>
					<div className="col-12 col-lg-6 order-lg-2 col-xl-4 p-0 px-md-4 px-xl-0">
						<Profile />
					</div>
				</div>
			</div>
		</div>
	)
}
