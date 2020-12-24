import User from "./User/User";
import Button from "../Button/Button";
import Card from "../Card/Card";

import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import addUser from "../../store/actions/addUser";
import setHidden from "../../store/actions/setHidden";

import generateId from "../../utils/generateId";

const Users = props => {
	const dispatch = useDispatch();
	const state = useSelector(state => state.users);

	// First page visit handling
	useEffect(() => {
		const createDefaultUser = () => {
			const id = generateId();
			const payload = {
				id,
				username: `user${id}`,
				vote: null
			};

			dispatch(addUser(payload));

			//TODO: Store only ID, get rest from firebase

			// Save in local storage
			localStorage.setItem("user", JSON.stringify(payload));
		};

		// Either create user, or use existing one
		if (localStorage.getItem("user") === null) {
			createDefaultUser();
		} else {
			const user = JSON.parse(localStorage.getItem("user"));

			dispatch(addUser(user));
		}
	}, []);

	const revealVotes = () => {
		dispatch(setHidden(false));
	};

	const UsersList = (
		<div className="flow-root">
			<ul className="divide-y divide-gray-200">
				{state.users.map((user, index) => {
					return (
						<li className="py-4" key={user.id}>
							<User name={user.username} vote={user.vote} />
						</li>
					);
				})}
			</ul>
		</div>
	);

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
			<div className="px-4 py-5 sm:p-3">{UsersList}</div>
		</Card>
	);
};

export default Users;
