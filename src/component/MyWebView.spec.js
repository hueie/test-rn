import React from 'react';
import {shallow} from 'enzyme';
import MyWebView from './MyWebView'

describe('MyWebView', () => {
    describe('Rendering', () => {
        it('should contain WebView', () => {
            //If you test redering, before you did, you should check -- -u "Renewering Snapshot" 
            const component = shallow(<MyWebView></MyWebView>);
            expect(component).toMatchSnapshot();
        })
    })
    describe('Functionality', () => {

    })
    describe('Interaction', () => {

    })
})