import React from 'react';
import {
	FaArchive,
	FaBabyCarriage,
	FaBalanceScale,
	FaBible,
	FaBasketballBall,
	FaCar,
	FaCloudSun,
	FaConciergeBell,
	FaDungeon,
	FaFutbol,
	FaHorseHead,
	FaIceCream,
	FaMenorah,
	FaOtter,
	FaPaw,
	FaPepperHot,
	FaSkiing,
	FaSleigh,
	FaTrophy,
	FaVolleyballBall,
	FaLeaf,
} from 'react-icons/fa';

const Components = {
	FaArchive: FaArchive,
	FaBabyCarriage: FaBabyCarriage,
	FaBalanceScale: FaBalanceScale,
	FaBible: FaBible,
	FaBasketballBall: FaBasketballBall,
	FaCar: FaCar,
	FaCloudSun: FaCloudSun,
	FaConciergeBell: FaConciergeBell,
	FaDungeon: FaDungeon,
	FaFutbol: FaFutbol,
	FaHorseHead: FaHorseHead,
	FaIceCream: FaIceCream,
	FaMenorah: FaMenorah,
	FaOtter: FaOtter,
	FaPaw: FaPaw,
	FaPepperHot: FaPepperHot,
	FaSkiing: FaSkiing,
	FaSleigh: FaSleigh,
	FaTrophy: FaTrophy,
	FaVolleyballBall: FaVolleyballBall,
	FaLeaf: FaLeaf,
};

const Icon = ( props ) => {

	if (typeof Components[props.icon]  !== "undefined") {
		return React.createElement(Components[ props.icon ], {
			// key: Icon._uid,
			block: props.icon,
			fill: 'red',
		});
	}
	// component doesn't exist yet
	return React.createElement(
		() => <div>The component {Icon.component} has not been created yet.</div>,
		{ key: props.icon }
	);
};
export default Icon;