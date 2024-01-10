"use client"

import { addPost } from "@/lib/action";
import { useFormState } from "react-dom";

const AdminPostForm = ({ userId }) => {
	const [state, formAction] = useFormState(addPost, undefined);

	return (
		<form action={formAction} className="flex flex-col gap-5">
			<h1>Add New Post</h1>
			<input
				type="hidden"
				name="userId"
				value={userId}
				className="p-5 bg-shade rounded-md"
			/>
			<input
				required
				type="text"
				name="title"
				placeholder="Title"
				className="p-5 bg-shade rounded-md"
			/>
			<input
				required
				type="text"
				name="slug"
				placeholder="slug"
				className="p-5 bg-shade rounded-md"
			/>
			<input
				type="text"
				name="img"
				placeholder="img"
				className="p-5 bg-shade rounded-md"
			/>
			<textarea
				required
				type="text"
				name="desc"
				placeholder="desc"
				rows={10}
				className="p-5 bg-shade rounded-md"
			/>
			<button className="bg-secondary p-5 rounded-md">Add</button>
			{state?.error}
		</form>
	);
};

export default AdminPostForm;
