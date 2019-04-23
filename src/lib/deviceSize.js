import { Dimensions, PixelRatio } from 'react-native';

export default {
    deviceW: Dimensions.get('window').width,
    deviceH: Dimensions.get('window').height,
    deviceDpi: PixelRatio.get()
}