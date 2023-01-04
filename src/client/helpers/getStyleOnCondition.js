const getStyleOnCondition = (condition, callback) => {
  if (condition) {
    return callback();
  }
};

export { getStyleOnCondition };
