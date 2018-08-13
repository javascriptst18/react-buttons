import React from 'react';
import PropTypes from 'prop-types';

export function Button(props) {
  /**
   * outline is a boolean value, the primary/secondary is sent
   * via a string 'color="primary"'
   */
  let outline = '';
  if(props.outline){
    outline = 'outline-'
  }
  return  <button onClick={props.onClick}
                  className={`btn btn-${outline}${props.color}`}
          >
            {props.children}
          </button>
}

/**
 * Use case:
 * <PrimaryButton onClick={someFunction}> Click me </Button>
 * <SecondaryButton outline> Click me </Button>
 */
export function PrimaryButton(props) {
  return <Button {...props} color="primary" />
}

export function SecondaryButton(props){
  return  <Button {...props} color="secondary" />
}


Button.propTypes = {
  color: PropTypes.string,
  onClick: PropTypes.func.isRequired,
  children: PropTypes.string.isRequired
}

export default Button;