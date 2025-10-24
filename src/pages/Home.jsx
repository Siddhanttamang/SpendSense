import { useState } from "react";
import TransactionForm from "../components/TransactionForm";
import TransactionList from "../components/TransactionList";

export default function Home() {
  const [refresh, setRefresh] = useState(false);
  const handleAdd = () => setRefresh(!refresh);

  return (
    <div className="p-6 max-w-2xl mx-auto">
      <h1 className="text-3xl font-bold text-center mb-6">Track Your Expenses</h1>
      <TransactionForm onAdd={handleAdd} />
      <TransactionList refresh={refresh} />
    </div>
  );
}
