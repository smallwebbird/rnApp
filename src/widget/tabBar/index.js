import React from 'react';
import { 
    View,
    Text,
    TouchableOpacity,
    TouchableNativeFeedback,
    StyleSheet
 } from 'react-native';

export default class TabBar extends React.Component {
    render(){
        const { 
            renderIcon,
            getLabelText,
            activeTintColor,
            inactiveTintColor,
            onTabPress,
            onTabLongPress,
            getAccessibilityLabel,
            navigation
        }  = this.props; 
        const { routes, index: activeRouteIndex } = navigation.state;
        console.log(routes); 
        return (
            <View style={Styles.tabBar}>
                {
                   routes.map((route, routeIndex) => {

                       const isRouteActive = routeIndex === activeRouteIndex
                       const tintColor = isRouteActive ? activeTintColor : inactiveTintColor
                       return (
                           <TouchableNativeFeedback
                            key={routeIndex}
                            onPress={
                                () => {
                                    onTabPress( {route} )
                                }
                            }
                            onLongPress={
                                () => {
                                    onTabLongPress( {route} )
                                }
                            }
                            accessibilityLabel={getAccessibilityLabel({ route })}
                           >
                            <View style={routeIndex === 1 ? Styles.tabBarTwoItem : Styles.tabBarItem}>
                                {
                                    //必须加route，否则会报错
                                    renderIcon({ route, focused: isRouteActive, tintColor })
                                }
                                {/* 扩展运算符在这块有用处了 */}
                                <Text style={{...Styles.tabBarItemLabel, color: tintColor}}>{ getLabelText( {route} ) }</Text>
                                
                            </View>
                           </TouchableNativeFeedback>
                       )
                   }) 
                }
            </View>
        )
    } 
}

const Styles = StyleSheet.create({
    tabBar: {
        height: 50,
        flexDirection: 'row',
        borderTopColor: '#D5D8DC',
        borderTopWidth: 1,
        alignItems: 'center',
    },
    tabBarTwoItem: {
        width: '20%',
        alignItems: 'center',
        height: '100%',
        marginRight: '20%',
    },
    tabBarItem: {
        width: '20%',
        alignItems: 'center',
        height: '100%',
    },
    tabBarItemLabel: {
        marginTop: 3
    }
});