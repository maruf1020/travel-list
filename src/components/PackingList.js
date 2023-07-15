import { useState } from "react";
import Item from "./Item";

export default function PackingList({ items, onDeleteItem, onUpdateCheck, onReset }) {

    const [sortType, setSortType] = useState('input');

    let sortedItems = [];

    if (sortType === 'input') {
        sortedItems = items;
    } else if (sortType === 'description') {
        sortedItems = items.slice().sort((a, b) => a.description.localeCompare(b.description));
    } else if (sortType === 'packed') {
        sortedItems = items.slice().sort((a, b) => a.packed - b.packed);
    }

    return (
        <div className="list">
            <ul>
                {sortedItems.map((item) => <Item
                    item={item}
                    key={item.id}
                    onDeleteItem={onDeleteItem}
                    onUpdateCheck={onUpdateCheck} />)}
            </ul>
            <div className="actions">
                <select value={sortType} onChange={(e) => setSortType(e.target.value)}>
                    <option value="input">{'প্রবেশ অনুযায়ী সাজান'}</option>
                    <option value="description">{'নাম অনুযায়ী সাজান'}</option>
                    <option value="packed">{'ব্যাগে ভরা অনুযায়ী সাজান'}</option>
                </select>
                <button onClick={onReset}>সব মুছে ফেলুন</button>
            </div>
        </div>);
}
