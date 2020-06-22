import { CREATE_POST } from "./types"
import { showAlert } from "./actions"

const forbidden = [
	'php',
	'fuck',
	'spam'
]

export const spamWordsMiddleware = ({ dispatch }) => {
	return next => {
		return action => {
			if (action.type === CREATE_POST) {
				const found = forbidden.filter(word => action.payload.title.includes(word));
				if (found.length) {
					return dispatch( showAlert('SPAM') );
				}
			}

			return next(action);
		}
	}
}