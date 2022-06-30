import './NewExpense.css';
import ExpenseForm from './ExpenseForm'

const NewExpense = (props) => {
    const saveExpenseDataHandler = (enteredExpenseData) => {
        const expenseData = {
            id: Math.floor(Math.random() * (100 - 1) + 1).toString(),
            ...enteredExpenseData,   
        };
        props.onAddExpense(expenseData);
    };
   
    return <div className='new-expense'>
        <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} />
    </div>
}

export default NewExpense; 