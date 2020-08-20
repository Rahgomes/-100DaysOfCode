import React, { useState, Fragment } from 'react';
import Counter from './components/counter/Counter';
import Counter2 from './components/counter/Counter2';
import Band from './components/counter/Band';

export default function App() {
  const [currentCounter, setCurrentCounter] = useState(3);
  const [steps, setSteps] = useState(0);

  const handleCount = (clickType) => {
    setCurrentCounter(clickType === '+' ? currentCounter + 1 : currentCounter - 1);
    setSteps(steps + 1);
  }

  return (
    <Fragment>
      <h3>Band</h3>
      <Band />
      <h3>Counter 1</h3>
      <Counter />
      <Counter />
      <Counter />
      <h3>Counter 2</h3>
      <Counter2 onCount={handleCount} countValue={currentCounter} currentStep={steps} />
      <Counter2 onCount={handleCount} countValue={currentCounter} currentStep={steps} />
      <Counter2 onCount={handleCount} countValue={currentCounter} currentStep={steps} />
    </Fragment>
  )
}
