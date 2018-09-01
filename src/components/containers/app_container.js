import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {getData, sendData} from '../module/form_module';


import App from '../components/App';

function mapStateToProps(state) {
    return {
        data: state.data
    }
};

function mapDispatchToProps(dispatch) {
    return bindActionCreators({getData, sendData}, dispatch)
};

export default connect(mapStateToProps, mapDispatchToProps)(App);