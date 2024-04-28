import React, {useEffect, useState} from 'react';
import {Link} from 'react-router-dom';

function UsersPage() {
	const [users, setUsers] = useState([]);

	useEffect(() => {
		fetch('https://jsonplaceholder.typicode.com/users')
				.then(response => response.json())
				.then(data => setUsers(data));
	}, []);

	return (
			<div>
				<h1>Users</h1>
				{users.map(user => (
						<div className="user-card" key={user.id}>
							<p>{user.name}</p>
							<Link to={`/albums/${user.id}`}>Albums</Link>
						</div>
				))}
			</div>
	);
}

export default UsersPage;
