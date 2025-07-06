import { getUserAccounts } from "@/actions/dashboard"
import { defaultCategories } from "@/data/categories";
import { AddTransactionForm } from "../_components/transactionForm";
import { getTransaction } from "@/actions/transaction";


const TransactionPage = async ({ searchParams }) => {
  const accounts = await getUserAccounts();
  const editId = searchParams.editId || null;

  // console.log(editId)

  let initialData = null;
  if (editId) {
    const transaction = await getTransaction(editId);
    initialData = transaction;
  }
  return (
    <div className="max-w-3xl mx-auto px-5">
      <h1 className="text-5xl font-bold mb-5 bg-gradient-to-r from-purple-800 to-blue-800 bg-clip-text text-transparent inline-block">Create Transaction</h1>
      <AddTransactionForm
        accounts={accounts}
        categories={defaultCategories}
        editMode={!!editId}
        initialData={initialData}
      />
    </div>
  )
}

export default TransactionPage