import { useEffect, useState } from "react";
import { getTransactions, deleteTransaction } from "../services/api";

export default function TransactionList({ refresh }) {
  const [transactions, setTransactions] = useState([]);

  const fetchTxns = async () => {
    const res = await getTransactions();
    setTransactions(res.data);
  };

  useEffect(() => {
    fetchTxns();
  }, [refresh]);

  const handleDelete = async (id) => {
    await deleteTransaction(id);
    fetchTxns();
  };

  return (
    <div className="mt-4 bg-white p-4 rounded-lg shadow-md">
      <h2 className="text-xl font-semibold mb-3">Transactions</h2>
      {transactions.length === 0 && <p>No transactions yet.</p>}
      {transactions.map((t) => (
        <div
          key={t.id}
          className={`flex justify-between border-b py-2 ${
            t.type === "income" ? "text-green-600" : "text-red-600"
          }`}
        >
          <span>{t.title} ({t.category})</span>
          <span>${t.amount}</span>
          <button onClick={() => handleDelete(t.id)} className="text-gray-400 hover:text-black">
            🗑
          </button>
        </div>
      ))}
    </div>
  );
}
