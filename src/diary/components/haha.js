               {/* {
                    isfold ? 
                <TouchableNativeFeedback
                    onPress={this.pressYear}
                >
                        <View style={Styles.yearStyle}>
                            <View style={Styles.yearLeft}>
                                <Image source={require('../images/year_right.png')} style={{width: 5, height: 5, marginLeft: 20}}/>
                                <Text style={{paddingLeft: 10, fontSize: 15}}>{rowData.year}</Text>
                            </View>
                            <View style={Styles.yearRight}>
                                <Text style={{color: '#00FFFF', fontSize: 12, paddingRight: 15}}>打开该年</Text>
                                <Image source={require('../images/expansion_arrow.png')} style={{width: 10, height: 10, marginRight: 10}}/>
                            </View>
                        </View>
                </TouchableNativeFeedback> : 
                <BoxShadow setting={notFoldYearShadown}>
                        <TouchableNativeFeedback
                            onPress={this.pressYear}
                        >
                            <View style={Styles.yearNotFoldStyle}>
                                <View style={Styles.yearLeft}>
                                    <Image source={require('../images/year_right.png')} style={{width: 5, height: 5, marginLeft: 20}}/>
                                    <Text style={{paddingLeft: 10, fontSize: 15}}>{rowData.year}</Text>
                                </View>
                                <View style={Styles.yearRight}>
                                    <Text style={{color: '#00FFFF', fontSize: 12, paddingRight: 15}}>折叠该年</Text>
                                    <Image source={require('../images/fold_arrow.png')} style={{width: 10, height: 10, marginRight: 10}}/>
                                </View>
                            </View>
                        </TouchableNativeFeedback>   
                </BoxShadow>
                }
                <View style={Styles.monthWrap} ref={component => this._monthRef = component}>
                {
                    rowData.stories.map( (item1, index1) => (
                        <View style={Styles.monthStyle} key={index1}>
                        {
                            item1.story.map( (item2, index2) => (
                                <View style={Styles.everyMonth} key={index2}>
                                    <View style={Styles.monthText}>
                                        <Text style={{fontWeight: 'bold'}}>{index2===0 ? item1.day : ''}</Text>
                                        <Text>{index2===0 ? item1.month+'月' : ''}</Text>
                                    </View>
                                    <View style={Styles.storyIcon}>
                                        <Image 
                                            source={require('../images/word_black.png')}
                                            style={{
                                                width: 20,
                                                height: 20,
                                            }}
                                        />
                                    </View>
                                    <View style={Styles.storyContent}>
                                        <TouchableNativeFeedback
                                            onPress={this.pressStory}
                                        >
                                            <BoxShadow setting={shadownStyle}>
                                                <View style={Styles.story}>
                                                    <Text>{item2.content}</Text>
                                                    <View style={Styles.comment}>
                                                        <Image source={require('../images/comment_bubble.png')} style={{width: 15, height: 15,resizeMode: 'contain'}}/>
                                                        <Text style={{paddingLeft: 5}}>{item2.comments}</Text>
                                                    </View>
                                                </View>
                                            </BoxShadow>
                                        </TouchableNativeFeedback>
                                    </View>
                                </View>
                            )  )
                        }
                        </View>
                    ) )
                }
                </View> */}


                // import React from 'react';
// import { View, StyleSheet, Image, Text, TouchableNativeFeedback } from 'react-native';
// import { BoxShadow } from 'react-native-shadow';
// import DeviseSize from '../../lib/deviceSize.js';

// export default class RowItem extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             isfold: false //是否折叠
//         }
//     }
//     pressStory = () => {
//         console.log('我这个文章集被点击了');
//     }
//     pressYear = (e) => {
//         console.log(this.ref);
//         let { isfold } = this.state;
//         let display = isfold ? 'flex' : 'none';
//         this._monthRef.setNativeProps({
//             style: {
//                 display: display,
//             }
//         });
//         this.setState({
//             isfold: !this.state.isfold
//         });
//     }
//     render() {
//         const { section, items } = this.props;
//         console.log(section, items)
//         const { isfold } = this.state;
//         return (
//             <View style={StyleSheet.flatten([this.props.style,Styles.container1])}>
//                 <Text>哈哈哈</Text>
//             </View>
//         )
//     }
// }

// const shadownStyle = {
//     width: DeviseSize.deviceW - 120,
//     height: 60,
//     color: '#808080',
//     border: 2,
//     opacity: 0.3,
//     radius: 5,
//     y: 2
// }
// const notFoldYearShadown = {
//         width: DeviseSize.deviceW,
//         height: 30,
//         color: '#808080',
//         border: 2,
//         opacity: 0.3,
//         y: 2
// }

// const Styles = StyleSheet.create({
//     container: {
//         marginTop: 5,
//         justifyContent: 'center',
//         alignItems: 'center',
//     },
//     container1: {
//         width: DeviseSize.deviceW,
//         height: 100,
//         backgroundColor: 'yellow'
//     },
//     yearStyle: {
//         width: DeviseSize.deviceW - 100,
//         height: 30,
//         flexDirection: 'row',
//         backgroundColor: 'white'
//     },
//     yearNotFoldStyle: {
//         width: DeviseSize.deviceW,
//         height: 30,
//         flexDirection: 'row',
//         paddingLeft: 50,
//         paddingRight: 50,
//         backgroundColor: '#E5E7E9'
//     },
//     yearLeft: {
//         flex: 1,
//         flexDirection: 'row',
//         alignItems: 'center',
//     },
//     yearRight: {
//         flex: 1,
//         flexDirection: 'row',
//         alignItems: 'center',
//         justifyContent: 'flex-end',
//     },
//     monthWrap: {
//     },
//     monthStyle: {
//         paddingLeft: 20,
//         paddingRight: 20,
//         width: DeviseSize.deviceW,
//     },
//     everyMonth: {
//         flex: 1,
//         flexDirection: 'row'
//     },
//     monthText: {
//         width: 30,
//         alignItems: 'flex-end',
//         paddingTop: 6,
//     },
//     storyIcon: {
//         width: 40,
//         paddingLeft: 12,
//         paddingTop: 10
//     },
//     storyContent: {
//         flex: 7,
//         paddingLeft: 10,
//         paddingTop: 10
//     },
//     story: {
//         width: DeviseSize.deviceW - 120,
//         height: 60,
//         backgroundColor: 'white',
//         borderRadius: 5,
//         borderWidth: DeviseSize.onePixel,
//         borderColor: 'silver',
//         shadowColor: 'gray',
//         position: 'relative',
//     },
//     comment: {
//         position: 'absolute',
//         right: 8,
//         bottom: 10,
//         flexDirection: 'row',
//         alignItems: 'center',
//         width:30,
//         height: 20,
//     }
// });