import { Form } from "@remix-run/react";

export default function Todos({ todos }: { todos: any }) {


	return (
		<div className="w-full lg:columns-3 sm:columns-2">
			{
				todos.map((todo: any) => (
					<div className="w-full inline-block border bg-base-100 mt-3 group" >
						<div className="hidden  group-hover:block">
							<div className="join w-full">
								<Form method="patch" className="w-full">
									<button className={`btn btn-${todo.done ? "warning" : "success"} btn-outline w-full rounded-none join-item`}>
										<input type="hidden" name="id" value={todo.id} />
										{todo.done ?
											<span>⛌ Undone</span> :
											<span>✓ Done</span>
										}
									</button>
								</Form>
								<Form method="delete" className="w-full">
									<button type="submit" className="btn btn-error btn-outline rounded-none w-full join-item">
										<input type="hidden" name="id" value={todo.id} />
										<span>🗑</span>
										<span>Delete</span>
									</button>
								</Form>
							</div>
						</div>
						<div className="p-4">
							<span className={`${todo.done ? "line-through" : ""}`} style={{ wordBreak: "break-word", }}>{todo.content}</span>
						</div>

					</div >
				))
			}

		</div >
	);
}
