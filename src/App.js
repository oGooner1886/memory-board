import React from 'react';
import mainImage from './img/main.png';
import img1 from './img/Аджимуратов.png';
import img2 from './img/Бабенко.png';
import img3 from './img/Мешечко.png';
import img4 from './img/Уваров.png';
import img5 from './img/Черкасов.png';
import './App.css';

const App = () => {
  const heroes = [
    { id: 1, fullName: 'Аджимуратов Зеит Агезекович', image: img1 },
    { id: 2, fullName: 'Бабенко Алексей Андреевич', image: img2 },
    { id: 3, fullName: 'Мешечко Терентий Иванович', image: img3 },
    { id: 4, fullName: 'Уваров Иван Васильвевич', image: img4 },
    { id: 5, fullName: 'Черкасов Алексей Андреевич', image: img5 },
  ];

  return (
    <div className="App">
      <div className="img-container">
        <img className="imgmain" src={mainImage} alt="Главное изображение" />
      </div>
      
      <div className="text-content">
        <p className="save-text">//Сохраним подвиг в памяти</p>
        <h1 className="history-title">Истории героев</h1>
        <hr className="title-divider" />
      </div>
      
      <div className="image-gallery">
        {heroes.map((hero) => (
          <div key={hero.id} className="hero-card">
            <div className="hero-info">
              <p className="hero-name">{hero.id}. {hero.fullName}</p>
              <hr className="name-divider" />
            </div>
            <img 
              src={hero.image} 
              alt={`Портрет ${hero.fullName}`}
              className="hero-image" 
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default App;