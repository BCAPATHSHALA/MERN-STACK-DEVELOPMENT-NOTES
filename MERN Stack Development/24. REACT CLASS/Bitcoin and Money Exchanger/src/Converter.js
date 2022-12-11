import React, { useEffect, useState } from "react";
import "./App.css";
import { Button, Card, Form, Input, Select } from "antd";
import { RiCoinsLine } from "react-icons/ri";

function Converter() {
  const urlApi = "https://api.coingecko.com/api/v3/exchange_rates";
  const defaultFirstSelectValue = "Bitcoin";
  const defaultSecondSelectValue = "Ether";
  const [cryptoList, setCryptoList] = useState([]);
  const [inputValue, setInputValue] = useState("0");
  const [firstSelect, setFirstSelect] = useState(defaultFirstSelectValue);
  const [secondSelect, setSecondSelect] = useState(defaultSecondSelectValue);
  const [result, setResult] = useState("0");
  useEffect(() => {
    fetchData();
  }, []);

  async function fetchData() {
    try {
      const response = await fetch(urlApi);
      const jsonData = await response.json();

      const data = jsonData.rates;
      const tempArray = Object.entries(data).map((item) => {
        return {
          value: item[1].name,
          label: item[1].name,
          rate: item[1].value,
        };
      });
      setCryptoList(tempArray);
    } catch (error) {}
  }

  useEffect(() => {
    if (cryptoList.length == 0) {
      return;
    }
    const firstSelectRate = cryptoList.find((item) => {
      return item.value === firstSelect;
    }).rate;
    const secondSelectRate = cryptoList.find((item) => {
      return item.value === secondSelect;
    }).rate;

    const outputResult = (inputValue * secondSelectRate) / firstSelectRate;
    setResult(outputResult.toFixed(4));
  }, [inputValue, firstSelect, secondSelect]);

  return (
    <div>
      <Card
        className="card"
        title={
          <h1>
            <RiCoinsLine />
            Crypto Converter
          </h1>
        }
      >
        <Form style={{ width: "large" }}>
          <Form.Item>
            <Input onChange={(event) => setInputValue(event.target.value)} />
          </Form.Item>
        </Form>
        <div className="selection-box">
          <Select
            className="select"
            defaultValue={defaultFirstSelectValue}
            options={cryptoList}
            onChange={(value) => setFirstSelect(value)}
          />
          <Select
            className="select"
            defaultValue={defaultSecondSelectValue}
            options={cryptoList}
            onChange={(value) => setSecondSelect(value)}
          />
        </div>
        <div>
          <p className="output-box">
            {inputValue} {firstSelect} = {result} {secondSelect}
          </p>
        </div>
      </Card>
    </div>
  );
}

export default Converter;
