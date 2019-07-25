import React, { Component } from 'react';
import { Text, TouchableOpacity, Linking } from 'react-native';
import { UsbSerial } from 'react-native-usbserial';

const usbs = new UsbSerial();

// 1. Changed to a class based component
class MyButton extends Component {
    constructor(props) {
        super(props);
    }

    async getDeviceAsync () {
        // Should be async Function
        try {
            const deviceList = await usbs.getDeviceListAsync();
            const firstDevice = deviceList[0];
            
            console.log(firstDevice);
    
            if (firstDevice) {
                const usbSerialDevice = await usbs.openDeviceAsync(firstDevice);
                
                console.log(usbSerialDevice);
            }
        } catch (err) {
            console.warn(err);
        }
    }

    // 2. Custom function called onPress TouchableOpacity
    onPressHandler = () => {
        getDeviceAsync();

        const { onPress, url } = this.props
        if (url) {
            Linking.openURL(url)
        }
        onPress()
    }

    render(){
        const { buttonStyle, textStyle } = styles;
        const { label, primary } = this.props;

        // 3. Change color of button depending on 'primary' prop
        const newButtonStyle = primary ? buttonStyle : [buttonStyle, { backgroundColor: '#f34541', borderBottomColor: '#a43532' }];

        return (
            <TouchableOpacity onPress={this.onPressHandler} style={newButtonStyle}>
                <Text style={textStyle}>
                    {label}
                </Text>
            </TouchableOpacity>
        );
    }
};

MyButton.defaultProps = {
    primary: true,
}

const styles = {
    textStyle: {
        alignSelf: 'center',
        color: '#fff',
        fontSize: 16,
        fontWeight: '600',
    },
    buttonStyle: {
        height: 45,
        alignSelf: 'stretch',
        justifyContent: 'center',
        backgroundColor: '#38ba7d',
        borderBottomWidth: 6,
        borderBottomColor: '#1e6343',
        borderWidth: 1,
        marginLeft: 15,
        marginRight: 15
    }
};

export default MyButton;