export default function ContactItem() {
	return (
		<div className="d-flex gap-2 rounded">
			<div
				className="rounded-pill overflow-hidden"
				style={{ maxWidth: "55px", aspectRatio: "1" }}
			>
				<img src="/img/c1.webp" />
			</div>
			<div className="flex-grow-1">
				<p className="fs-6 fw-bold mb-0">Brandon Smith</p>
				<p className="mb-0 text-muted">How are you today</p>
			</div>
			<div>
				<p className="fw-bold text-muted mb-1 small">4:30am</p>
				<p className="mb-0 text-end">
					<span className="px-1 rounded text-danger bg-danger bg-opacity-25">
						3
					</span>
				</p>
			</div>
		</div>
	)
}
