// import logo from "./logo.svg";
import "./App.css";
import CombineCard2 from "./components/CombineCard2";
import CombineCard1 from "./components/CombineCard1";

function App() {
  return (
    <div className="card-container">
      <CombineCard1 />
      <div className="combine-box">
        <CombineCard2
          dynamicImage="https://raw.githubusercontent.com/BCAPATHSHALA/MERN-STACK-DEVELOPMENT-NOTES/d48ad56b441dac85ca20cc50d814798101181106/MERN%20Stack%20Development/22.%20REACT%20CLASS/ASSIGNMENT02/Images%20Assignment02/asset%2011.svg"
          dynamicHeading="Card sorting"
          dynamicDesc="Discover how people group and label information."
        />
        <CombineCard2
          dynamicImage="https://raw.githubusercontent.com/BCAPATHSHALA/MERN-STACK-DEVELOPMENT-NOTES/d48ad56b441dac85ca20cc50d814798101181106/MERN%20Stack%20Development/22.%20REACT%20CLASS/ASSIGNMENT02/Images%20Assignment02/asset%2013.svg"
          dynamicHeading="Prototype test"
          dynamicDesc="Discover how people navigate your Figma prototypes."
        />
        <CombineCard2
          dynamicImage="https://raw.githubusercontent.com/BCAPATHSHALA/MERN-STACK-DEVELOPMENT-NOTES/d48ad56b441dac85ca20cc50d814798101181106/MERN%20Stack%20Development/22.%20REACT%20CLASS/ASSIGNMENT02/Images%20Assignment02/asset%2014.svg"
          dynamicHeading="First click test"
          dynamicDesc="Test interaction with first click and navigation tests."
        />
        <CombineCard2
          dynamicImage="https://raw.githubusercontent.com/BCAPATHSHALA/MERN-STACK-DEVELOPMENT-NOTES/d48ad56b441dac85ca20cc50d814798101181106/MERN%20Stack%20Development/22.%20REACT%20CLASS/ASSIGNMENT02/Images%20Assignment02/asset%2015.svg"
          dynamicHeading="Design surveys"
          dynamicDesc="Get feedback on images, videos or audio files."
        />
        <CombineCard2
          dynamicImage="https://raw.githubusercontent.com/BCAPATHSHALA/MERN-STACK-DEVELOPMENT-NOTES/d48ad56b441dac85ca20cc50d814798101181106/MERN%20Stack%20Development/22.%20REACT%20CLASS/ASSIGNMENT02/Images%20Assignment02/asset%2016.svg"
          dynamicHeading="Preference tests"
          dynamicDesc="Find out which designs users prefer and why."
        />
        <CombineCard2
          dynamicImage="https://raw.githubusercontent.com/BCAPATHSHALA/MERN-STACK-DEVELOPMENT-NOTES/d48ad56b441dac85ca20cc50d814798101181106/MERN%20Stack%20Development/22.%20REACT%20CLASS/ASSIGNMENT02/Images%20Assignment02/asset%2017.svg"
          dynamicHeading="Five second tests"
          dynamicDesc="Test comprehensibility by measuring first impressions."
        />
      </div>
    </div>
  );
}

export default App;
