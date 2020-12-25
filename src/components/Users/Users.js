import User from "./User/User";
import Button from "../Button/Button";
import Card from "../Card/Card";

import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";

import addUser from "../../store/actions/users/addUser";
import loadUser from "../../store/actions/users/loadUser";

import setHidden from "../../store/actions/users/setHidden";

const Users = props => {
	const dispatch = useDispatch();
	const state = useSelector(state => state.users);

	const userId = JSON.parse(localStorage.getItem("userId"));

	// First page visit handling
	useEffect(() => {
		const createDefaultUser = () => {
			const suffix = Math.random().toString(20).substr(2, 6);
			const payload = {
				username: `user_${suffix}`
			};
			console.log(state);
			dispatch(addUser(payload));
		};

		// Either create user, or use existing one
		if (localStorage.getItem("userId") === null) {
			createDefaultUser();
		} else {
			dispatch(loadUser({ userId }));
		}
	}, []);

	const revealVotes = () => {
		dispatch(setHidden(false));
	};

	const UsersList = (() => {
		const loadingMsg = userId
			? "Loading user..."
			: "Generating default user...";

		return (
			<div className="flow-root">
				<ul className="divide-y divide-gray-200">
					{state.users.length
						? state.users.map(user => {
								return (
									<li className="py-4" key={user.id}>
										<User
											name={user.username}
											vote={user.vote}
											own={userId === user.id}
										/>
									</li>
								);
						  })
						: loadingMsg}
				</ul>
			</div>
		);
	})();

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
