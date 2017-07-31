/*global jest, require, module, console*/
/*eslint no-console: "off"*/
const rn = require("react-native");
var mockListeners = new Set(), mockCanHandle = true, mockError = false;
jest.mock("Linking", () => {
	let toReturn = {
		addEventListener: jest.fn(),
		removeEventListener: jest.fn(),
		removeAllEventListeners: jest.fn(),
		openURL: jest.fn(),
		canOpenURL: jest.fn(),
		getInitialURL: jest.fn(),
		configureMock: (newCanHandle, newError) => {
			mockCanHandle = newCanHandle;
			mockError = newError;
		},
		makeArtificialErrorEvent: (error) => {
			let mockListenersSnapshot = new Set(mockListeners);
			for (let func1 of mockListenersSnapshot)
				func1(error);
		}
	};
	toReturn.removeAllEventListeners.mockImplementation(() => {
		mockListeners.clear();
	});
	toReturn.addEventListener.mockImplementation((type, func) => {
		return mockListeners.add(func);
	});
	toReturn.removeEventListener.mockImplementation((type, func) => {
		return mockListeners.delete(func);
	});
	toReturn.openURL.mockImplementation((url) => {
		if (mockError)
			throw {url, error: "Unknown error"};
		else
			for (let func1 of mockListeners)
				func1({url});
	});
	toReturn.canOpenURL.mockImplementation(url => {
		console.log(`Mocking opening URL ${url}`);
		return new Promise(resolve => resolve(mockCanHandle));
	});
	toReturn.getInitialURL.mockImplementation(() => null);
	return toReturn;
});
module.exports = rn;
