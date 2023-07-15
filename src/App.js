import { useState } from "react";

const initialItems = [
  { id: 1, description: "পাসপোর্ট", quantity: 2, packed: false },
  { id: 2, description: "মোজা", quantity: 12, packed: false },
  { id: 3, description: "জাঙ্গিয়া", quantity: 12, packed: true },
  { id: 4, description: "প্যান্ট", quantity: 7, packed: false },
  { id: 5, description: "দাত ব্রাশ", quantity: 2, packed: true },
];

function eBengali(x) {
  return x.toLocaleString('bn-BN');
}

export default function App() {
  const [items, setItems] = useState(initialItems);

  function handleAddItem(newItem) {
    setItems((items) => [...items, newItem]);
  }

  function handleDeleteItem(deleteItemId) {
    setItems((items) => items.filter((item) => item.id !== deleteItemId));
  }

  function handleCheckItem(checkItemId) {
    setItems((items) => items.map((item) => item.id === checkItemId ? { ...item, packed: !item.packed } : item))
  }

  return (
    <div className="app">
      <Logo />
      <Form onAddItem={handleAddItem} />
      <PackingList
        items={items}
        onDeleteItem={handleDeleteItem}
        onUpdateCheck={handleCheckItem} />
      <Stats items={items} />
    </div>
  )
}


function Logo() {
  return <h1>✈️ ট্যুরে যামু 🧳</h1>
}

function Form({ onAddItem }) {
  const [description, setDescription] = useState("");
  const [quantity, setQuantity] = useState(1);

  function handleSubmit(e) {
    e.preventDefault();

    if (description === "") return;

    const newItem = { id: Date.now(), description, quantity, packed: false };

    onAddItem(newItem)

    setQuantity(1);
    setDescription("");
  }
  return (
    <form className="add-form" onSubmit={handleSubmit}>
      <h3>ট্যুরে কি কি নিব?😍</h3>
      <select value={quantity} onChange={(e) => setQuantity(Number(e.target.value))}>
        {Array.from({ length: 20 }, (_, i) => i + 1).map((number) => {
          return <option value={number} key={number}>{eBengali(number)}</option>
        })}
      </select>

      <input
        type="text"
        placeholder="কি নিব?"
        value={description}
        onChange={(e) => setDescription(e.target.value)} />
      <button>সংযুক্ত করো

      </button>
    </form>
  )
}

function PackingList({ items, onDeleteItem, onUpdateCheck }) {
  return (
    <div className="list">
      <ul>
        {items.map((item) => <Item
          item={item}
          key={item.id}
          onDeleteItem={onDeleteItem}
          onUpdateCheck={onUpdateCheck} />)}
      </ul>
    </div>)
}

function Item({ item, onDeleteItem, onUpdateCheck }) {
  return (
    <li>
      <input
        type="checkbox"
        checked={item.packed}
        onChange={() => onUpdateCheck(item.id)} />
      <span style={item.packed ? { textDecoration: "line-through" } : {}}>
        {item.description} ({eBengali(item.quantity)})
      </span>
      <button onClick={() => onDeleteItem(item.id)}>❌</button>
    </li>
  )
}

function Stats({ items }) {
  if (!items.length) return <footer className="stats">
    <em>
      তোমার ব্যাগ গুছানো শুরু করো 🚀
    </em>
  </footer>

  const totalItems = items.length;
  const packedItems = items.filter((item) => item.packed).length;
  const percentPacked = (packedItems / totalItems) * 100;
  return (
    <footer className="stats">
      <em>
        {percentPacked !== 100 ? `🧳 তোমার সর্বমোট ${eBengali(totalItems)} টা জিনিষ নেওয়া দরকার এবং তুমি নইতিমধ্যে নিয়ে নিয়েছো ${eBengali(packedItems)} টা জিনিষ (${eBengali(Math.round(percentPacked))}%)` : `তুমি ট্যুরে যাওয়ার জন্যে সম্পূর্ণ প্রস্তুত। এখনি রওনা দাও 🚀`}
      </em>
    </footer>
  )
}
