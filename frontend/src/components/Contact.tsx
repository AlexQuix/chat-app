export default function Contact({
	contactName,
	lastMessage,
	messagesNotViewed,
	profileUrl,
}: IContact) {
	return (
		<div className="d-flex gap-2 rounded">
			<div
				className="rounded-pill overflow-hidden"
				style={{ width: "3.5rem", height: "3.5rem" }}
			>
				<img src={profileUrl} />
			</div>
			<div className="flex-grow-1">
				<p className="fs-6 fw-bold mb-0 text-gray-500 dark-gray-600">
					{contactName}
				</p>
				<p className="mb-0 text-gray-700 dark-gray-500">
					{lastMessage.message}
				</p>
			</div>
			<div>
				<p className="fw-bold text-gray-500 dark-gray-600 mb-1 small">
					{lastMessage.createdAt}
				</p>
				<p className="mb-0 text-end">
					<span className="px-1 rounded text-red bg-prim-200 dark-bg-gray-800 bg-opacity-25">
						{messagesNotViewed}
					</span>
				</p>
			</div>
		</div>
	)
}
