import eBengali from "../utils/eBengali";

export default function Item({ item, onDeleteItem, onUpdateCheck }) {
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
    );
}
