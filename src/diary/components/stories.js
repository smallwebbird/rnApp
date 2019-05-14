import React from 'react';
import { View, StyleSheet, } from 'react-native';
import StoryItem from '../components/storyItem.js';
import { LargeList } from 'react-native-largelist-v3';
import DeviceSize from '../../lib/deviceSize.js';
import LoadingHeader from './loadingHeader.js';

export default class Story extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            stories: [
                {
                   items:  [[{
                        sort: '我的1',
                        num: 10,
                        picUrl: require('../images/a.jpg')
                    },
                    {
                        sort: '我的2',
                        num: 10,
                        picUrl: require('../images/b.jpg')
                    },
                    {
                        sort: '我的3',
                        num: 5,
                        picUrl: require('../images/c.jpg')
                    }]]
                },
                {
                    items: [[{
                        sort: '我的2',
                        num: 10,
                        picUrl: require('../images/b.jpg')
                    },
                    {
                        sort: '我的3',
                        num: 5,
                        picUrl: require('../images/c.jpg')
                    }]]
                },
                {
                    items: [[{
                        sort: '我的2',
                        num: 10,
                        picUrl: require('../images/b.jpg')
                    },
                    {
                        sort: '我的3',
                        num: 5,
                        picUrl: require('../images/c.jpg')
                    }]]
                }
            ]
        }
    }
    _pullRefresh = () => {
        setTimeout(() => {
            this.setState({
                stories: [
                    {
                       items:  [[{
                            sort: '我的1',
                            num: 10,
                            picUrl: require('../images/a.jpg')
                        },
                        {
                            sort: '我的2',
                            num: 10,
                            picUrl: require('../images/b.jpg')
                        },
                        {
                            sort: '我的3',
                            num: 5,
                            picUrl: require('../images/c.jpg')
                        }]]
                    },
                    {
                        items: [[{
                            sort: '我的2',
                            num: 10,
                            picUrl: require('../images/b.jpg')
                        },
                        {
                            sort: '我的3',
                            num: 5,
                            picUrl: require('../images/c.jpg')
                        },
                        {
                            sort: '我的3',
                            num: 5,
                            picUrl: require('../images/c.jpg')
                        }]]
                    },
                    {
                        items: [[{
                            sort: '我的2',
                            num: 10,
                            picUrl: require('../images/b.jpg')
                        },
                        {
                            sort: '我的3',
                            num: 5,
                            picUrl: require('../images/c.jpg')
                        }]]
                    }
                ]
            });
            this._list.endRefresh();
        }, 2000);
    }
    render() {
        const { tabLabel } = this.props;
        const { stories } = this.state;
        return (
            <View tabLabel={tabLabel} style={Styles.container}>
                <LargeList 
                    ref={ref => (this._list = ref)}
                    style={Styles.list}
                    data={stories}
                    initialContentOffset={{x:0, y:3000}}
                    heightForIndexPath={ () => 150 }
                    refreshHeader={LoadingHeader}
                    onRefresh={this._pullRefresh}
                    renderSection={ (section) => null }
                    renderIndexPath={ ({section, row}) => <StoryItem story={stories[section].items[row]}/> }
                />
            </View>
        )
    }
}

const Styles = StyleSheet.create({
    container: {
        width: DeviceSize.deviceW,
        height:DeviceSize.deviceH - 110,
    },
    list: {
        flex: 1,
    }
});