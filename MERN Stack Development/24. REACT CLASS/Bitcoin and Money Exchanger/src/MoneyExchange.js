import React, { useEffect, useState } from "react";
import "./App.css";
import { Card, Input, Select, Form } from "antd";

function MoneyExchange() {
  const firstDefaultValue = "USD";
  const secondDefaultValue = "INR";
  const urlApi = "https://open.er-api.com/v6/latest/USD";
  const [moneyList, setMoneyList] = useState([]);
  const [inputQuenty, setInputQuenty] = useState("0");
  const [firstSelectValue, setFirstSelectValue] = useState(firstDefaultValue);
  const [secondSelectValue, setSecondSelectValue] =
    useState(secondDefaultValue);
  const [outputvalu, setOutputValue] = useState(0);

  useEffect(() => {
    fetchData();
  }, []);

  async function fetchData() {
    try {
      const response = await fetch(urlApi);
      const jsonData = await response.json();
      const rate = jsonData.rates;
      const objToArray = Object.entries(rate);
      const tempArray = objToArray.map((item) => {
        return {
          value: item[0],
          label: item[0],
          rate: item[1],
        };
      });
      setMoneyList(tempArray);
    } catch (error) {}
  }
  useEffect(() => {
    if (moneyList.length == 0) {
      return;
    }
    const firstSelectRate = moneyList.find((item) => {
      return item.value === firstSelectValue;
    }).rate;
    const secondSelectRate = moneyList.find((item) => {
      return item.value === secondSelectValue;
    }).rate;

    // console.log(firstSelectRate, secondSelectRate);

    const outputResult = (inputQuenty * secondSelectRate) / firstSelectRate;
    setOutputValue(outputResult.toFixed(4));
  }, [inputQuenty, firstSelectValue, secondSelectValue]);

  return (
    <div className="hero-box">
      <Card
        className="card"
        title={
          <h1>
            <i className="fa-solid fa-hand-holding-dollar"></i>Money Exchanger
          </h1>
        }
      >
        <Form style={{ width: "large" }}>
          <Form.Item>
            <Input onChange={(e) => setInputQuenty(e.target.value)} />
          </Form.Item>
        </Form>
        <div className="selection-box">
          <Select
            className="select"
            defaultValue={firstDefaultValue}
            options={moneyList}
            onChange={(value) => setFirstSelectValue(value)}
          />
          <Select
            className="select"
            defaultValue={secondDefaultValue}
            options={moneyList}
            onChange={(value) => setSecondSelectValue(value)}
          />
        </div>
        <div className="output-box">
          <p>
            {inputQuenty} {firstSelectValue} = {outputvalu} {secondSelectValue}
          </p>
        </div>
      </Card>
    </div>
  );
}

export default MoneyExchange;
