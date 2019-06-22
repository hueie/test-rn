import React, {Component} from 'react';
import {Linking, Text, StyleSheet} from 'react-native';

const STATUS = {
    HOVERED: 'hovered',
    NORMAL: 'normal',
};

export default class Link extends Component{
    constructor(props){
        super(props);
        console.log(props);
        this.state = {
            class: STATUS.NORMAL,
        };
    }

    _handleMouseEnter = () => {
        this.setState({class: STATUS.HOVERED});
    }

    _handleMouseLeave = () => {
        this.setState({class: STATUS.NORMAL});
    }

    _goToURL = () => {
        Linking.canOpenURL(this.props.page).then(supported => {
          if (supported) {
            Linking.openURL(this.props.page);
          } else {
            console.log('Don\'t know how to open URI: ' + this.props.page);
          }
        });
    }

    render(){
        return (
            <Text 
                onPress={this._goToURL}
                onMouseEnter={this._handleMouseEnter}
                onMouseLeave={this._handleMouseLeave}
                >
                {this.props.children}
            </Text>
        );

    }
}