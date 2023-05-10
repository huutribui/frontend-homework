import React, { useEffect, useState } from 'react';
import { Doughnut } from 'react-chartjs-2';
import {
	Chart as ChartJS,
	ArcElement,
	Tooltip,
	Legend,
	Colors,
} from 'chart.js';
import axios from 'axios';

ChartJS.register(ArcElement, Tooltip, Legend, Colors);
// url for the Thrones API
const url = 'https://thronesapi.com/api/v2/Characters';

const backgroundColors = [
	'rgba(54, 162, 235, 0.8)',
	'rgba(255, 206, 86, 0.8)',
	'rgba(255, 99, 132, 0.8)',
	'rgba(75, 192, 192, 0.8)',
	'rgba(153, 102, 255, 0.8)',
	'rgba(255, 159, 64, 0.8)',
	'rgba(199, 199, 199, 0.8)',
	'rgba(83, 102, 255, 0.8)',
	'rgba(40, 159, 64, 0.8)',
	'rgba(210, 199, 199, 0.8)',
	'rgba(78, 52, 199, 0.8)',
];

const borderColors = [
	'rgba(54, 162, 235, 1)',
	'rgba(255, 206, 86, 1)',
	'rgba(255, 99, 132, 1)',
	'rgba(75, 192, 192, 1)',
	'rgba(153, 102, 255, 1)',
	'rgba(255, 159, 64, 1)',
	'rgba(159, 159, 159, 1)',
	'rgba(83, 102, 255, 1)',
	'rgba(40, 159, 64, 1)',
	'rgba(210, 199, 199, 1)',
	'rgba(78, 52, 199, 1)',
];
const HouseChart = () => {
	const [data, setData] = useState({});
	useEffect(() => {
		const init = async () => {
			const characters = await fetchData();
			const characterCounts = countCharactersByHouse(characters);
			console.log('COUNT', characterCounts);
			const chartData = renderChart(characterCounts);
			setData(chartData);
		};
		init();
	}, []);

	const fetchData = async () => {
		const response = await axios(url);
		return response.data;
	};

	const countCharactersByHouse = (characters) => {
		const houses = {};
		characters.forEach((character) => {
			let house = character.family;
			house = house.replace('House ', '');
			if (house === '' || house === 'None' || house === 'Unkown')
				house = 'Unknown';
			else if (
				house === 'Targaryan' ||
				house === 'Worm' ||
				house === 'Naathi' ||
				house === 'Naharis'
			)
				house = 'Targaryen';
			else if (house === 'Lanister' || house === 'Qyburn') house = 'Lannister';
			else if (house === 'Lorathi') house = 'Lorath';
			else if (house === 'Sand' || house === 'Viper') house = 'Martell';
			if (!houses[house]) {
				houses[house] = 1;
			} else {
				houses[house]++;
			}
		});
		return houses;
	};

	const renderChart = (input) => {
		const data = {
			labels: Object.keys(input),
			datasets: [
				{
					label: 'Members of House',
					data: Object.values(input),
					backgroundColor: backgroundColors,
					borderColor: borderColors,
					borderWidth: 1,
				},
			],
		};
		return data;
	};

	return (
		<div className="w-50 m-auto">
			{Object.keys(data).length !== 0 && <Doughnut data={data} />}
		</div>
	);
};

export default HouseChart;
