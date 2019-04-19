import React from 'react';
import { TouchableOpacity, StyleSheet } from 'react-native';

export default class NavigationItem extends React.Component {
    render() {
        const { icon, title, iconStyle, titleStyle } = this.props;
        let iconElement = icon && <Image style={[Styles.icon, this.props.iconStyle]} source={icon} />;
        let titleElement = title && <Text style={[Styles.title, this.props.titleStyle]}>{title}</Text>
        return (
            <TouchableOpacity style={styles.container} onPress={this.props.onPress}>
                {iconElement}
                {titleElement}
            </TouchableOpacity>
        )
    }
}

const Styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    icon: {
        width: 27, 
        height: 27,
        margin: 8,
    },
    title: {
        fontSize: 15,
        color: '#333333',
        margin: 8,
    }
})