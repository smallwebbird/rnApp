import React from 'react';
import { View, StyleSheet, Image, Text, TouchableNativeFeedback } from 'react-native';
import DeviseSize from '../../lib/deviceSize.js';

export default class RowItem extends React.Component {
    pressStory = () => {
        console.log('我这个文章集被点击了');
    }
    render() {
        return (
            <View style={Styles.container}>
                <View style={Styles.yearStyle}>
                    <View style={Styles.yearLeft}>
                        <Image source={require('../images/year_right.png')} style={{width: 5, height: 5, marginLeft: 20}}/>
                        <Text style={{paddingLeft: 10, fontSize: 15}}>2019</Text>
                    </View>
                    <View style={Styles.yearRight}>
                        <Text style={{color: '#00FFFF', fontSize: 12, paddingRight: 15}}>打开该年</Text>
                        <Image source={require('../images/expansion_arrow.png')} style={{width: 10, height: 10, marginRight: 10}}/>
                    </View>
                </View>
                <View style={Styles.monthStyle}>
                    <View style={Styles.everyMonth}>
                        <View style={Styles.monthText}>
                            <Text>24</Text>
                            <Text>四月</Text>
                        </View>
                        <View style={Styles.storyIcon}>
                            <Image 
                                source={require('../images/word_black.png')}
                                style={{
                                    width: 20,
                                    height: 20,
                                }}
                            />
                        </View>
                        <View style={Styles.storyContent}>
                            <TouchableNativeFeedback
                                onPress={this.pressStory}
                            >
                                <View style={Styles.story}>

                                </View>
                            </TouchableNativeFeedback>
                        </View>
                    </View>
                </View>
            </View>
        )
    }
}

const Styles = StyleSheet.create({
    container: {
        marginTop: 5,
        justifyContent: 'center',
        alignItems: 'center',
    },
    yearStyle: {
        width: DeviseSize.deviceW - 100,
        height: 30,
        flexDirection: 'row',
        backgroundColor: 'white'
    },
    yearLeft: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
    },
    yearRight: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-end',
    },
    monthStyle: {
        paddingLeft: 20,
        paddingRight: 20,
        width: DeviseSize.deviceW,
        height: 100,
        backgroundColor: 'yellow'
    },
    everyMonth: {
        flex: 1,
        backgroundColor: 'black',
        flexDirection: 'row'
    },
    monthText: {
        flex: 1,
        width: 75,
        backgroundColor: 'pink',
        alignItems: 'flex-end',
        paddingTop: 6,
    },
    storyIcon: {
        flex: 1,
        backgroundColor: 'red',
        alignItems: 'flex',
        paddingTop: 10
    },
    storyContent: {
        flex: 7,
        backgroundColor: 'green',
        paddingLeft: 20,
        paddingRight: 20,
        paddingTop: 10
    },
    story: {
        height: 60,
        backgroundColor: 'white',
        borderRadius: 5,
        borderWidth: 1,
        borderColor: 'gray',
    }
});