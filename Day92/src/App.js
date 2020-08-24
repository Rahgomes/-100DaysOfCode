import React from 'react';

import Header from './components/header/Header';
import Form from './components/form/Form';
import Installments from './components/installments/Installments';

import { compoundInterest } from './helpers/interest';

export default function App() {
  const [initialCapital, setInitialCapital] = React.useState(100);
  const [monthlyRate, setMonthlyRate] = React.useState(0);
  const [period, setPeriod] = React.useState(1);
  const [paymentControl, setPaymentControl] = React.useState([]);

  React.useEffect(() => {
    const getCompoundInterest = () => {
      return compoundInterest(initialCapital, monthlyRate, period);
    };

    setPaymentControl(getCompoundInterest());
  }, [initialCapital, monthlyRate, period]);

  const handleInitialAmount = newAmount => setInitialCapital(newAmount);
  const handleMonthlyRate = newRate => setMonthlyRate(newRate);
  const handlePeriod = newPeriod => setPeriod(newPeriod);

  return (
    <React.Fragment>
      <Header />
      <div className="container">
        <Form
          onChangeInitialAmount={handleInitialAmount}
          onChangeMonthlyRate={handleMonthlyRate}
          onChangePeriod={handlePeriod}
          valueInitialAmount={initialCapital}
          valueMonthlyRate={monthlyRate}
          valuePeriod={period}
        />
        <Installments
          paymentControl={paymentControl}
        />
      </div>
    </React.Fragment>
  );
}
