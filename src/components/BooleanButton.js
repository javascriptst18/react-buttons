import React from 'react';
import PropTypes from 'prop-types';

/**
 * Use case:
 * <Button primary onClick={someFunction}> Click me </Button>
 * <Button secondary> Click me </Button>
 */

function Button(props) {
  /**
   * Create a string with the full class in css based
   * on which props are sent down. This is mainly standard
   * javascript string concatenation, nothing reacty
   */
  let classNames = 'btn';
  let outline = '';
  if(props.outline){
    outline = 'outline-'
  }
  if (props.primary) {
    classNames += ` btn-${outline}primary`;
  }
  if (props.secondary) {
    classNames += ` btn-${outline}secondary`;
  }
  return  <button onClick={props.onClick}
                  className={classNames}
          >
            {props.children}
          </button>
}

Button.propTypes = {
  primary: PropTypes.bool,
  secondary: PropTypes.bool,
  onClick: PropTypes.func.isRequired
}

export default Button;