import { useEffect, useState } from "react";

const TestComp = (props) => {
  const [results, setResults] = useState("ready");
  const modelLoaded = () => {
    console.log("button pressed");
  };

  const examp1 = (text, timer) => {
    return new Promise(
      (resolve, reject) => {
        setTimeout(() => {
          console.log("this ran");
          resolve(text);
        }, timer);
      },
      (reject) => {
        "there was an error";
      },
    );
  };

  const loadExamp1 = async () => {
    await examp1("sample1", 2000).then((res) => {
      console.log(res);
    });
  };

  const callThis = async () => {
    console.log("a");
    await loadExamp1();
    console.log("b");
  };

  callThis();

  return (
    <div>
      hi
      <button onClick={modelLoaded}>Try this </button>
      <h1>{results}</h1>
    </div>
  );
};

export default TestComp;
