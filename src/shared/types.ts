export interface Vote {
	id: string;
	emoji: string;
}

export const votes: Vote[] = [
	{ id: "vote-1", emoji: "🎉" },
	{ id: "vote-2", emoji: "😃" },
	{ id: "vote-3", emoji: "☕" },
];

export interface TeamState {
	state: { key: string; value: string }[];
}

export interface TeamEventMean {
	type: string;
	value: number;
}
