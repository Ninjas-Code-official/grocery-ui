import { showMessage } from 'react-native-flash-message'
import PropTypes from 'prop-types'

export const FlashMessage = (props: any) => {
    showMessage({
        backgroundColor: 'rgba(52, 52, 52, .9)',
        message:props.title,
        description: props.message,
        position: 'center',
        hideOnPress: false,
        onPress: props.onPress,
    })
}
FlashMessage.propTypes = {
    message: PropTypes.string.isRequired
}
