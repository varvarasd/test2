import React from 'react';
import PropTypes from 'prop-types';

class Display extends React.Component {
    render() {
        return (
            <div>
                <div>
                   {this.props.value}
                </div>
            </div>
        );
    }
}

Display.propTypes = {
    value: PropTypes.string,
};

export default Display;

// PropTypes has been deprecated
// to fix that please install prop-types library like so:
// npm install --save prop-types
// Make sure to import it in the component that's using it 
// and remove the 'React.' before it when used, as in the current commit