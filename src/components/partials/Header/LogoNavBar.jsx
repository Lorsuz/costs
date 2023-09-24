import React from 'react';
import './LogoNavBar.scss';
import logoImg from '../../../assets/coin.png';

const Index = () => {
	return (
		<div className="logo">
			<img src={logoImg} alt="ir para o inicio" className="logo" />
			<h1>Costs</h1>
		</div>
	);
};

export default Index;
