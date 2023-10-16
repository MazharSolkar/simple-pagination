import React from 'react';
import Card from './Card';
const CardsContainer = ({ currentProducts }) => {
	return (
		<div className='grid place-items-center'>
			<div className='grid grid-cols-3 gap-4'>
				{currentProducts.map((item) => (
					<Card key={item.id} name={item.name} image={item.image} />
				))}
			</div>
		</div>
	);
};

export default CardsContainer;
