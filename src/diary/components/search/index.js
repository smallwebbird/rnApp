import React from 'react';
import { View, Text, StatusBar, StyleSheet, Image, TouchableOpacity } from 'react-native';
import DeviceSize from '../../../lib/deviceSize.js';
import { TextInput } from 'react-native-gesture-handler';

export default  class Search extends React.Component {
    pressBack = () => {
        this.props.navigation.goBack();
    }
    pressSearch = () => {
        console.log('hahahaha');
    }
    render() {
        return (
            <View style={Styles.searchContainer}>
                <StatusBar
                    backgroundColor='black'
                    translucent={true}
                    animated={true}
                />
                <View style={Styles.searchHeader}>
                    <View style={Styles.backWrap}>
                        <TouchableOpacity
                            onPress={this.pressBack}
                        >
                            <Image 
                                source={require('./images/arrow_back.png')}
                                style={Styles.backStyle}
                            />
                        </TouchableOpacity>
                    </View>
                    <View style={Styles.searchWrap}>
                        <TextInput 
                            style={Styles.searchInput}
                            placeholder="搜索标题，内容，时间，人物，位置"
                        />
                        <Image 
                            style={Styles.searchIcon}
                            source={require('../search/images/search_in_daohanglan.png')}
                        />
                    </View>
                    <View style={Styles.searchText}>
                        <TouchableOpacity
                            onPress={this.pressSearch}
                        >
                            <Text>搜索</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        )
    }
}

const Styles = StyleSheet.create({
    searchContainer: {
        flex: 1,
        backgroundColor: '#E5E7E9'
    },
    searchHeader: {
        height: 60,
        marginTop: StatusBar.currentHeight,
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: 'white'
    },
    backWrap: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingLeft: 2,
    },
    backStyle: {
        width: 20,
        height:20,
    },
    searchWrap: {
        flex:5,
    },
    searchInput: {
        backgroundColor: '#E5E7E9',
        height: 40,
        paddingLeft: 20,
        borderRadius: 5,
        position: 'relative'
    },
    searchIcon: {
        position: 'absolute',
        height: 10,
        width: 10,
        top: 15,
        left: 5
    },
    searchText: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})