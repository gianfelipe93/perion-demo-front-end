const readPreviousSearches = () => {
  const unformattedPreviousSearches = localStorage.getItem("previousSearches");
  if (unformattedPreviousSearches) {
    return JSON.parse(unformattedPreviousSearches)
  }

  return []
}

export default readPreviousSearches
