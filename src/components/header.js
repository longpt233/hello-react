import React, { useState } from "react";  
import {
	useLocation,
	useHistory,
} from 'react-router-dom'
 

const Navbar = () => {
	const location = useLocation();
	const history = useHistory();

	const navbar = [
		{
			id: 1,
			name: 'Manage Users',
			path: '/users',
		},
		{
			id: 2,
			name: 'Manage Vocabulary',
			path: '/manage-vocab/show',
		},
		{
			id: 3,
			name: 'Manage Grammar',
			path: '/manage-grammar',
		},
		{
			id: 4,
			name: 'Manage Test',
			path: '/manage-test',
		},
		{
			id: 5,
			name: 'Account Setting',
			path: '/admin-account',
		}
	]

	return (
		<div >
			{
				navbar.map((item, id) => (
					<div
						key={id}
						className={
							(location.pathname === item.path) ? "active" :
								(location.pathname?.includes(item.path) && item.path !== "/") ? "active" : ""
						
                        }
						onClick={() => {
							history.push(`${item.path}`)
						}}
					>
						{item.name}
					</div>
				))
			}
		</div>
	)
}

export default Navbar;