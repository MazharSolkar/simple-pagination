import React, { useEffect, useState } from 'react';
import CardsContainer from './CardsContainer';
import Pagination from './Pagination';

const COINS_DATA =
	'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false';

function App() {
	const [data, setData] = useState([]);

	const [currentPage, setCurrentPage] = useState(1);
	const [ProductsPerPage, setProductsPerPage] = useState(10);

	useEffect(() => {
		fetchCoins();
	}, []);

	const fetchCoins = async () => {
		const response = await fetch(COINS_DATA);

		const data = await response.json();

		setData(data);
		console.log(data);
	};

	const totalProducts = data.length;
	console.log(totalProducts);

	const lastIndex = currentPage * ProductsPerPage;
	const firstIndex = lastIndex - ProductsPerPage;

	const currentProducts = data.slice(firstIndex, lastIndex);
	return (
		<>
			<CardsContainer currentProducts={currentProducts} />

			<Pagination
				currentPage={currentPage}
				setCurrentPage={setCurrentPage}
				ProductsPerPage={ProductsPerPage}
				totalProducts={totalProducts}
			/>
		</>
	);
}

export default App;
