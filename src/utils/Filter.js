function Filter() {
  function filterByQuery(query, cards) {
    return cards.filter((card) => {
      const values = [card.nameEN, card.nameRU];
      return values.some((value) => {
        return value.toLowerCase().includes(query.toLowerCase());
      });
    });
  }

  return { filterByQuery };
}

export default Filter;
