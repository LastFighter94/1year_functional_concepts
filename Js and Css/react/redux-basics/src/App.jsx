import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import './App.css'
import {addCustomerAction, removeCustomerAction} from "./store/customerReducer";
import {addCashAction, getCashAction} from "./store/cashReducer";
import {fetchCustomers} from "./asyncActions/customers";

const App = () => {
    const dispatch = useDispatch()
    const cash = useSelector(state => state.cash.cash)
    const customers = useSelector(state => state.customers.customers)

    const addCash = (cash) => {
        dispatch(addCashAction(cash))
    }

    const getCash = (cash) => {
        dispatch(getCashAction(cash))
    }

    const addCustomer = (name) => {
        const customer = {
            name,
            id: Date.now()
        }
        // dispatch({type:"ADD_CUSTOMER", payload: customer}) - так больше вероятность ошибки
        dispatch(addCustomerAction(customer))
    }

    const removeCustomer = (customer) => {
        // dispatch({type: "REMOVE_CUSTOMER", payload: customer.id}) - так больше вероятность ошибки
        dispatch(removeCustomerAction(customer.id))
    }

    return (
        <div className={'app'}>
            <div style={{fontSize:"3rem"}}>{cash}</div>
          <div style={{display: "flex"}}>
              <button onClick={() => addCash(Number(prompt()))}>Пополнить счет</button>
              <button onClick={() => getCash(Number(prompt()))}>Снять со счета</button>
              <button onClick={() => addCustomer(prompt())}>Добавить клиента</button>
              <button onClick={() => dispatch(fetchCustomers())}>Получать клиентов из базы</button>
          </div>
            {customers.length > 0 ?
                <div>
                    {customers.map(customer =>
                        <div
                            style={{fontSize: "2rem", border: "1px solid black", padding: "10px", marginTop: 5}}
                            onClick={() => removeCustomer(customer)}
                        >
                            {customer.name}
                        </div>
                    )}
                </div>
                :
                <div style={{fontSize:"2rem", marginTop: 20}}>
                    Клиенты отсутствуют
                </div>
            }
        </div>
    );
};

export default App;