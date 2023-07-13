import { useState } from "react";

const initialItems = [
  { id: 1, description: "পাসপোর্ট", quantity: 2, packed: false },
  { id: 2, description: "মোজা", quantity: 12, packed: false },
  { id: 3, description: "জামা", quantity: 12, packed: true },
  { id: 4, description: "প্যান্ট", quantity: 7, packed: false },
  { id: 5, description: "দাত ব্রাশ", quantity: 2, packed: true },
];

function eBengali(x) {
  return x.toLocaleString('bn-BN');
}

export default function App() {
  return (
    <div className="app">
      <Logo />
      <Form />
      <PackingList />
      <Stats />
    </div>
  )
}


function Logo() {
  return <h1>✈️ আম্মু যেতে দিবেনা 🧳</h1>
}

function Form() {
  const [description, setDescription] = useState("");
  const [quantity, setQuantity] = useState(1);



  function handleSubmit(e) {
    e.preventDefault();

    if (description === "") return;

    const newItem = { id: Date.now(), description, quantity, packed: false };
    console.log(newItem);

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
      <button>সংযুক্ত কর</button>
    </form>
  )
}

function PackingList() {
  return (
    <div className="list">
      <ul>
        {initialItems.map((item) => <Item item={item} key={item.id} />)}
      </ul>
    </div>)
}

function Item({ item }) {
  return (
    <li>
      <span style={item.packed ? { textDecoration: "line-through" } : {}}>
        {item.description} ({eBengali(item.quantity)})
      </span>
      <button>❌</button>
    </li>
  )
}

function Stats() {
  return (
    <footer className="stats">
      <em>
        🧳 তোমার সর্বমোট X টা জিনিষ নেওয়া দরকার এবং তুমি নইতিমধ্যে নিয়ে নিয়েছো X টা জিনিষ (X%)
      </em>
    </footer>
  )
}
