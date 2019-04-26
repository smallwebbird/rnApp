import React from 'react';
import { View, StyleSheet, TextInput, Image, SectionList, Text, PanResponder, FlatList } from 'react-native';
import DeviceSize from '../../lib/deviceSize.js';
import {PullListView} from 'react-native-rk-pull-to-refresh';


export default class TimeLine extends React.Component {
    constructor(props) {
        super(props);
        this.dataSource =
            new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2}).cloneWithRows(this.getDataSource())
    }
    _renderRow = (rowData) => {
        return (
            <View style={{width: width, height: 50, justifyContent: 'center', alignItems: 'center'}}>
                <Text>{rowData}</Text>
            </View>);
    }
    getDataSource = () => {
        let array = new Array();
        for (let i = 0; i < 50; i++) {
            array.push(`ListViewItem:${i + 1}`);
        }
        return array;
    }
    _onPullRelease = () => {
        setTimeout(() => {
            this.pull && this.pull.finishRefresh()
        }, 2000)
    }
    componentDidMount() {
        this.pull && this.pull.startRefresh()
    }
    render() {
        const { tabLabel } = this.props;
        var flatListData = [{
            key: 'a',
            text: '444'
        },{
            key: 'b',
            text: '333'
        },{
            key: 'c',
            text: '2222'
        },{
            key: 'd',
            text: '111'
        },
        {
            key: 'e',
            text: '444'
        },{
            key: 'f',
            text: '333'
        },{
            key: 'g',
            text: '2222'
        },{
            key: 'h',
            text: '111'
        },
        {
            key: 'l',
            text: '444'
        },{
            key: 'm',
            text: '333'
        },{
            key: 'n',
            text: '2222'
        },{
            key: 'o',
            text: '111'
        },
        {
            key: 'aa',
            text: '444'
        },{
            key: 'bb',
            text: '333'
        },{
            key: 'sdc',
            text: '2222'
        },{
            key: 'dsad',
            text: '111'
        },
        {
            key: 'ecx',
            text: '444'
        },{
            key: 'fda',
            text: '333'
        },{
            key: 'gdfas',
            text: '2222'
        },{
            key: 'hasd',
            text: '111'
        },
        {
            key: 'lsdcasd',
            text: '444'
        },{
            key: 'mdsa',
            text: '333'
        },{
            key: 'nasd',
            text: '2222'
        },{
            key: 'oadsa',
            text: '111'
        },
        ];
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
                        <View style={Styles.loadingStyle}>
                            <Text>哈哈哈</Text>
                        </View>
                        <PullListView
                            ref={(c) => this.pull = c}
                            isContentScroll={true}
                            style={{flex: 1}}
                            onPushing={this.props.onPushing}
                            onPullRelease={this._onPullRelease}
                            dataSource={this.dataSource}
                            renderRow={this._renderRow}/>
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
        padding: 5,
        width: DeviceSize.deviceW,
        position: 'absolute',
        zIndex: 10,
        backgroundColor: '#E5E7E9'
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
        backgroundColor: 'green',
        zIndex: -1000
    },
    loadingStyle: {
        height: 40,
        backgroundColor: 'yellow',
        marginTop: -40
        // transform: [{translateY: -40}],
    },
    stories: {
        backgroundColor: 'green'
    }
});