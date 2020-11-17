module.exports = (i) => {
  const iString = i.toString();
  let shouldComment = false;
  if (iString.includes('9')) {
    shouldComment = true;
  } else if (iString.includes('5')) {
    shouldComment = true;
  } else if (iString.includes('2')) {
    shouldComment = true;
  } else if (i === 0) {
    shouldComment = true;
  }

  return shouldComment;
};