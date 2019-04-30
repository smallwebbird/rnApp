import React from 'react';
import { View, StyleSheet, Image, Text, TouchableNativeFeedback } from 'react-native';
import { BoxShadow } from 'react-native-shadow';
import DeviseSize from '../../lib/deviceSize.js';

export default class RowItem extends React.Component {
    pressStory = () => {
        console.log('我这个文章集被点击了');
    }
    pressYear = () => {

    }
    render() {
        const { rowData } = this.props;
        return (
            <View style={Styles.container}>
                <TouchableNativeFeedback
                    onPress={this.pressYear}
                >
                    <View style={Styles.yearStyle}>
                        <View style={Styles.yearLeft}>
                            <Image source={require('../images/year_right.png')} style={{width: 5, height: 5, marginLeft: 20}}/>
                            <Text style={{paddingLeft: 10, fontSize: 15}}>{rowData.year}</Text>
                        </View>
                        <View style={Styles.yearRight}>
                            <Text style={{color: '#00FFFF', fontSize: 12, paddingRight: 15}}>打开该年</Text>
                            <Image source={require('../images/expansion_arrow.png')} style={{width: 10, height: 10, marginRight: 10}}/>
                        </View>
                    </View>
                </TouchableNativeFeedback>
                {
                    rowData.stories.map( (item1) => (
                        <View style={Styles.monthStyle}>
                        {
                            item1.story.map( (item2, index) => (
                                <View style={Styles.everyMonth}>
                                    <View style={Styles.monthText}>
                                        <Text style={{fontWeight: 'bold'}}>{index===0 ? item1.month : ''}</Text>
                                        <Text>{index===0 ? item1.day : ''}</Text>
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
                                            <BoxShadow setting={shadownStyle}>
                                                <View style={Styles.story}>
                                                    <Text>{item2.content}</Text>
                                                    <View style={Styles.comment}>
                                                        <Image source={require('../images/comment_bubble.png')} style={{width: 15, height: 15,resizeMode: 'contain'}}/>
                                                        <Text style={{paddingLeft: 5}}>{item2.comments}</Text>
                                                    </View>
                                                </View>
                                            </BoxShadow>
                                        </TouchableNativeFeedback>
                                    </View>
                                </View>
                            )  )
                        }
                        </View>
                    ) )
                }
            </View>
        )
    }
}

const shadownStyle = {
    width: DeviseSize.deviceW - 120,
    height: 60,
    color: '#808080',
    border: 2,
    opacity: 0.3,
    radius: 5,
    y: 2
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
    },
    everyMonth: {
        flex: 1,
        flexDirection: 'row'
    },
    monthText: {
        width: 30,
        alignItems: 'flex-end',
        paddingTop: 6,
    },
    storyIcon: {
        width: 40,
        paddingLeft: 12,
        paddingTop: 10
    },
    storyContent: {
        flex: 7,
        paddingLeft: 10,
        paddingTop: 10
    },
    story: {
        width: DeviseSize.deviceW - 120,
        height: 60,
        backgroundColor: 'white',
        borderRadius: 5,
        borderWidth: DeviseSize.onePixel,
        borderColor: 'silver',
        shadowColor: 'gray',
        position: 'relative',
    },
    comment: {
        position: 'absolute',
        right: 8,
        bottom: 10,
        flexDirection: 'row',
        alignItems: 'center',
        width:30,
        height: 20,
    }
});