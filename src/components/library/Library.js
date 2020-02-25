import React, { useEffect } from 'react';
import axios from 'axios';
import Search from '../search/Search';
import styled from 'styled-components';

const LibraryContainer = styled.div``;

const Library = props => {
	useEffect(() => {
		axios
			.get(
				`http://localhost:5000/api/${localStorage.getItem(
					'user_id'
				)}/library`,
				{ withCredentials: true }
			)
			.then(response => console.log(response))
			.catch(error => console.log(error));
	}, []);

	const signOut = () => {
		axios
			.get('http://localhost:5000/api/auth/signout', {
				withCredentials: true
			})
			.then(response => {
				localStorage.removeItem('user_id');
				props.history.push('/');
			})
			.catch(error => console.log(error));
	};

	return (
		<>
			<button onClick={signOut}>Sign Out</button>
			<h1>What are you reading?</h1>
			<p>
				Search for a book to track your reading progress and add books
				to shelves.
			</p>
			<Search />
			<h2>My Shelves</h2>
			<p>Create shelves and add books to your custom shelves.</p>
			<p>To be read (0)</p>
			<p>In progress (0)</p>
			<p>Finished (0)</p>
		</>
	);
};

export default Library;
