import React, {useEffect, useState} from 'react';
import {useParams} from 'react-router-dom';

function AlbumPhotos() {
	const {albumId} = useParams();
	const [photos, setPhotos] = useState([]);

	useEffect(() => {
		fetch(`https://jsonplaceholder.typicode.com/photos?albumId=${albumId}`)
				.then(response => response.json())
				.then(data => setPhotos(data));
	}, [albumId]);

	return (
			<div>
				<h1>Photos</h1>
				{photos.map(photo => (
						<div className="photo-card" key={photo.id}>
							<img src={photo.thumbnailUrl} alt={photo.title}/>
							<p>{photo.title}</p>
						</div>
				))}
			</div>
	);
}

export default AlbumPhotos;
