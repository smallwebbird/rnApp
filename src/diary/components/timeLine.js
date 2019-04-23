import React from 'react';
import { View, StyleSheet, TextInput, Image } from 'react-native';
import DeviceSize from '../../lib/deviceSize.js';

export default class TimeLine extends React.Component {
    render() {
        const { tabLabel } = this.props;
        return (
            <View tabLabel={tabLabel} style={Styles.container}>
                <View style={Styles.inputWrap}>
                    <TextInput 
                        style={Styles.inputStyle} 
                        placeholder="搜索标题，内容，时间，人物，位置"  
                        caretHidden={true}  
                        />
                    <Image source={require('../images/time_line_search.png')} style={Styles.searchImage}/>    
                </View>
                <View style={Styles.listStories}>

                </View>
            </View>
        )
    }
}

const Styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#E5E7E9'
    },
    inputWrap: {
        paddingTop: 5,
        paddingLeft: 5,
        paddingRight: 5,
        width: DeviceSize.deviceW,
        position: 'absolute'
    },
    inputStyle: {
        height: 30,
        backgroundColor: 'white',
        borderRadius: 20,
        paddingVertical: 0,
        textAlign: 'center'
        // 使用以上俩个属性能够使input内的文字垂直居中
    },
    searchImage: {
        position: 'absolute',
        width: 15,
        height: 15,
        right: 15,
        top: 12,
    },
    listStories: {
        flex: 1,
        marginTop: 35,
        backgroundColor: 'red'
    }
});