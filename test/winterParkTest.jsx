import ReactDOM from 'react-dom';
import ReactTestUtils from 'react-addons-test-utils';

import WinterParkCamera from '../src/winterPark/winterParkComponent.jsx';

describe('WinterParkCamera', () => {
    var renderedDOM, element;
    beforeEach(() => {
        element = ReactTestUtils.renderIntoDocument(
            <WinterParkCamera/>
        );

        // Note: This operation strips the top level element tag.
        renderedDOM = () => ReactDOM.findDOMNode(element)
    });

    it('renders', () => {
        expect(renderedDOM().querySelectorAll('p')[0].innerHTML).toContain("Winter Park Image!");
    });
});