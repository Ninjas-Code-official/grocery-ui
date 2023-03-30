import Layout from './Layout'
const { window: { width, height } } = Layout

//Guideline sizes are based on standard ~5" screen mobile device
const guidelineBaseWidth = 350;
const guidelineBaseHeight = 680;
const screenSize = Math.sqrt(width * height) / 100;

/* scale using width */
const scale = (size: number) => (width / guidelineBaseWidth) * size;
/* scale using height */
const verticalScale = (size: number) => (height / guidelineBaseHeight) * size;
/* not sure */
const moderateScale = (size: number, factor = 0.5) =>
    size + (scale(size) - size) * factor;


export { scale, verticalScale, moderateScale, screenSize };