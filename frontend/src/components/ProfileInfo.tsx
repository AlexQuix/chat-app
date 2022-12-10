import React from "react"
import { IconType } from "react-icons"

export default function ProfileInfo({
	Icon,
	title,
	text,
}: {
	title: string
	text: string | JSX.Element
	Icon: IconType
}) {
	return (
		<li className="list-group-item border-0 bg-transparent rounded-1">
			<div className="position-relative">
				<div className="text-gray-600 d-flex align-items-center gap-1">
					<Icon fontSize="1rem" />
					<p className="m-0 fw-bold">{title}</p>
				</div>

				{typeof text === "string" ? (
					<p className="m-0 text-gray-600">{text}</p>
				) : (
					text
				)}
			</div>
		</li>
	)
}
