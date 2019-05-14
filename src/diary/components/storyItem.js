import React from 'react';
import { View, StyleSheet, Image, Text } from 'react-native';
import DeviceSize from '../../lib/deviceSize.js';

export default class StoryItem extends React.Component {
    render() {
        const { story } = this.props; 
        console.log(story)
        return (
            <View style={Styles.container}>
            {
                story.map((value, index) => (
                    <View style={Styles.story} key={index}>
                        <Image 
                            source={value.picUrl}
                            style={Styles.storyIcon}
                        />
                        <View style={Styles.storyName}><Text>{value.sort}</Text></View>
                        <View style={Styles.storyNum}><Text style={{fontSize: 10, color: 'gray'}}>故事{value.num}</Text></View>
                    </View>
                ))
            }
            </View>    
        )
    }
}

const Styles = StyleSheet.create({
    container: {
        height: 150,
        width: DeviceSize.deviceW,
        flexDirection: 'row',
    },
    story: {
        width: DeviceSize.deviceW/3,
        alignItems: 'center',
        paddingTop: 5,
    },
    storyIcon: {
        width: DeviceSize.deviceW/3 - 20,
        height: DeviceSize.deviceW/3 - 20,
        borderRadius: 5,
    },
    storyName: {
        width: DeviceSize.deviceW/3 -20,
        alignItems: 'flex-start'
    },
    storyNum: {
        width: DeviceSize.deviceW/3 -20,
        alignItems: 'flex-start',
    }
});