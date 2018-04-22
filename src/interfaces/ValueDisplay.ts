import { GameStates } from '../components/GameStates';

export interface ValueDisplayProps {
	mode: GameStates;
	value: string;
	focusOn: boolean;
	onPress: (focusOn: boolean) => void;
	onWordFadeOut?: () => void;
}
