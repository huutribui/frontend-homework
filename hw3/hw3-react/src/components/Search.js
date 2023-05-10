import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Container, Row, Col, Figure } from 'react-bootstrap';

const url = 'https://thronesapi.com/api/v2/Characters';
const Search = () => {
	const [data, setData] = useState([]);
	const [filteredData, setFilteredData] = useState([]);
	const [searchText, setSearchText] = useState('');
	const [error, setError] = useState(false);
	useEffect(() => {
		async function init() {
			const data = await axios(url);
			setData(data.data);
			setFilteredData(data.data);
		}
		init();
	}, []);

	useEffect(() => {
		if (!searchText) setFilteredData(data);
		else {
			let filteredData = data.filter((character) =>
				character.fullName.toLowerCase().includes(searchText)
			);
			console.log('FILTERED DATA: ', filteredData);
			setFilteredData(filteredData);
			if (filteredData.length <= 0) setError(true);
			else setError(false);
		}
	}, [searchText]);

	const handleChangeInput = (event) => {
		event.preventDefault();
		setSearchText(event.target.value);
	};

	const renderCharacters = (filteredData) => {
		const characters = filteredData.map((character) => (
			<Figure id={`img-${character.id}`} className="bg-dark p-2 m-2 text-white">
				<Figure.Image
					width={'250px'}
					height={'300px'}
					src={character.imageUrl}
					alt={`A portrait of ${character.fullName}`}
				></Figure.Image>
				<Figure.Caption className=" text-white">
					{character.fullName}
				</Figure.Caption>
				<p className="d-block text-white">{character.title}</p>
			</Figure>
		));

		return characters;
	};
	return (
		<div>
			<h4 className="m-3">This is the Search page</h4>
			<form class="d-flex  mx-5" role="search">
				<input
					class="form-control me-2"
					type="search"
					placeholder="Search"
					aria-label="Search"
					onChange={handleChangeInput}
				/>
			</form>
			<Container>
				<div className="mt-2">
					<div className="py-4 d-flex flex-wrap justify-content-center">
						{renderCharacters(filteredData)}
					</div>
				</div>
			</Container>
		</div>
	);
};

export default Search;
