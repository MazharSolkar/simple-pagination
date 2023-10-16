import React from 'react';

const Pagination = ({
	currentPage,
	setCurrentPage,
	ProductsPerPage,
	totalProducts,
}) => {
	const pages = [];

	for (let i = 1; i <= Math.ceil(totalProducts / ProductsPerPage); i++) {
		pages.push(i);
	}

	const nextPage = () => {
		if (currentPage < pages.length) {
			setCurrentPage(currentPage + 1);
		}
	};

	const prevPage = () => {
		if (currentPage > 1) {
			setCurrentPage(currentPage - 1);
		}
	};

	return (
		<div className='mt-10'>
			<button
				className={`border-2 p-2 m-2 bg-gray-400 ${
					currentPage <= pages[0] ? 'hidden' : ''
				}`}
				onClick={prevPage}>
				Prev
			</button>
			{pages.map((page) => (
				<button
					key={page}
					className={`border-2 w-8 text-lg text-center mx-2 ${
						page === currentPage ? 'bg-blue-400' : ''
					}`}
					onClick={() => setCurrentPage(page)}>
					{page}
				</button>
			))}
			<button
				className={`border-2 p-2 m-2 bg-gray-400 ${
					currentPage >= pages.length ? 'hidden' : ''
				}`}
				onClick={nextPage}>
				Next
			</button>
		</div>
	);
};

export default Pagination;
