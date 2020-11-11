module.exports = (value) => {
  if (value % 1 !== 0 || value < 0 || value > 5 ) {
    throw new Error('please reformat the rating');
  }
};