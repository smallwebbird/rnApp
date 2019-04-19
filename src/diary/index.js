import React from 'react';
import { View, Text, StatusBar } from 'react-native';
import DiaryHeader from './components/header/index.js';

export default class DiaryTab extends React.Component{
    render(){
        console.log(this.props.navigation);
        return (
            <View>
                <StatusBar
                    backgroundColor='transparent'
                    translucent={true}
                    animated={true}
                />
                <DiaryHeader statusHeight={StatusBar.currentHeight}/>
            </View>
        )
    }
} 