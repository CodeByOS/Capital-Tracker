import { getUserAccounts } from "@/actions/dashboard"
import AddTransactionForm from "../_components/transactionForm"


const TransactionPage = async () => {
  const accounts = await getUserAccounts();
  return (
    <div className="max-w-3xl mx-auto px-5">
      <h1 className="text-5xl font-bold mb-5 bg-gradient-to-r from-purple-800 to-blue-800 bg-clip-text text-transparent inline-block">Create Transaction</h1>
      <AddTransactionForm
        accounts={accounts}
        categories={defaultCategories}
      />
    </div>
  )
}

export default TransactionPage