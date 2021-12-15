import { gql, useMutation, useQuery, useSubscription } from "@apollo/client";
import { TeamEventMean, TeamState } from "./types";

const TEAM_ID = "goldenTeam"; // Change this to your own team id
const EMOTION_ID = "goldenTeam_emotions";

// Query example
const teamEventMeanQuery = gql`
	query TeamEventMean($team: String!) {
		teamEventMean(team: $team) {
			type
			value
		}
	}
`;
export const useTeamEventMean = () => {
	const { data } = useQuery<{ teamEventMean: TeamEventMean[] }>(
		teamEventMeanQuery,
		{
			variables: { team: EMOTION_ID },
			pollInterval: 1000,
		}
	);

	return data?.teamEventMean;
};

// Mutation example
const addTeamEventMutation = gql`
	mutation Mutation($input: TeamEventInput) {
		addTeamEvent(input: $input) {
			team
			type
			data
			timestamp
		}
	}
`;
export const useAddTeamEvent = () => {
	const [addTeamEvent] =
		useMutation<{ addTeamEvent: { timestamp: string } }>(
			addTeamEventMutation
		);

	return (eventType: string, mutationData: string, tabelId: string) =>
		addTeamEvent({
			variables: {
				input: {
					team: tabelId,
					type: eventType,
					data: mutationData,
				},
			},
		});
};

// Query + subscription example
const teamStateQuery = gql`
	query TeamState($team: String!) {
		teamState(team: $team) {
			state {
				value
				key
			}
		}
	}
`;
const teamStateSubscription = gql`
	subscription TeamStateChange($team: String!) {
		teamStateChange(team: $team) {
			state {
				value
				key
			}
		}
	}
`;
export const useTeamState = () => {
	const { data: initial } = useQuery<{ teamState: TeamState }>(
		teamStateQuery,
		{
			variables: { team: TEAM_ID },
		}
	);

	const { data: updated } = useSubscription<{ teamStateChange: TeamState }>(
		teamStateSubscription,
		{
			variables: { team: TEAM_ID },
		}
	);

	return updated?.teamStateChange ?? initial?.teamState;
};
