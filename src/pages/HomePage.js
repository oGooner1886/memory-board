import React from 'react';
import Header from '../components/Header'; // Импорт Header
import './HomePage.css'

function HomePage() {
  return (
    <div className="container">
        <div className="text">
            <h1 className="text-title">Подвиг, сохранённый в цифре</h1>
            <p className="text-p">Цифровые волонтёры Астраханской области о своих <br></br>предках, сражавшихся в годы Великой <br></br>Отечественной войны за свободу, за мир, за Родину.  </p>
        </div>
        <Header /> {/* Header теперь здесь */}
    <div className="home-page">
      <main className="home-page__main">
        <h1 className="home-page__title">Добро пожаловать на главную страницу!</h1>
        <p className="home-page__text">Это контент главной страницы.</p>
      </main>
    </div>
    </div>
  );
}

export default HomePage;