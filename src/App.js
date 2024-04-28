import React from 'react';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import './App.css';
import UsersPage from './UsersPage';
import UserAlbums from './UserAlbums';
import AlbumPhotos from './AlbumPhotos';

function App() {
	return (
			<Router>
				<Routes>
					<Route path="/" element={<UsersPage/>}/>
					<Route path="/albums/:userId" element={<UserAlbums/>}/>
					<Route path="/photos/:albumId" element={<AlbumPhotos/>}/>
				</Routes>
			</Router>
	);
}

export default App;
