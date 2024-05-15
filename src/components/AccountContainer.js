
import React, { useState, useEffect } from "react";
import TransactionsList from "./TransactionsList";
import Search from "./Search";
import AddTransactionForm from "./AddTransactionForm";

function AccountContainer() {
  const [transactions, setTransactions] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    fetch("http://localhost:8001/transactions")
      .then((res) => res.json())
      .then((data) => setTransactions(data));
  }, []);

  const filteredTransactions = transactions.filter((transaction) =>
    transaction.description.toLowerCase().includes(search.toLowerCase())
  );

  function handleNewTransaction(newItem) {
    setTransactions([...transactions, newItem]);
  }

  return (
    <div>
      <Search search={search} setSearch={setSearch} />
      <AddTransactionForm onAddTransaction={handleNewTransaction} />
      <TransactionsList transactions={filteredTransactions} />
    </div>
  );
}

export default AccountContainer;
