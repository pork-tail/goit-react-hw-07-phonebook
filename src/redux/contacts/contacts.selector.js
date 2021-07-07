export const getFilterContactsSelector = (state) => {
  const { items, filter } = state.contacts;

  const formattedFilter = filter.toLowerCase().trim();
  const filteredItems = items.filter((item) =>
    item.name.toLowerCase().includes(formattedFilter)
  );
  return filteredItems;
};

export const getFormatFilterSelector = (state) => {
  const items = state.contacts.items;
  const filter = state.contacts.filter;
  const formattedFilter = filter.toLowerCase().trim();
  const filteredItems = items.filter((item) =>
    item.name.toLowerCase().includes(formattedFilter)
  );
  return {
    items: filteredItems,
    filter: state.filter,
  };
};

export const contactsFilterSelector = (state) => state.contacts.filter;
