import { useState } from "react";
import ShouldRender from "../util/ShouldRender";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Error from "../util/Error";

function NewActivity() {

    const [task, setTask] = useState({
        status: "",
        title: "",
        description: ""
    });
    const [hasError, setError] = useState(false);
    const [success, setSuccess] = useState(false);

    const onInputChange = (evt) => {
        const newState = { ...task, [evt.target.name]: evt.target.value };
        setTask(newState);
    };

    const navigate = useNavigate();

    const onSaveBtn = async () => {
        try {
            const url = `http://localhost:3000/todos`;
            await axios.post(url, task);
            setSuccess(true);
            setTask({
                status: "",
                title: "",
                description: "",
            });
            //   navigate("/activities"); // Redirects to task page
        } catch(error) {
            console.error(error);
            setError(true);
        }
    };

    return (<div className="mt-20 p-4 md:px-14 ml-8">
        {/* Success */}
        <ShouldRender when={success}>
            <div className="py-2 my-4 w-1/2 bg-green-500 text-white rounded text-center font-semibold">
                Successfully saved data
            </div>
        </ShouldRender>

        {/* Failure (Error) */}
        <ShouldRender when={hasError}>
            <Error />
        </ShouldRender>

        {/* Heading */}
        <h1 className="flex text-4xl mt-3 p-1 font-bold text-primary">New Task</h1>

        {/* 1. Category */}
        <div className="mt-4 mb-4">
            <label className="block py-1 font-medium text-2xl text-secondary">Status</label>
            <select
                name="status"
                value={task.status}
                onChange={onInputChange}
                className="border border-primary p-1 w-1/2 rounded"
            >
                <option value="">status</option>
                <option value="pending">pending</option>
                <option value="in-progress">in-progress</option>
                <option value="completed">completed</option>
            </select>
            <ShouldRender when={!task.status}>
                <div className="text-sm text-red-500 m-1">status is required</div>
            </ShouldRender>
        </div>

        {/* 2. Title */}
        <div className="mb-4">
            <label className="block py-1 font-medium text-2xl text-secondary">Title</label>
            <input
                name="title"
                value={task.title}
                onChange={onInputChange}
                className="border border-primary p-1 w-1/2 rounded"
                placeholder="title"
                type="text"
            />
            {/* Adding Validations */}
            <ShouldRender when={!task.title}>
                <div className="text-sm text-red-500 m-1">Title is required</div>
            </ShouldRender>
            <ShouldRender when={task.title && task.title.length < 3}>
                <div className="text-sm text-red-500 m-1">Min 3 chars</div>
            </ShouldRender>
            <ShouldRender when={task.title && task.title.length > 20}>
                <div className="text-sm text-red-500 m-1">Max 20 chars</div>
            </ShouldRender>
        </div>

        {/* 4. Description */}
        <div className="mb-4">
            <label className="block py-1 font-medium text-2xl text-secondary">Description</label>
            <input
                name="description"
                value={task.description}
                onChange={onInputChange}
                className="border border-primary p-1  w-1/2 rounded"
                placeholder="description"
                type="text"
            />
            {/* Validations */}
            <ShouldRender when={!task.description}>
                <div className="text-sm text-red-500 m-1">
                    Description is required
                </div>
            </ShouldRender>
            <ShouldRender when={task.description && task.description.length > 100}>
                <div className="text-sm text-red-500 m-1">Max 100 chars</div>
            </ShouldRender>
        </div>

        <div className="mb-4">
            <button
                // Disabling the button on not entering any of he fields (Validation)
                disabled={!task.status || !task.title || !task.description}
                onClick={onSaveBtn}
                className="bg-secondary font-semibold text-xl text-white hover:bg-cyan-300 rounded-lg py-2 px-4 transition-all duration-300"
            >
                Save
            </button>
        </div>
    </div>);
}

export default NewActivity;