const rn = require('react-native')
var mockListeners = new Set(), mockCanHandle = true, mockError = false;
jest.mock('Linking', () => {
	let toReturn = {
		addEventListener: jest.fn(),
		removeEventListener: jest.fn(),
		openURL: jest.fn(),
		canOpenURL: jest.fn(),
		getInitialURL: jest.fn(),
		configureMock: (newCanHandle, newError) => {
			mockCanHandle = newCanHandle;
			mockError = newError;
		}
	};
	toReturn.addEventListener.mockImplementation((type, func) => {
		return mockListeners.add(func);
	});
	toReturn.removeEventListener.mockImplementation((type, func) => {
		return mockListeners.delete(func);
	});
	toReturn.openURL.mockImplementation((url) => {
		if (mockError) {
			let error = new Error('Unknown error');
			for (let func1 of mockListeners)
				func1({url, error});
			throw error;
		}
		else
			for (let func1 of mockListeners)
				func1({url});
	});
	toReturn.canOpenURL.mockImplementation(url => {
		if (mockError)
			return new Promise((resolve, reject) => reject('Unknown error'));
		else
			return new Promise(resolve => resolve(mockCanHandle));
	});
	toReturn.getInitialURL.mockImplementation(() => "");
	return toReturn;
});
module.exports = rn;