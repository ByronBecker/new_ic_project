import * as React from "react";
import { new_proj } from "../../declarations/new_proj/index";
import { _SERVICE as ServiceTypes } from "../../declarations/new_proj/new_proj.did";

// sample usage of calling apis in main.mo
const MyHello = () => {
  const [name, setName] = React.useState('');
  const [message, setMessage] = React.useState('');
  const [num1, setNum1] = React.useState<bigint>(0n);
  const [num2, setNum2] = React.useState<bigint>(0n);
  const [addResult, setAddResult] = React.useState(0n);

  async function doGreet() {
    const greeting = await new_proj.greet(name);
    setMessage(greeting);
  }

  async function doAdd() {
    const addResult = await (new_proj as ServiceTypes).add(num1, num2);
    console.log("addResult =", addResult)
    setAddResult(addResult);
  }

  function setIfNumber(setter: React.Dispatch<React.SetStateAction<bigint>>, stringNumber: string) {
    const parsedNum = parseFloat(stringNumber);
    if (Boolean(parsedNum)) {
      setter(BigInt(parsedNum));
    }
  }


  return (
    <div style={{ "fontSize": "30px" }}>
      <div style={{ "backgroundColor": "yellow" }}>
        <p>Greetings, from DFINITY!</p>
        <p>
          {" "}
          Type your message in the Name input field, then click{" "}
          <b> Get Greeting</b> to display the result.
        </p>
      </div>
      <div style={{ margin: "30px" }}>
        <input
          id="name"
          value={name}
          onChange={(ev) => setName(ev.target.value)}
        ></input>
        <button onClick={doGreet}>Get Greeting!</button>
      </div>
      <div>
        Greeting is: "
        <span style={{ color: "blue" }}>{message}</span>"
      </div>
      <div style={{ margin: "30px" }}>
        <input
          id="num1"
          onBlur={(ev) => setIfNumber(setNum1, ev.target.value)}
        ></input>
        <input
          id="num2"
          onBlur={(ev) => setIfNumber(setNum2, ev.target.value)}
        ></input>
        <button onClick={doAdd}>Get Greeting!</button>
      </div>
      <div>
        num1 + num2 =&nbsp; 
        <span style={{ color: "blue" }}>{addResult}</span>
      </div>
    </div>
  );
};

export default MyHello;