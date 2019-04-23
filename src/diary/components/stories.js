import React from 'react';
import { View } from 'react-native';

export default class Story extends React.Component {
    render() {
        const { tabLabel } = this.props;
        return (
            <View tabLabel={tabLabel}>
                <View>
                    
                </View>
            </View>
        )
    }
}