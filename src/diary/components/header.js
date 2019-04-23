import React from 'react';
import { View, Text, StyleSheet, Image, TouchableNativeFeedback } from 'react-native';

const tabs = [
    {
        text: '故事集'
    },
    {
        text: '时间轴'
    }
]

export default class Header extends React.Component {
    renderTab = (tab, tabIndex, activeTab) => {
        let unactiveTextStyle = {
            fontSize: 16,
        }
        let activeTextStyle = {
            fontSize: 16,
            color: '#00BCD4',
        }
        let activeTabStyle = {
            borderBottomWidth: 2,
            borderBottomColor: '#00BCD4'
        }
        let unactiveTabStyle = {};
        let textStyle = activeTab===tabIndex ? activeTextStyle : unactiveTextStyle;
        let tabStyle = activeTab===tabIndex ? activeTabStyle : unactiveTabStyle;
        return (
            <View style={{...Styles.tabItem, ...tabStyle}}>
                <Text style={textStyle}>{tab.text}</Text>
            </View>
        )
    }
    render(){
        const { activeTab, statusHeight, goToPage } = this.props;
        return (
            <View style={{...Styles.container, paddingTop: statusHeight}}>
                <View style={Styles.calendarWrap}>
                    { activeTab===0 ? <Image style={Styles.calendarIcon} source={require('../images/calendar_chooser.png')} /> : null}
                </View>
                <View style={Styles.swiperTab}>
                    {
                        tabs.map( (tab, tabIndex) => {
                            return (
                                <TouchableNativeFeedback
                                    key={tabIndex}
                                    onPress={ () => {
                                        goToPage(tabIndex)
                                    } }
                                >
                                {
                                    this.renderTab(tab, tabIndex, activeTab)
                                }
                                </TouchableNativeFeedback>
                            )
                        } )
                    }
                </View>
                <View style={Styles.selectWrap}>
                    { activeTab===0 ? 
                        <Image style={Styles.selectIcon} source={require('../images/time_line_multiple_select.png')} /> : 
                        <Image style={Styles.selectIcon} source={require('../images/add_black.png')} /> }
                </View>
            </View>
        )
    }
}

const Styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        height: 80,
        flexDirection: 'row',
        alignItems: 'center',
        borderBottomWidth: 1,
        borderBottomColor: 'gray',
    },
    calendarWrap: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    calendarIcon: {
        width:15,
        height: 15,
    },
    selectWrap: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    selectIcon: {
        width: 15,
        height: 15,
    },
    swiperTab: {
        flex: 5,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'stretch'
    },
    tabItem: {
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 10,
        height: 56,
    }
})
