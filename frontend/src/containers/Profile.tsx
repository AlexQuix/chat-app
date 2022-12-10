import { AiOutlineMail, AiOutlinePhone } from "react-icons/ai"
import {
	HiOutlineLocationMarker,
	HiAtSymbol,
	HiUserGroup,
} from "react-icons/hi"
import { TbWorld } from "react-icons/tb"

import ProfileInfo from "../components/ProfileInfo"

export default function Profile() {
	return (
		<div className="container__component container-fluid bg-prim-100 dark-bg-gray-900 py-5 mb-4 shadow-sm rounded">
			<header className="border-bottom border-prim-300 dark-bd-gray-700">
				<div className="d-flex align-items-center flex-column">
					<div className="mb-1">
						<img
							className="img-thumbnail dark-bg-gray-700 dark-bd-gray-600 rounded-pill"
							src="/img/c1.webp"
							style={{ width: "6rem", height: "6rem" }}
							alt=""
						/>
					</div>
					<h5 className="text-gray-600 mb-4">Brandon Smith</h5>
					<button className="btn bg-prim-700-hover bg-prim-800 text-gray-100 mb-3 rounded-0 shadow">
						<div className="d-flex align-items-center gap-2">
							<AiOutlineMail fontSize="1.3rem" />
							<span
								className="text-capitalize small"
								style={{ whiteSpace: "nowrap" }}
							>
								send email
							</span>
						</div>
					</button>
					<p className="text-gray-500 small">
						Last Interacted:
						<span className="ms-2 fw-bold">Few hours back</span>
					</p>
				</div>
			</header>

			<div className="pt-3">
				<ul className="list-group gap-3">
					<ProfileInfo
						title="Email"
						text="support@coderthemes.com"
						Icon={HiAtSymbol}
					/>
					<ProfileInfo
						title="Phone Number"
						text="+1 456 9595 9594"
						Icon={AiOutlinePhone}
					/>
					<ProfileInfo
						title="Location"
						text="California, USA"
						Icon={HiOutlineLocationMarker}
					/>
					<ProfileInfo
						title="Languages"
						text="California, USA"
						Icon={TbWorld}
					/>
					<ProfileInfo
						title="Groups"
						text={
							<div className="d-flex gap-2">
								<span className="py-1 px-2 text-green bg-prim-200 dark-bg-gray-800">
									Work
								</span>
								<span className="py-1 px-2 text-red bg-prim-200 dark-bg-gray-800">
									Work
								</span>
							</div>
						}
						Icon={HiUserGroup}
					/>
				</ul>
			</div>
		</div>
	)
}
