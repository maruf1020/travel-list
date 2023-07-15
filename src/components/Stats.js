import eBengali from "../utils/eBengali";

export default function Stats({ items }) {
    if (!items.length)
        return <footer className="stats">
            <em>
                তোমার ব্যাগ গুছানো শুরু করো 🎒
            </em>
        </footer>;

    const totalItems = items.length;
    const packedItems = items.filter((item) => item.packed).length;
    const percentPacked = (packedItems / totalItems) * 100;
    return (
        <footer className="stats">
            <em>
                {percentPacked !== 100 ? `🧳 তোমার সর্বমোট ${eBengali(totalItems)} টা জিনিষ নেওয়া দরকার এবং তুমি নইতিমধ্যে নিয়ে নিয়েছো ${eBengali(packedItems)} টা জিনিষ (${eBengali(Math.round(percentPacked))}%)` : `তুমি ট্যুরে যাওয়ার জন্যে সম্পূর্ণ প্রস্তুত। এখনি রওনা দাও 🚀`}
            </em>
        </footer>
    );
}
