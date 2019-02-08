export interface CalmGameIconButtonOwnProps {
	navigate: (destination: string) => void;
}

export interface CalmGameIconButtonStateProps {
	goToIntro: boolean;
}

export type CalmGameIconButtonProps = CalmGameIconButtonOwnProps &
	CalmGameIconButtonStateProps;
