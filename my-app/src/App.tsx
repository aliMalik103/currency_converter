
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { Header } from './components/Header';
import ConverionForm from './components/ConverionForm';
import DisplayBoard from './components/DisplayBoard';
import { AppService } from './services/app.service';
import { History } from './components/History';
import { useState } from 'react';
import React from 'react';

function App() {

  const [numberOfConersions, setNumberOfConversions] = useState<number>(0);
  const [currency, setCurrency] = useState<any>({});
  const [history, setHistory] = useState<any>([]);
  const [convertedAmount, setconvertedAmount] = useState<any>(0)

  const appService = new AppService();

  const convert = async (e: any) => {
    const response = await appService.convertAPI(currency);
    if (response) {
      setconvertedAmount(response.convertedAmount)
      setNumberOfConversions(numberOfConersions + 1);
    }
  }

  const getAllConversions = async () => {
    const conversions = await appService.getConversionsAPI();
    setHistory(conversions);
    setNumberOfConversions(conversions.length);
  }


  const onChangeForm = (e: any) => {
    let userClone = { ...currency }
    if (e.target.name === 'amount') {
      userClone.amount = e.target.value;
    }
    setCurrency(userClone);
  }
  const onChangeCurrency = (e: any, filed: string) => {


    setCurrency({ ...currency, [filed]: e.target.value })

  }

  return (
    <div className="App">
      <Header />
      <div className="container mrgnbtm">
        <div className="row">
          <div className="col-md-10">
            <ConverionForm
              currency={currency}
              onChangeCurrency={onChangeCurrency}
              onChangeForm={onChangeForm}
              convert={convert}
              convertedAmount={convertedAmount}
            />
          </div>
          <div className="col-md-2">
            <DisplayBoard
              numberOfConversions={numberOfConersions}
              getAllConversions={getAllConversions}
            />
          </div>
        </div>
        <div className="row mrgnbtm">
          <History conversions={history}></History>
        </div>
      </div>
    </div>
  );

}

export default App;