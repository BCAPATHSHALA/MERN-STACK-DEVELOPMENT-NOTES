import logo from './logo.svg';
import './App.css';
import Card from './components/Card';

function App() {
  return (
    <div className='hero-box'>
      <div className='card-container'>
            <Card 
            dynamicImage="https://github.com/BCAPATHSHALA/MERN-STACK-DEVELOPMENT-NOTES/blob/main/MERN%20Stack%20Development/22.%20REACT%20CLASS/images%20Projects01/image1.jpg?raw=true"
            dynamicViews="980"
            dynamicDay={4}
            dynamicTitle="CSS Variables | Toggle to the Dark Mode using CSS Variable..."
            />
            <Card 
            dynamicImage="https://github.com/BCAPATHSHALA/MERN-STACK-DEVELOPMENT-NOTES/blob/main/MERN%20Stack%20Development/22.%20REACT%20CLASS/images%20Projects01/image2.jpg?raw=true"
            dynamicViews="900"
            dynamicDay={5}
            dynamicTitle="CSS Variables | Toggle to the Dark Mode using CSS Variable..."
            />
            <Card 
            dynamicImage="https://github.com/BCAPATHSHALA/MERN-STACK-DEVELOPMENT-NOTES/blob/main/MERN%20Stack%20Development/22.%20REACT%20CLASS/images%20Projects01/image3.jpg?raw=true"
            dynamicViews="300"
            dynamicDay={6}
            dynamicTitle="CSS Variables | Toggle to the Dark Mode using CSS Variable..."
            />
            <Card 
            dynamicImage="https://github.com/BCAPATHSHALA/MERN-STACK-DEVELOPMENT-NOTES/blob/main/MERN%20Stack%20Development/22.%20REACT%20CLASS/images%20Projects01/image4.jpg?raw=true"
            dynamicViews="100"
            dynamicDay={9}
            dynamicTitle="CSS Variables | Toggle to the Dark Mode using CSS Variable..."
            />
            <Card 
            dynamicImage="https://github.com/BCAPATHSHALA/MERN-STACK-DEVELOPMENT-NOTES/blob/main/MERN%20Stack%20Development/22.%20REACT%20CLASS/images%20Projects01/image5.jpg?raw=true"
            dynamicViews="50"
            dynamicDay={10}
            dynamicTitle="CSS Variables | Toggle to the Dark Mode using CSS Variable..."
            />
            <Card 
            dynamicImage="https://github.com/BCAPATHSHALA/MERN-STACK-DEVELOPMENT-NOTES/blob/main/MERN%20Stack%20Development/22.%20REACT%20CLASS/images%20Projects01/image6.jpg?raw=true"
            dynamicViews="20"
            dynamicDay={11}
            dynamicTitle="CSS Variables | Toggle to the Dark Mode using CSS Variable..."
            />
    </div>
    </div>
  );
}

export default App;
