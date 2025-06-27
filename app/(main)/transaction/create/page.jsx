import AddTransactionForm from "../_components/transactionForm"


const TransactionPage = () => {
  return (
    <div className="max-w-3xl mx-auto px-5">
      <h1>Create Transaction</h1>
      <AddTransactionForm
        accounts={accounts}
        categories={defaultCategories}
      />
    </div>
  )
}

export default TransactionPage