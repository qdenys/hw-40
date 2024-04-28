import React, {useEffect, useState} from 'react';
import {Link, useParams} from 'react-router-dom';

function UserAlbums() {
	const {userId} = useParams();
	const [albums, setAlbums] = useState([]);

	useEffect(() => {
		fetch(`https://jsonplaceholder.typicode.com/albums?userId=${userId}`)
				.then(response => response.json())
				.then(data => setAlbums(data));
	}, [userId]);

	return (
			<div>
				<h1>Albums</h1>
				{albums.map(album => (
						<div className="album-card" key={album.id}>
							<p>{album.title}</p>
							<Link to={`/photos/${album.id}`}>Photos</Link>
						</div>
				))}
			</div>
	);
}

export default UserAlbums;
