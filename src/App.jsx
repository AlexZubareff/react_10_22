
import { Form as FormClass } from './class-components/Form';
import { Count as CountClass} from './class-components/Count';
import { Form } from './components/Form/Form';
import { Count } from './components/Count';
import { Child } from './components/Child';
import { useState } from 'react';

import './index.css'


export const App = () => {

  const [name, setName] = useState('Geek')
  const arr = ['ivanov', 'petrov', 'sidorov']

  const handleChangeName = (ev) => {
    setName(ev.target.value)
  }

  return (
    <div className="App">
      <p style={{backgroundColor: 'red'}}>Class component</p>
      <FormClass />
      <CountClass count = {10}/>
      
      <p>Func component</p>
      <Count />
      <Form />
      <hr />
      <h3>Parent component</h3>
      <input onChange={handleChangeName}/>
      <h3>Child component</h3>
      <Child name={name}/>
      {arr.map((item, idx) => <div key={idx}>{item}</div>)}
    </div>
  );
}


