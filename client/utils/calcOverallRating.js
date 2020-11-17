export default (ratings) => {
  const arrayForm = Object.values(ratings)
  return (arrayForm.map((property) => parseFloat(property, 10)).reduce((acc, curr) => acc+ curr, 0) / arrayForm.length).toFixed(1)
}