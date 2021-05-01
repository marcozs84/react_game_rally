import { useEffect, useState } from 'react';
// import ReactDOM from 'react-dom';
import Icon from './Icon';



const Card = ( { card:item, left, top, onClick } ) => {

	const [ card ] = useState(item);
	const [ flipped ] = useState(false);

	return (
		<div className="card" >
			<div className={`card_inner card_${ card.id } ${ flipped ? 'is-flipped' : ''} `} onClick={ () => onClick( card.id ) }>
				<div className="card_face card_face_front">
					<div className="card_icon">
						<Icon icon="FaLeaf" />
					</div>
				</div>
				<div className="card_face card_face_back">
					<div className="card_content">
						<div className="card_icon">
							<Icon icon={ card.icon } />
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

Card.defaultProps = {
	top: '0px',
	left: '0px',
};

export default Card;