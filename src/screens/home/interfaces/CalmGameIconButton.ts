export interface CalmGameIconButtonOwnProps {
	navigate: (destination: string) => void;
}

export interface CalmGameIconButtonStateProps {
	goToIntro: boolean;
	gamePoints: number;
}

export interface CalmGameIconButtonDispatchProps {
	removeCachedGamePoint: () => void;
}

export type CalmGameIconButtonProps = CalmGameIconButtonOwnProps &
	CalmGameIconButtonStateProps &
	CalmGameIconButtonDispatchProps;
