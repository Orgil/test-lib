import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

const TestComp = () => (
  <div>
    hello
  </div>
);

TestComp.propTypes = {
  isBool: PropTypes.bool.isRequired,
  isString: PropTypes.string
};

TestComp.defaultProps = {
  isString: ''
};

export default connect()(TestComp);
