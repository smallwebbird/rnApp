import React from 'react';
import { Image } from 'react-native';

export default class TabIcon extends React.Component {
    render() {
        let { focused, imageSource, selectImageSource } = this.props;
        let imageUrl = focused ? selectImageSource : imageSource;
        return (
            <Image 
                source={imageUrl}
                style={{width: 20, height: 20,marginTop: 8}}
            />
        )
    }
}