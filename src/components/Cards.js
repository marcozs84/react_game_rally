import Card from './Card';

const Cards = ( { cards } ) => {


	const onCardClick = ( id ) => {
		const card = document.querySelector('.card_' + id);
		card.classList.toggle('is-flipped');
	};

	return (
		<div className="cards">
			{ cards.map( ( item, index, array ) => (
				<Card key={ item.id } card={ item } top="10px" left={ (index*100) } onClick={ onCardClick } />
			) )}
		</div>
	);
};

export default Cards;