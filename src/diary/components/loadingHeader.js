import { RefreshHeader } from "react-native-spring-scrollview/RefreshHeader";
import React from 'react';
import { View, StyleSheet, Text, Animated} from 'react-native';
import DeviceSize from '../../lib/deviceSize.js';

export default class LoadingHeader extends RefreshHeader {
    static height = 50;
    static style = "stickyContent";
    showMsg = (s) => {
        let statusObj = {
            pulling: '下拉即可同步',
            pullingEnough: '释放立即同步',
            refreshing: '正在同步'
        }
        return statusObj[s];
    }
    render() {
        const { status } = this.state;
        let msg = this.showMsg(status);
        const { offset, maxHeight } = this.props;
        return (
            status !== 'refreshing' ?
            (<View style={Styles.container}>
                <Animated.Image
                    source={require("../images/down.png")}
                    style={{...Styles.pullIcon,
                    transform: [{
                        rotate: offset.interpolate({
                            inputRange: [-maxHeight - 1 - 10, -maxHeight - 10, -50, -49],
                            outputRange: ["180deg", "180deg", "0deg", "0deg"]
                        })
                    }]
                }}/>
                <View
                    style={Styles.pullText}
                >
                    <Text style={Styles.pullInfo}>{msg}</Text>
                    <Text style={Styles.pullTime}>上次同步: 12:12:12</Text>
                </View>
            </View>) : (
                <View style={Styles.container}><Text>哈哈哈</Text></View>
            )
        )
    }
}

const Styles = StyleSheet.create({
    container: {
        width: DeviceSize.deviceW,
        height: 50,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
    pullIcon: {
        width: 20,
        height: 30,
        marginRight: 20,
    },
    pullText: {
        justifyContent: 'space-between',
        flexDirection: 'column'
    },
    pullInfo: {
        color: 'gray',
    },
    pullTime: {
        color: 'gray',
        fontSize: 10
    }
});