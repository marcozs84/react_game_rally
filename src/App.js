import React from "react";
import './App.css';
import Card from './components/Card';
import { ReactComponent as Track } from './track5.svg';
import track from './track.svg';

const App = () => {

	const cards = [
		{   id: 1,      imagen: 'boat', icon: 'FaArchive', },
		{   id: 2,      imagen: 'bus',  icon: 'FaBabyCarriage',  },
		{   id: 3,      imagen: 'bus',  icon: 'FaBalanceScale',  },
		{   id: 4,      imagen: 'bus',  icon: 'FaBible',  },
		{   id: 5,      imagen: 'bus',  icon: 'FaBasketballBall',  },
		{   id: 6,      imagen: 'bus',  icon: 'FaCar',  },
		{   id: 7,      imagen: 'bus',  icon: 'FaCloudSun',  },
		{   id: 8,      imagen: 'bus',  icon: 'FaConciergeBell',  },
		{   id: 9,      imagen: 'bus',  icon: 'FaDungeon',  },
		{   id: 10,     imagen: 'bus',  icon: 'FaFutbol',  },
		{   id: 11,     imagen: 'bus',  icon: 'FaHorseHead',  },
		{   id: 12,     imagen: 'bus',  icon: 'FaIceCream',  },
		{   id: 13,     imagen: 'bus',  icon: 'FaMenorah',  },
		{   id: 14,     imagen: 'bus',  icon: 'FaOtter',  },
		{   id: 15,     imagen: 'bus',  icon: 'FaPaw',  },
		{   id: 16,     imagen: 'bus',  icon: 'FaPepperHot',  },
		{   id: 17,     imagen: 'bus',  icon: 'FaSkiing',  },
		{   id: 18,     imagen: 'bus',  icon: 'FaSleigh',  }
		];

	const cards_top = cards.filter( (item, index, array) => index <= 5 );
	const cards_bottom = cards.filter( (item, index, array) => index >= 12 );
	const cards_left = cards.filter( (item, index, array) => index > 5 && index < 9 );
	const cards_right = cards.filter( (item, index, array) => index > 8 && index < 12 );

	const onCardClick = ( id ) => {
		const card = document.querySelector('.card_' + id);
		card.classList.toggle('is-flipped');

	};

	return (
		<div className="App">

			<div className="wrapper">
				<div className="cards_top">
					{ cards_top.map( ( item, index, array ) => (
						<Card key={ item.id } card={ item } top="10px" left={ (index*100) } onClick={ onCardClick } />
					) )}
				</div>
				<div className="cards_left">
					{ cards_left.map( ( item, index, array ) => (
						<Card key={ item.id } card={ item } top="10px" left={ (index*100) } onClick={ onCardClick } />
					) )}
				</div>
				<div className="cards_map">

					<div className="track_container">
						<Track  />
					</div>

				</div>
				<div className="cards_right">
					{ cards_right.map( ( item, index, array ) => (
						<Card key={ item.id } card={ item } top="10px" left={ (index*100) } onClick={ onCardClick } />
					) )}
				</div>
				<div className="cards_bottom">
					{ cards_bottom.map( ( item, index, array ) => (
						<Card key={ item.id } card={ item } top="10px" left={ (index*100) } onClick={ onCardClick } />
					) )}
				</div>
			</div>


			{/*<Cards cards={ cards } />*/}

			{/*<Card key={ item.id } card={ item } top="10px" left={ (index*100) } onClick={ onCardClick } />*/}





			{/*<header className="App-header">*/}
			{/*<img src={logo} className="App-logo" alt="logo" />*/}
			{/*<p>*/}
			{/*Edit <code>src/App.js</code> and save to reload.*/}
			{/*</p>*/}
			{/*<a*/}
			{/*className="App-link"*/}
			{/*href="https://reactjs.org"*/}
			{/*target="_blank"*/}
			{/*rel="noopener noreferrer"*/}
			{/*>*/}
			{/*Learn React*/}
			{/*</a>*/}
			{/*</header>*/}
		</div>
	);
};

export default App;
