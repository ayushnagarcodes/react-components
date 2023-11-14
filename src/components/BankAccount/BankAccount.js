import { useReducer } from "react";
import "./BankAccount.css";

const INITIAL_BALANCE = 500;

const initialState = {
    balance: 0,
    loan: 0,
    isActive: false,
};

function reducer(state, action) {
    switch (action.type) {
        case "openAccount":
            return { ...state, balance: INITIAL_BALANCE, isActive: true };
        case "deposit":
            return { ...state, balance: state.balance + action.payload };
        case "withdraw":
            // can't withdraw if the balance goes below zero
            return {
                ...state,
                balance:
                    state.balance - action.payload < 0
                        ? state.balance
                        : state.balance - action.payload,
            };
        case "requestLoan":
            // can't take another loan if there's an existing loan
            return {
                ...state,
                balance:
                    state.loan === 0
                        ? state.balance + action.payload
                        : state.balance,
                loan: state.loan === 0 ? action.payload : state.loan,
            };
        case "payLoan":
            let newBalance, newLoan;
            if (state.loan >= state.balance) {
                newBalance = 0;
                newLoan = state.loan - state.balance;
            } else {
                newBalance = state.balance - state.loan;
                newLoan = 0;
            }
            return { ...state, balance: newBalance, loan: newLoan };
        case "closeAccount":
            return state.balance === 0 && state.loan === 0
                ? { ...initialState }
                : { ...state };
        default:
            throw new Error("Unknown Action!");
    }
}

export default function BankAccount() {
    const [{ balance, loan, isActive }, dispatch] = useReducer(
        reducer,
        initialState
    );

    return (
        <div className="container">
            <p>Balance: {balance}</p>
            <p>Loan: {loan}</p>

            <button
                onClick={() => dispatch({ type: "openAccount" })}
                disabled={isActive}
            >
                Open account
            </button>

            <button
                onClick={() => dispatch({ type: "deposit", payload: 150 })}
                disabled={!isActive}
            >
                Deposit 150
            </button>

            <button
                onClick={() => dispatch({ type: "withdraw", payload: 50 })}
                disabled={!isActive}
            >
                Withdraw 50
            </button>

            <button
                onClick={() => dispatch({ type: "requestLoan", payload: 5000 })}
                disabled={!isActive}
            >
                Request a loan of 5000
            </button>

            <button
                onClick={() => dispatch({ type: "payLoan" })}
                disabled={!isActive}
            >
                Pay loan
            </button>

            <button
                onClick={() => dispatch({ type: "closeAccount" })}
                disabled={!isActive}
            >
                Close account
            </button>
        </div>
    );
}
