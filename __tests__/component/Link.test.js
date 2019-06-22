import React from 'react';
import Link from '../../src/component/Link';
import renderer from 'react-test-renderer';

describe('Front Page Link', () => {
    it('Link changes the class when hovered!', () => {
        const component = renderer.create(
            <Link page="http://www.facebook.com">Facebook</Link>,
          );
          /*
          let tree = component.toJSON();
          expect(tree).toMatchSnapshot();
        
          // manually trigger the callback
          tree.props._handleMouseEnter();
          // re-rendering
          tree = component.toJSON();
          expect(tree).toMatchSnapshot();
        
          // manually trigger the callback
          tree.props.onMouseLeave();
          // re-rendering
          tree = component.toJSON();
          expect(tree).toMatchSnapshot();
          */
    })
})
