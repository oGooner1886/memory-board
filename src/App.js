import img from './img/main.png';
import img1 from './img/Аджимуратов.png';
import img2 from './img/Бабенко.png';
import img3 from './img/Мешечко.png';
import img4 from './img/Уваров.png';
import img5 from './img/Черкасов.png';
import './App.css';

const App = () => {
  const images = [img1, img2, img3, img4, img5];
  const names = [
    { id: 1, fullName: 'Аджимуратов Зеит Агезекович' },
    { id: 2, fullName: 'Бабенко Алексей Андреевич' },
    { id: 3, fullName: 'Мешечко Терентий Иванович' },
    { id: 4, fullName: 'Уваров Иван Васильвевич' },
    { id: 5, fullName: 'Черкасов Алексей Андреевич' },
  ];

  return (
    <div className="App">
      <div className="img-container">
        <img className="imgmain" src={img} alt="Top" />
      </div>
      <div className="text-container">
        <p id="save">//Сохраним подвиг в памяти</p>
        <h1 className="history">Истории героев</h1>
        <hr />
      </div>
      <div className="image-gallery">
        {images.map((image, index) => (
          <div key={index} className="image-item">
            <div className="name-item">
              <p>{names[index].id}. {names[index].fullName}</p>
            </div>
            <img src={image} alt={`Image ${index + 1}`} style={{ width: '356px', margin: '10px' }} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default App;
