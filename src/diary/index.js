import React from 'react';
import { View, Text, StatusBar, StyleSheet } from 'react-native';
import DiaryHeader from './components/header.js';
import ScrollableTabView from 'react-native-scrollable-tab-view';
import Story from './components/stories.js';
import TimeLine from './components/timeLine.js';


export default class DiaryTab extends React.Component{
    render(){
        console.log(this.props.navigation);
        return (
            <View style={Styles.container}>
                <StatusBar
                    backgroundColor='black'
                    translucent={true}
                    animated={true}
                />
                <ScrollableTabView
                    tabBarPosition='top'//tabBarPosition默认top  位于屏幕顶部   bottom位于屏幕底部  overlayTop悬浮在顶部
                    initialPage={0} //初始化时被选中的Tab下标，默认是0
                    locked={false}//表示手指是否能拖动视图  默认false  true则不能拖动,只可点击
                    renderTabBar={() => <DiaryHeader statusHeight={StatusBar.currentHeight} />}
                >
                    <TimeLine tabLabel="时间轴" />
                    <Story tabLabel="故事集" />
                </ScrollableTabView>
            </View>
        )
    }
} 

const Styles = StyleSheet.create({
    container: {
        flex:1,
    }
})