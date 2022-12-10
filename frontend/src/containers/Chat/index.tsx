import "./chat.scss"
import { HiOutlineEmojiHappy } from "react-icons/hi"
import { FiPaperclip } from "react-icons/fi"
import { AiOutlineSend } from "react-icons/ai"

// COMPONETS
import ChatMessage from "../../components/ChatMessage"

export default function Chat() {
	let data: Component.IChatMessageProps[] = [
		{
			isMyMsg: true,
			dataUser: {
				name: "Edwin",
				profileUrl: "/img/c1.webp",
			} as Models.IUser,
			dataMessage: {
				message: "Hola Como estas?",
				createdAt: "10:00 am",
			} as Models.IMessage,
		},
		{
			isMyMsg: false,
			dataUser: {
				name: "Edwin",
				profileUrl: "/img/c1.webp",
			} as Models.IUser,
			dataMessage: {
				message: "Hola Como estas?",
				createdAt: "10:01 am",
			} as Models.IMessage,
		},
	]

	return (
		<div className="container__component container-fluid px-0 pb-4 h-100">
			<div className="bg-prim-100 dark-bg-gray-900 h-100 d-flex flex-column shadow-sm rounded">
				<div className="p-3 flex-grow-1">
					<ul className="message__container list-group">
						{/* CHAT ITEM */}
						{data.map((value) => (
							<li className="list-group-item bg-transparent border-0">
								<ChatMessage {...value} />
							</li>
						))}
					</ul>
				</div>

				<div className="w-100 d-flex p-3 gap-2 bg-prim-200 dark-bg-gray-800 rounded">
					<div className="flex-grow-1">
						<input
							className="form-control border-0 shadow-none bg-transparent dark-gray-100"
							type="text"
							placeholder="Escribe un mensaje"
						/>
					</div>
					<button className="btn dark-bg-gray-700-hover text-prim-800 px-2">
						<HiOutlineEmojiHappy fontSize="1.2rem" />
					</button>
					<button className="btn dark-bg-gray-700-hover text-prim-800 px-2">
						<FiPaperclip fontSize="1.2rem" />
					</button>
					<button
						className="btn bg-prim-700-hover bg-prim-800 text-gray-100 px-2 px-md-3"
						style={{ boxSizing: "content-box" }}
					>
						<AiOutlineSend />
					</button>
				</div>
			</div>
		</div>
	)
}
