import User from "./User/User";
import Button from "../Button/Button";
import Card from "../Card/Card";

import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";

// Actions imports
import setHidden from "../../store/actions/setHidden";

// Utility imports
import getLocalStorage from "../../utils/getLocalStorage";

import createDefaultUser from "../../common/createDefaultUser";

const Users = () => {
	const dispatch = useDispatch();
	const state = useSelector(state => state.users);

	const currentUserId = getLocalStorage("userId");

	// Default user creation handling
	useEffect(() => {
		// Create a user if there is not one
		if (currentUserId === null) createDefaultUser(dispatch);
	}, []);

	const revealVotes = () => {
		dispatch(setHidden(false));
	};

	const loadingMsg = currentUserId
		? "Loading users..."
		: "Generating default user...";

	// Duplicating users array to avoid mutating state reference
	let { users } = state;

	// Create sorted list only if needed (for performance reasons)
	if (state.hidden === false) {
		users = users.sort((prev, next) => {
			const [prevId] = Object.keys(prev);
			const [nextId] = Object.keys(next);

			return next[nextId].vote - prev[prevId].vote;
		});
	}

	let usersList = users.map(user => {
		// Extracting firebase id (object key)
		const [userId] = Object.keys(user);

		return (
			<li className="py-4" key={userId}>
				<User
					name={user[userId].username}
					vote={user[userId].vote}
					own={currentUserId === userId}
				/>
			</li>
		);
	});

	return (
		<Card className="my-10">
			<div className="bg-white px-4 py-5 border-b border-gray-200 sm:px-6">
				<div className="-ml-4 -mt-2 flex items-center justify-between flex-wrap sm:flex-nowrap">
					<div className="ml-4 mt-2">
						<h3 className="text-lg leading-6 font-medium text-gray-900">
							Participants
						</h3>
					</div>
					<div className="ml-4 mt-2 flex-shrink-0">
						<Button title="Reveal!" handleClick={revealVotes} />
					</div>
				</div>
			</div>
			<div className="px-4 py-5 sm:p-3">
				<div className="flow-root">
					<ul className="divide-y divide-gray-200">
						{state.users.length ? usersList : loadingMsg}
					</ul>
				</div>
			</div>
		</Card>
	);
};

export default Users;
