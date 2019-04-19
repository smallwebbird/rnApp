import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

export default class Header extends React.Component {
    render(){
        const { statusHeight } = this.props;
        return (
            <View style={{...Styles.container, paddingTop: statusHeight}}>
                <Image style={Styles.calendarIcon} source={require('../../images/calendar_chooser.png')} />
                <View style={Styles.swiperTab}>
                    <Text>11111</Text>
                </View>
                <Image style={Styles.selectIcon} source={require('../../images/calendar_chooser.png')} />
            </View>
        )
    }
}

const Styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        backgroundColor: 'red',
        height: 60,
        flex:1,
    },
    calendarIcon: {
        flexGrow: 1,
        backgroundColor: '#423432'
    },
    selectIcon: {
        flexGrow: 1,
        backgroundColor: '#424532'
    },
    swiperTab: {
        flexGrow: 2,
        backgroundColor: '#823411'
    }
})
