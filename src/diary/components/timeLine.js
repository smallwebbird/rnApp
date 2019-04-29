import React from 'react';
import { View, StyleSheet, TextInput, Image, SectionList, Text, ImageBackground} from 'react-native';
import DeviceSize from '../../lib/deviceSize.js';
import RowItem from '../components/rowItem.js';
import PageListView from 'react-native-page-listview';

export default class TimeLine extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            flatListData : [{
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
            }
            ]
        }
    }
    componentDidMount() {
    }
    renderRow=(rowData,index)=>{
        return <RowItem />;
    }
    refresh=(callback)=>{
       window.setTimeout(()=>{
            console.log('-----------------------------------')
            this.setState({
                flatListData: [...this.state.flatListData, {key: '1111', text: 'asddadasdas'}]
            })
            callback(this.state.flatListData);
        }, 3000)
    }
    loadMore=(callback)=>{
        window.setTimeout(()=>{
            console.log('-----------------------------------')
            this.setState({
                flatListData: [...this.state.flatListData, {key: '1111', text: 'asddadasdas'}]
            })
            callback(this.state.flatListData);
        }, 2000)
    }
    renderRefreshView=(pullState)=>{
        switch (pullState){
            case 'pullOk':
                return <View style={Styles.pullOk}>
					<View style={Styles.ingWrap}>
                        <View style={Styles.freshImg}>
                            <Image source={require('../images/up.png')} style={{width: 20, height: 30, resizeMode: 'cover'}}/>
                        </View>
                        <View style={Styles.freshFont}>
                            <Text style={Styles.tipFont}>释放立即同步</Text>
                            <Text style={Styles.lastTipFont}>上次同步：04-28 22:45:00</Text>
                        </View>
                    </View>
                </View>;
                break;
            case 'pullRelease':
                return <View style={Styles.pullRelease}>
                    <View style={Styles.ingReleaseWrap}>
                        <Text>同步成功</Text>
                    </View>
                </View>;
                break;
            case '':
            case 'pulling':
            default:
                return <View style={Styles.pulling}>
					<View style={Styles.ingWrap}>
                        <View style={Styles.freshImg}>
                            <Image source={require('../images/down.png')} style={{width: 20, height: 30, resizeMode: 'cover'}}/>
                        </View>
                        <View style={Styles.freshFont}>
                            <Text style={Styles.tipFont}>下拉即可同步</Text>
                            <Text style={Styles.lastTipFont}>上次同步：04-28 22:45:00</Text>
                        </View>
                    </View>
                </View>;
                break;
        }
    };
    renderLoadMore=()=>{
        return(
            <View style={{}}><Text>上啦加载哈哈哈</Text></View>
        );
    };
    renderNoMore=()=>{
            return(
                <View style={{}}><Text>没有更多数据了哈哈哈</Text></View>
            );
        };
    renderEmpty=()=>{return(
        <ImageBackground source={require('../images/time_empty.png')} style={Styles.emptyBack}>
            <View style={Styles.emptyData}>
            </View>
        </ImageBackground>);}
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
                        <PageListView 
                            renderRow={this.renderRow} 
                            pageLen={20} 
                            refresh={this.refresh} 
                            loadMore={this.loadMore}
                            renderLoadMore={this.renderLoadMore}
                            renderRefreshView={this.renderRefreshView}
                            // renderNoMore={this.renderNoMore}
                            refreshEnable={true}
                        />
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
    pullOk: {
        marginTop: 60,
        height: 40,
        alignItems: 'center',
        justifyContent: 'center',
    },
    pullRelease: {
        marginTop: 60,
        height: 40,
        alignItems: 'center',
        justifyContent: 'center',
    },
    pulling: {
        marginTop: 60,     
        alignItems: 'center',
        justifyContent: 'center',
    },
    emptyData: {
    },
    emptyBack: {
        flex: 1,
        resizeMode: 'center'
    },
    ingWrap: {
        height: 40,
        width: 200,
        flexDirection: 'row',
    },
    ingReleaseWrap: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    freshImg: {
        flex: 1,
        alignItems: 'flex-end',
        justifyContent: 'center',
    },
    freshFont: {
        flex: 3,
    },
    tipFont: {
        flex: 1,
        lineHeight: 20,
        textAlign: 'center'
    },
    lastTipFont: {
        flex: 1,
        fontSize: 10,
        lineHeight: 20,
        textAlign: 'center'
    }
});