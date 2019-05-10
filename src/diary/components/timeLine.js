import React from 'react';
import { View, StyleSheet, TextInput, Image, Text, ImageBackground} from 'react-native';
import DeviceSize from '../../lib/deviceSize.js';
import RowItem from '../components/rowItem.js';
import PageListView from 'react-native-page-listview';

export default class TimeLine extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            flatListData : [
                {
                    year: 2019,
                    fold: true,
                    stories: [
                        {
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
                        }
                    ]
                        
                }
            ]
        }
    }
    componentDidMount() {
    }
    renderRow=(rowData,index)=>{
        return <RowItem rowData={rowData}/>;
    }
    refresh=(callback)=>{
       window.setTimeout(()=>{
            console.log('-----------------------------------')
            this.setState({
                flatListData: [...this.state.flatListData]
            })
            callback(this.state.flatListData);
        }, 3000)
    }
    loadMore=(callback)=>{
        window.setTimeout(()=>{
            console.log('-----------------------------------')
            this.setState({
                flatListData: [...this.state.flatListData]
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
                            renderLoadMore={this.renderLoadMore}
                            renderRefreshView={this.renderRefreshView}
                            renderRefreshViewH={40}
                            allLen={10}
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
        marginTop: 40,
        height: 40,
        alignItems: 'center',
        justifyContent: 'center',
    },
    pullRelease: {
        marginTop: 40,
        height: 40,
        alignItems: 'center',
        justifyContent: 'center',
    },
    pulling: { 
        marginTop: 40,
        height: 40,  
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