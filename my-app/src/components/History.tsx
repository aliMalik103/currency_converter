import React from 'react'

export const History = ({conversions}: any) => {

    // console.log('users length:::', users.length)
    if (conversions&&conversions.length === 0) return null

    const CurrencyRow = (user: any, index: number) => {

        return(
              <tr key = {index} className={index%2 === 0?'odd':'even'}>
                 <td>{user.fromCurrency}</td>
                  <td>{user.toCurrency}</td>
                 
                  <td>{user.amount}</td>
                  <td>{user.convertedAmount}</td>
              </tr>
          )
    }

    const currencyTable = conversions.map((currency: any, index: number) => CurrencyRow(currency,index))

    return(
        <div className="container">
            <h2>Conversions </h2>
            <table className="table table-bordered">
                <thead>
                <tr>
                   
                    <th>Source Currency</th>
                    <th>OutPut Currency</th>
                    <th>amount</th>
                    <th>Convert Amount</th>
                </tr>
                </thead>
                <tbody>
                    {currencyTable}
                </tbody>
            </table>
        </div>
    )
}