import "./App.css";
import Avatar from "./components/Avatar";
import Card from "./components/Card";

function App() {
  return (
    <div className="gridBox">
      <Card
        name="MANOJ"
        email="manoj@gmail.com"
        image="https://via.placeholder.com/200"
      />
      <Card
        name="SANOJ"
        email="manoj@gmail.com"
        image="https://via.placeholder.com/200"
      />
      <Card
        name="AMIT"
        email="manoj@gmail.com"
        image="https://via.placeholder.com/200"
      />
      <Avatar name="Random" image="https://via.placeholder.com/100" />
    </div>
  );
}

export default App;
