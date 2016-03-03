var React = require('react/react-with-addons.js');
var ReactTestUtils = React.addons.TestUtils

var WinterParkCamera = require('../src/winterPark/winterParkComponent.jsx');

describe('WinterParkCamera', () => {
    var element;
    beforeEach(() => {
        element = ReactTestUtils.renderIntoDocument(<WinterParkCamera/>);
    });

    it('renders', () => {
        expect(element).toBe(undefined);
    });
});