import { Dimensions } from "react-native";
import DeviceInfo from "react-native-device-info";

const { widht, height } = Dimensions.get('window');

const isSmall = widht <= 375 && !DeviceInfo.hasNotch();

const guidelineBaseWidth = () => {
    if (isSmall) {
        return 330;
    }
    return 350
}

const horizontalScale = (size) => (widht / guidelineBaseWidth()) * size;

const guidelineBaseHeight = () => {
    if (isSmall) {
        return 550;
    } else if (widht > 410) {
        return 620
    }
    return 680
}

const verticalScale = (size) => (height / guidelineBaseHeight()) * size;

const guidelineBaseFonts = () => {
    if (widht > 410) {
        return 430;
    }
    return 400
}

const scaleFontSize = (size) => Math.round(widht / guidelineBaseFonts()) * size

export { verticalScale, scaleFontSize, horizontalScale };