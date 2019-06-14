import React from "react";

// passing singledelete in indecisonApp to options to option.which handle every single option.
const Option = props => {
  return (
    <div className="option">
      <p className="option__text">
        {props.count}. {props.optionText}
      </p>
    
      <button
        className="button button--link"
        onClick={e => {
          props.handleSingleDelete(props.optionText);
        }}
      >
        remove
      </button>
    </div>
  );
};

export default Option;
