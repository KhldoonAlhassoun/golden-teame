export interface Vote {
	id: string;
	emoji: string;
}

export const votes: Vote[] = [
	{ id: "vote-celebrate", emoji: "🎉" },
	{ id: "vote-happy", emoji: "😃" },
	{ id: "vote-Coffee", emoji: "☕" },
];

export interface TeamState {
	state: { key: string; value: string }[];
}

export interface TeamEventMean {
	type: string;
	value: number;
}
