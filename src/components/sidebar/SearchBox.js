import "components/sidebar/css/searchBox.css";

import React from "react";
import PropTypes from "prop-types";
import { Button, InputGroup, FormControl } from "react-bootstrap";

const SearchBox = ({ searchTerm, handleClick, handleChange, inputRef }) => {
  let addOn = (
    <InputGroup.Addon>
      <i className="fa fa-search" aria-hidden="true" />
    </InputGroup.Addon>
  );
  if (searchTerm !== "") {
    addOn = (
      <InputGroup.Button>
        <Button onClick={handleClick}>
          <i className="fa fa-times" aria-hidden="true" />
        </Button>
      </InputGroup.Button>
    );
  }

  return (
    <InputGroup bsSize="sm" className="search-box">
      <FormControl
        type="text"
        placeholder="Search"
        value={searchTerm}
        onChange={handleChange}
        inputRef={inputRef}
      />
      {addOn}
    </InputGroup>
  );
};

SearchBox.propTypes = {
  searchTerm: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
  handleClick: PropTypes.func.isRequired
};

export default SearchBox;
