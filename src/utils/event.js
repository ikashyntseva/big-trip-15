const convertMS = (diffMinutes) => {
  const dayMinutes = 24 * 60;
  const days = Math.trunc(diffMinutes / dayMinutes);
  const hours = Math.trunc((diffMinutes - dayMinutes * days) / 60);
  const minutes = diffMinutes % 60;

  return new Map([
    ['D', days],
    ['H', hours],
    ['M', minutes],
  ]);
};

const getDuration = (startDate, endDate) => {
  const diff = endDate ? endDate.diff(startDate, 'minute') : startDate;
  const duration = convertMS(diff);
  const res = [];

  for (const [key, value] of duration) {
    if (value) {
      res.push(`${value}${key}`);
    }
  }

  return res.length ? res.join(' ') : '0D 0H 0M';
};


const addItem = (items, newItem) => [
  newItem,
  ...items,
];

const updateItem = (items, updatedItem) => items.map((item) => item.id === updatedItem.id ? updatedItem : item);

const deleteItem = (items, deletedItem) => items.filter(({ id }) => id !== deletedItem.id);

export { getDuration, updateItem, addItem, deleteItem};
