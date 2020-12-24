import { useSelector } from "react-redux";

const User = props => {
	const state = useSelector(state => state.users);
	const hiddenVote = props.vote ? "Voted!" : "";
	const shownVote = props.vote || "-";

	return (
		<div className="flex space-x-3">
			<img
				className="h-8 w-8
				 rounded-full"
				src="https://i.ibb.co/FggrjYN/user-solid.png"
				alt="avatar"
			/>
			<div className="flex-1 space-y-1">
				<div className="flex items-center justify-between">
					<h3 className="text-md font-medium p-2">{props.name}</h3>
					<p className="text-sm text-gray-500">
						{state.hidden ? hiddenVote : shownVote}
					</p>
				</div>
			</div>
		</div>
	);
};

export default User;
