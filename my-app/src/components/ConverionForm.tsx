import React from 'react'

interface IConversion {
    currency: any;
    onChangeForm: Function;
    convert: Function;
    onChangeCurrency: Function;
    convertedAmount: any
}

function ConverionForm({ onChangeForm, convert, onChangeCurrency, currency, convertedAmount }: IConversion) {
    const options = [
        { value: 'USD', label: 'US Dollar' },
        { value: 'EUR', label: 'Euro' },
        { value: 'JPY', label: 'Japnese' }
    ];

    return (
        <div className="container">
            <div className="row">
                <div className="col-md-8 mrgnbtm">
                    <h2>Currency Converter</h2>
                    <form>
                        <div className="row">
                            <div className="form-group col-md-6">
                                <div className="row">
                                    <label htmlFor="exampleInputEmail1">From</label>

                                    <select value={currency?.fromCurrency} onChange={(e) => onChangeCurrency(e, "fromCurrency")}>
                                        <option value="">Select an option</option>
                                        {options.map(option => (
                                            <option key={option.value} value={option.value}>{option.label}</option>
                                        ))}
                                    </select>

                                </div>
                            </div>
                            <div className="form-group col-md-6">
                                <div className="row">
                                    <label htmlFor="exampleInputEmail1">To</label>

                                    <select value={currency?.toCurrency} onChange={(e) => onChangeCurrency(e, "toCurrency")}>
                                        <option value="">Select an option</option>
                                        {options.map(option => (
                                            <option key={option.value} value={option.value}>{option.label}</option>
                                        ))}
                                    </select>

                                </div>
                            </div>

                        </div>
                        <div className="row">
                            <div className="form-group col-md-6">
                                <div className="row">
                                    <label htmlFor="exampleInputEmail1">Amount</label>

                                    <div className="form-group col-md-6">
                                        <input type="text" onChange={(e) => onChangeForm(e)} className="form-control" name="amount" id="amount" placeholder="amount" />
                                    </div>
                                </div>
                            </div>
                            <div className="form-group col-md-6">
                                <div className="row">
                                    <label htmlFor="exampleInputEmail1">Converted Amount</label>

                                    <div className="form-group col-md-6">
                                        <input type="text" disabled onChange={(e) => onChangeForm(e)} className="form-control" value={convertedAmount} name="amount" id="amount" placeholder="amount" />
                                    </div>
                                </div>
                            </div>˚
                        </div>
                        <button type="button" onClick={(e) => convert()} className="btn btn-success mrgnbtm">Convert</button>
                    </form>
                </div>
            </div>


        </div>
    )
}

export default ConverionForm