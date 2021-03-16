import React, { useEffect, useState } from 'react';
import './App.css';
import Header from './components/Header';
import moment from 'moment';
import PlayerInfo from './components/PlayerInfo';

const App = () => {

	const [players, setPlayers] = useState([]);
	const [teams, setTeams] = useState([]);
	const [searchQuery, setSearchQuery] = useState('');
	const [title, setTitle] = useState('All Players');
	const [subTitle, setSubTitle] = useState('List of all players by their value');
	const [searchResults, setSearchResults] = useState([]);

	useEffect(() => {

		fetch('https://api.jsonbin.io/b/604f1c137ea6546cf3ddf46e ', {
			method: 'GET',
		})
		.then(response => Promise.all([response.status, response.json()]))
		.then(([status, response]) => {
			setPlayers(response.playerList);
			setTeams(response.teamsList);
		})
		.catch(error => console.log(error));

	}, []);

	const handleSubmit = (event) => {
		event.preventDefault();
		setTitle('Search results for "' + searchQuery + '"');
		search(searchQuery);
	}

	const search = () => {

		let results = [];

		players.map(player => {
			if (player.PFName.toLowerCase().includes(searchQuery.toLowerCase()) || player.TName.toLowerCase().includes(searchQuery.toLowerCase())) {
				results.push(player);
			}
		});

		setSubTitle(results.length + ' results found');
		setSearchResults(results);

	}

	const handleOnChange = (event) => {
		let value = event.target.value;

		setSearchQuery(value);

		if (value === '') {
			setTitle('All Players');
			setSearchResults([]);
			setSubTitle('List of all players by their value');
		}
	}

	return (
		<>
			<Header onSubmit={handleSubmit} onChange={handleOnChange} />
			<div className="container">
				<h3 className="heading">{title}</h3>
				<p className="sub-heading">{subTitle}</p>
				<div className="row">
					{searchResults.length > 0 ? searchResults.map(item => (
						<PlayerInfo player={item} />
					)) : players.map(item => (
						<PlayerInfo player={item} />
					))}
				</div>
			</div>
		</>
	);
}

export default App;