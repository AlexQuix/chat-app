import { AiOutlineSearch } from "react-icons/ai"

export default function Search() {
	return (
		<div className="d-flex align-items-center gap-3 dark-white">
			<div>
				<AiOutlineSearch fontSize="1.3rem" />
			</div>
			<input
				className="form-control p-0 bg-transparent border-0 shadow-none dark-white"
				placeholder="People, groups & messages..."
				type="text"
			/>
		</div>
	)
}
