import Contact from "../../components/Contact"
import Search from "../../components/Search"

export default function ContainerContact() {
	let dataContact: IContact = {
		contactName: "Edwin Alexander",
		messagesNotViewed: 4,
		profileUrl: "/img/c1.webp",
		lastMessage: {
			_id: "",
			message: "How are you?",
			createdAt: "4:30 am",
			contactId: "",
			viewed: false,
		},
	}

	return (
		<div className="container__component pb-4 rounded h-100">
			<div className="bg-prim-100 dark-bg-gray-900 h-100 shadow-sm">
				<header className="border-bottom dark-bg-gray-800 border-prim-300 dark-bd-gray-800">
					<ul className="pagination m-0">
						<li className="page-item active">
							<button className="page-link dark-white-hover dark-bg-gray-800 dark-bg-gray-700-hover rounded-0 px-4 border-0">
								All
							</button>
						</li>
						<li className="page-item">
							<button className="page-link dark-white-hover dark-bg-gray-800 dark-bg-gray-700-hover rounded-0 px-4 border-0">
								Favoritos
							</button>
						</li>
						<li className="page-item">
							<button className="page-link dark-white-hover dark-bg-gray-800 dark-bg-gray-700-hover rounded-0 px-4 border-0">
								Amigos
							</button>
						</li>
						<li className="page-item">
							<button className="page-link dark-white-hover dark-bg-gray-800 dark-bg-gray-700-hover rounded-0 px-4 border-0">
								Grupos
							</button>
						</li>
					</ul>
				</header>
				<div className="py-3 position-relative">
					{/* SEARCH CONTACT */}
					<div className="px-3">
						<div className="px-4 py-2 mb-3 rounded bg-prim-200 dark-bg-gray-800">
							<Search />
						</div>
					</div>

					{/* CHAT LIST */}
					<ul className="list-group list-group-flush gap-1">
						{/* CHAT ITEM */}
						<li className="list-group-item px-3 c-pointer bg-prim-200-hover dark-bg-gray-800-hover dark-bd-gray-700 bg-transparent py-3 px-0">
							<Contact {...dataContact} />
						</li>
						<li className="list-group-item px-3 c-pointer bg-prim-200-hover dark-bg-gray-800-hover dark-bd-gray-700 bg-transparent py-3 px-0">
							<Contact {...dataContact} />
						</li>
						<li className="list-group-item px-3 c-pointer bg-prim-200-hover dark-bg-gray-800-hover dark-bd-gray-700 bg-transparent py-3 px-0">
							<Contact {...dataContact} />
						</li>
					</ul>
				</div>
			</div>
		</div>
	)
}
