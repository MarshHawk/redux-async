import React from 'react';
import {connect} from 'react-redux';

function Plants(props) {
    return <pre><code>
        {JSON.stringify(props, null, 2)}
        </code></pre>
}

function mapState(state) {
    console.log(state);
    return state.plants;
}

export default connect(mapState)(Plants)