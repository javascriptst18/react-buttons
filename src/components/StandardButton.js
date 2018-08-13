import React from 'react';
import PropTypes from 'prop-types';

function Button(props){
  return  <button onClick={props.onClick}
                  className={props.className}
          >
            {props.children}
          </button>
}

Button.propTypes = {
  onClick: PropTypes.func.isRequired,
  className: PropTypes.string,
  children: PropTypes.string.isRequired
}

Button.defaultProps = {
  className: 'btn'
}