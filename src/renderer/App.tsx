import { MemoryRouter as Router, Routes, Route } from 'react-router-dom';
import icon from '../../assets/icon.svg';
import './App.css';
import VerticalCarousel from 'components/VerticalCarousel';
import data from '../../assets/data.json';
import briefcase from '../../assets/1.png'
import settings from '../../assets/settings.png'
import Vector from '../../assets/Vector.png'


export default function App() {
  return (
    <>
    <div className="top-section">
      <div className="greeting"><a style={{fontSize:'28px'}}>Good Morning Instructor!</a></div>
      <div className="home"><a style={{fontSize:'28px'}}>HOME</a></div>
    </div>
    <div className="carousel-container">
      <div className="carousel-heading"><a style={{fontSize:'86px'}}>TSM II <br/> SIMULATOR</a></div>
      <VerticalCarousel  data={data.slides} leadingText={data.leadingText} />
    </div>
    <div className="bottom-section">
      <div className="links">Links</div>
      <br/>
      <div className="icons">
        <button>
        <img width={25} src={settings}   />
        </button>
        <button>
        <img width={25} src={briefcase}  />
        </button>
        <button>
        <img width={25} src={Vector}  />
        </button>
      </div>
    </div>
    </>
  );
}
