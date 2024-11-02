export default function Stats({ items }) {
  if (!items.length)
    return (
      <footer className="stats">
        <em>Start adding items to your packing list 🛫</em>
      </footer>
    );
  const numItems = items.length;
  const numPackedItems = items.filter((item) => item.packed).length;
  const percentPackedItems = Math.round((numPackedItems / numItems) * 100, 2);
  return (
    <footer className="stats">
      <em>
        {percentPackedItems === 100
          ? "You got everything! Ready to go ✈️"
          : `You have ${numItems} items on your list, and you already packed
           ${numPackedItems} (${percentPackedItems || 0}%)`}
      </em>
    </footer>
  );
}
