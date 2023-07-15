import { useState } from "react";
import eBengali from "../utils/eBengali";

export default function Form({ onAddItem }) {
    const [description, setDescription] = useState("");
    const [quantity, setQuantity] = useState(1);

    function handleSubmit(e) {
        e.preventDefault();

        if (description === "")
            return;

        const newItem = { id: Date.now(), description, quantity, packed: false };

        onAddItem(newItem);

        setQuantity(1);
        setDescription("");
    }
    return (
        <form className="add-form" onSubmit={handleSubmit}>
            <h3>ট্যুরে কি কি নিব?😍</h3>
            <select value={quantity} onChange={(e) => setQuantity(Number(e.target.value))}>
                {Array.from({ length: 20 }, (_, i) => i + 1).map((number) => {
                    return <option value={number} key={number}>{eBengali(number)}</option>;
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
    );
}
