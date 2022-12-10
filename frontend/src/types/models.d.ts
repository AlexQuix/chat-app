namespace Models {
	interface IMessage {
		_id: string
		contactId: string
		message: string
		viewed: boolean
		createdAt: string
	}

	interface IUser {
		_id: string
		name: string
		profileUrl: string
		email: string
		number: string
		location: string
		languages: string[]
		groups: string[]
		createdAt: string
	}
}
