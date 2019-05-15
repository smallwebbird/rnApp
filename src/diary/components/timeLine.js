import React from 'react';
import { View, StyleSheet, TextInput, Image, Text, ImageBackground, TouchableNativeFeedback, StatusBar} from 'react-native';
import DeviceSize from '../../lib/deviceSize.js';
import { LargeList } from 'react-native-largelist-v3';
import RowItem from './rowItem';

export default class TimeLine extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            flatListData : [
                {
                    year: 2019,
                    fold: true,
                    items: [
                        [{
                            month: '一',
                            day: 1,
                            story: [
                                {
                                    content: 'hahahah',
                                    comments: 6
                                }
                            ]
                        },
                        {
                            month: '一',
                            day: 2,
                            story: [
                                {
                                    content: 'hahahah',
                                    comments: 6
                                },
                                {
                                    content: 'lalala',
                                    comments: 6
                                },
                                {
                                    content: 'lalala',
                                    comments: 6
                                },
                                {
                                    content: 'lalala',
                                    comments: 6
                                },
                                {
                                    content: 'lalala',
                                    comments: 6
                                },
                                {
                                    content: 'lalala',
                                    comments: 6
                                },
                                {
                                    content: 'lalala',
                                    comments: 6
                                },
                                {
                                    content: 'lalala',
                                    comments: 6
                                }
                            ]
                        }]
                    ]
                        
                }
            ]
        }
    }
    componentDidMount() {
        console.log('---------------------',this.props);
        console.log(StatusBar.currentHeight)
    }
    inputPress = () => {
       const { router } = this.props;
       router.navigate('Search');
    }
    render() {
        const { tabLabel } = this.props;
        console.log('22323232323',RowItem)
        return (
            <View tabLabel={tabLabel} style={Styles.container}>
                <View style={Styles.inputWrap}>
                    <TouchableNativeFeedback
                        onPress={this.inputPress}
                    >
                        <View style={Styles.inputStyle}>
                            <Text>搜索标题，内容，时间，人物，位置</Text>
                        </View>
                    </TouchableNativeFeedback>
                    <Image source={require('../images/time_line_search.png')} style={Styles.searchImage}/>    
                </View> 
                <View style={Styles.list}>
                    <LargeList 
                        style={{flex: 1}}
                        data={this.state.flatListData}
                        renderSection={() => null}
                        heightForIndexPath={() => 100}
                        renderSection={ (section) => null }
                        renderIndexPath={({section, row}) => <RowItem story={this.state.flatListData[section]}/>}
                    />
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
        width: DeviceSize.deviceW,
        position: 'absolute',
        height: 40,
        backgroundColor: '#E5E7E9',
        padding: 5,
    },
    inputStyle: {
        flex: 1,
        backgroundColor: 'white',
        borderRadius: 20,
        justifyContent: 'center',
        alignItems: 'center',
    },
    searchImage: {
        position: 'absolute',
        width: 15,
        height: 15,
        right: 15,
        top: 12,
    },
    list: {
        width: DeviceSize.deviceW,
        height: DeviceSize.deviceH - 155 - StatusBar.currentHeight,
        marginTop: 45,
        backgroundColor: 'red'
    }
});