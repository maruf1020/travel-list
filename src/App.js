const initialItems = [
  { id: 1, description: "পাসপোর্ট", quantity: 2, packed: false },
  { id: 2, description: "মোজা", quantity: 12, packed: false },
  { id: 3, description: "জামা", quantity: 12, packed: true },
  { id: 4, description: "প্যান্ট", quantity: 7, packed: false },
  { id: 5, description: "দাত ব্রাশ", quantity: 2, packed: true },
];

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
  function handleSubmit(e) {
    e.preventDefault()
  }
  return (
    <form className="add-form" onSubmit={handleSubmit}>
      <h3>ট্যুরে কি কি নিব?😍</h3>
      <select>
        {Array.from({ length: 20 }, (_, i) => i + 1).map((number) => {
          return <option value={number} key={number}>{number}</option>
        })}
      </select>

      <input type="text" placeholder="কি কি নিব?" />
      <button>সংযুক্ত কর</button>
      <br />
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
        {item.description} ({item.quantity})
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
