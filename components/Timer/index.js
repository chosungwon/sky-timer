import { connect } from 'react-redux';
import Timer from './presenter';
import { bindActionCreators } from 'redux';
import { actionCreators as skyActions } from '../../reducer'

function mapStateToProps (state) {
    const { isPlaying, elapsedTime, timeDuration } = state;
    return {
        isPlaying,
        elapsedTime,
        timeDuration
    }
}

function mapDispatchToProps(dispatch) {
    return{
        startTimer: bindActionCreators(skyActions.startTimer, dispatch),
        restartTimer: bindActionCreators(skyActions.restartTimer, dispatch),
        addSecond: bindActionCreators(skyActions.addSecond, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Timer);