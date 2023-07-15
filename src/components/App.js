import { useState } from "react";
import Stats from "./Stats";
import PackingList from "./PackingList";
import Form from "./Form";
import Logo from "./Logo";
import initialItems from "../utils/initialItems";

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

  function handleReset() {
    const confirmed = window.confirm('তুমি কি সব মুছে ফেলতে চাও?')
    if (confirmed) setItems([])
    else {
      alert('যদি নাই তাহলে কেনো বাটন চাপলে? 😒 ');
      setItems([])
    }
  }

  return (
    <div className="app">
      <Logo />
      <Form onAddItem={handleAddItem} />
      <PackingList
        items={items}
        onDeleteItem={handleDeleteItem}
        onUpdateCheck={handleCheckItem}
        onReset={handleReset} />
      <Stats items={items} />
    </div>
  )
}



