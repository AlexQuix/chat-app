import { useEffect } from "react"
import { useStateContext } from "../../context"
import { FaSun, FaMoon } from "react-icons/fa"

export default function Navbar() {
	let { darkMode, setDarkMode } = useStateContext()

	useEffect(() => {
		let darkModeStoraged = localStorage.getItem("DARK_MODE")
		setDarkMode(Boolean(darkModeStoraged))
	}, [])
	useEffect(() => {
		localStorage.setItem("DARK_MODE", darkMode.toString())
	}, [darkMode])

	return (
		<header className="mb-4">
			<nav className="navbar bg-light">
				<div className="container-fluid">
					<a
						href="/"
						className="navbar-brand fs-3 fw-bold dark-gray-100"
					>
						Chat
					</a>
					{/* THEME BUTTON */}
					<button
						className="btn px-2 bg-gray-600 dark-bg-prim-800 rounded-pill text-white"
						onClick={() => setDarkMode(!darkMode)}
					>
						<div
							className="position-relative"
							style={{ minWidth: "40px" }}
						>
							<div
								className="position-relative d-flex"
								style={{
									width: "min-content",
									transition: "700ms",
									left: `${darkMode ? "23" : "0"}px`,
								}}
							>
								{darkMode ? <FaMoon /> : <FaSun />}
							</div>
						</div>
					</button>
				</div>
			</nav>
		</header>
	)
}
