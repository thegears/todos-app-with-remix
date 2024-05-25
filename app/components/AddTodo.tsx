import { Form } from "@remix-run/react";


export default function AddTodo() {


	return (
		<Form method="post">
			<div className="p-4 flex w-full justify-center">
				<label className="input input-bordered flex items-center gap-2">
					<svg fill="#ffffff" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 297 297" className="w-4 h-4 opacity-70" stroke=" #ffffff"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g> <path d="M237.333,33h-50.14c-2.558-18.613-18.556-33-37.86-33s-35.303,14.387-37.86,33h-51.14C50.408,33,42,41.075,42,51v228 c0,9.925,8.408,18,18.333,18h177c9.925,0,17.667-8.075,17.667-18V51C255,41.075,247.258,33,237.333,33z M93.052,48 c3.432,18.033,19.084,31,38.092,31h36.379c19.008,0,34.66-12.967,38.092-31H223v216H75V48H93.052z M149.333,16 c10.456,0,19.242,7.259,21.601,17h-43.201C130.091,23.259,138.877,16,149.333,16z"></path> <rect x="99" y="109" width="50" height="15"></rect> <polygon points="200.689,105.076 189.645,94.924 175.427,110.39 169.237,105.347 159.763,116.976 176.907,130.944 "></polygon> <rect x="99" y="157" width="50" height="15"></rect> <polygon points="200.689,153.076 189.645,142.924 175.427,158.39 169.237,153.347 159.763,164.976 176.907,178.944 "></polygon> <rect x="99" y="205" width="50" height="15"></rect> <polygon points="200.689,201.076 189.645,190.924 175.427,206.39 169.237,201.347 159.763,212.976 176.907,226.944 "></polygon> </g> </g></svg>
					<input type="text" className="grow" name="content" placeholder="Todo" />
				</label>
				<button type="submit" className="btn btn-outline btn-neutral text-white">Add Todo</button>
			</div >
		</Form>
	);
}
