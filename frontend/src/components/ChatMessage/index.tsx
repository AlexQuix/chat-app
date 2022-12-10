export default function ChatMessage({
	isMyMsg,
	dataUser,
	dataMessage,
}: Component.IChatMessageProps) {
	return (
		<div className={`message${isMyMsg ? "--reverse" : ""} d-flex gap-4`}>
			<div>
				<div
					className="rounded overflow-hidden"
					style={{ width: "3.4rem", height: "3.4rem" }}
				>
					<img src={dataUser.profileUrl} alt="" />
				</div>
				<p className="mb-0 mt-1 small text-muted text-center">
					{dataMessage.createdAt}
				</p>
			</div>
			<div className="message__text position-relative rounded px-3 py-2 align-self-start">
				<p className="mb-0 mb-md-1 small text-gray-300">
					{dataUser.name}
				</p>
				<p className="mb-0 text-gray-100">{dataMessage.message}</p>
			</div>
		</div>
	)
}
