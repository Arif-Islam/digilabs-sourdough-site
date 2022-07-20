import logo from './logo.svg';
import './App.css';
import Home from './components/Home/Home';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className='bg-[#FAFAFA] font'>
      <div className='max-w-[1300px] mx-auto'>
        <Home></Home>
      </div>
      <Footer></Footer>
    </div>
  );
}

export default App;
