const readPreviousSearches = () => {
  const unformattedPreviousSearches = localStorage.getItem("previousSearches");
  if (unformattedPreviousSearches) {
    return JSON.parse(unformattedPreviousSearches).map(s => s.label)
  }

  return []
}

const getSearchFromLocalStorage = (search) => {
  const unformattedPreviousSearches = localStorage.getItem("previousSearches");
  const listOfSearches = JSON.parse(unformattedPreviousSearches) || []

  const searchFromLocalStorage = listOfSearches.find(s => s.label === search)
  return searchFromLocalStorage
}

module.exports = { readPreviousSearches, getSearchFromLocalStorage }
