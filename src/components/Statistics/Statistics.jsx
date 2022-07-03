import React from "react";
import "./Statistics.css";
import PropTypes from "prop-types";

export const Statistics = ({
  good,
  neutral,
  bad,
  total,
  positivePercentage,
}) => {
  return (
    <div className="main">
      <div>Good: {good}</div>
      <div>Neutral: {neutral}</div>
      <div>Bad: {bad}</div>
      <div>Total: {total()}</div>
      <div>Average: {positivePercentage()}%</div>
    </div>
  );
};

Statistics.defaultProps = {
  good: 0,
  neutral: 0,
  bad: 0,
};

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.func.isRequired,
  positivePercentage: PropTypes.func.isRequired,
};
