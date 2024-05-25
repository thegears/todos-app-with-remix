import { LoaderFunctionArgs, redirect, type ActionFunctionArgs, type MetaFunction } from "@remix-run/node";
import AddTodo from "~/components/AddTodo";
import Todos from "~/components/Todos";
import { user } from "~/cookies.server";
import geardb from "geardb";
import { useLoaderData } from "@remix-run/react";
const db = new geardb("/tmp/todos.json");

export const meta: MetaFunction = () => {
	return [
		{ title: "Todo App" },
		{ name: "description", content: "Welcome to Todo App" },
		{ name: "author", content: "thegears" }
	];
};

export const action = async ({ request }: ActionFunctionArgs) => {
	const cookieHeader = request.headers.get("Cookie");
	const cookie =
		(await user.parse(cookieHeader)) || {};
	if (request.method == "POST") {
		const formData = await request.formData();
		const content = formData.get("content");
		if (!cookie.id) {
			cookie.id = crypto.randomUUID();
			db.push(cookie.id, { content, id: crypto.randomUUID(), done: false });
			return redirect("/", {
				headers: {
					"Set-Cookie": await user.serialize(cookie)
				}
			})
		}
		db.push(cookie.id, { content, id: crypto.randomUUID(), done: false });
		return "ok";
	} else if (request.method == "DELETE") {
		const formData = await request.formData();
		const id = formData.get("id");
		var todos = await db.get(cookie.id);
		todos = todos.filter((todo: any) => todo.id != id);
		await db.set(cookie.id, todos);
		return null;
	} else if (request.method == "PATCH") {
		const formData = await request.formData();
		const id = formData.get("id");
		var todos = await db.get(cookie.id);
		todos.find((todo: any) => todo.id == id).done = !todos.find((todo: any) => todo.id == id).done
		await db.set(cookie.id, todos);
		return null
	};
};

export const loader = async ({ request }: LoaderFunctionArgs) => {
	const cookieHeader = request.headers.get("Cookie");
	const cookie =
		(await user.parse(cookieHeader)) || {};
	if (!cookie.id) {
		cookie.id = crypto.randomUUID();

		return redirect("/", {
			headers: {
				"Set-Cookie": await user.serialize(cookie)
			}
		})
	}
	return await db.get(cookie.id) || [];
}

export default function Index() {
	const todos = useLoaderData();
	return (
		<div className="w-full">
			<AddTodo />
			<div className="divider divider-neutral"></div>
			<Todos todos={todos} />
		</div>
	);
}
