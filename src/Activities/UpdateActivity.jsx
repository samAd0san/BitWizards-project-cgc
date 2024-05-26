import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import ShouldRender from "../util/ShouldRender";
import Error from "../util/Error";
import axios from "axios";

function UpdateActivity() {

    const { id } = useParams();
    const [task, setTask] = useState({
        status: "",
        title: "",
        description: ""
    });
    const [hasError, setError] = useState(false);
    const [success, setSuccess] = useState(false);

    const navigate = useNavigate();

    // First we are fetching the data from id so that the user can edit from it.
    useEffect(() => {
        const fetchTask = async () => {
            try {
                const url = `https://cgc-todos-backend.onrender.com/todos/${id}`;
                const res = await axios.get(url);
                const taskData = res.data;
                setTask({
                    status: taskData.status,
                    title: taskData.title,
                    description: taskData.description
                });
            } catch {
                setError(true);
            }
        };
        fetchTask();
    }, [id]);

    // The fetched data is saved in the state (initially the state was empty now it contains the existing data of specific id)
    const onInputChange = (evt) => {
        const newState = { ...task, [evt.target.name]: evt.target.value };
        setTask(newState);
    }

    // When the button is triggered is saves the new updated data and navigates to the particular id
    const onSubmitBtn = async (evt) => {
        evt.preventDefault();
        try {
            const url = `https://cgc-todos-backend.onrender.com/todos/${id}`;
            await axios.patch(url, task); // data gets updated 
            setSuccess(true);
            setTimeout(() => {
                navigate(`/activities/${id}`);
            }, 1000);
        } catch (err) {
            console.error(err)
            setError(true);

            setTimeout(()=>{
                setError(false);
            },3000);
        }
    }

    return (
        <div className="mt-20 ml-20 p-4">
            {/* Success Rate */}
            <ShouldRender when={success}>
                <div className="py-2 mx-auto my-4 w-1/2 bg-green-500 text-white rounded text-center font-semibold">
                    Successfully updated task
                </div>
            </ShouldRender>

            {/* On Error */}
            <ShouldRender when={hasError}>
                <Error msg="Failed to update task, Please try again" />
            </ShouldRender>

            {/* Heading */}
            <h1 className="flex text-4xl mt-3 p-1 font-bold text-primary">Update Task</h1>

            <div className="mt-4 mb-4">
                {/* 1. Status */}
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
            </div>

            {/* 3. Description */}
            <div className="mb-4">
                <label className="block py-1 font-medium text-2xl text-secondary">Description</label>
                <input
                    name="description"
                    value={task.description}
                    onChange={onInputChange}
                    className="border border-primary p-1 w-1/2 rounded"
                    placeholder="description"
                    type="text"
                />
            </div>

            <div className="mb-4">
                <button
                    type="submit"
                    onClick={onSubmitBtn}
                    className="bg-secondary font-semibold text-xl text-white hover:bg-cyan-300 rounded-lg py-2 px-4 transition-all duration-300"
                >
                    Update
                </button>
            </div>
        </div>
    );
}

export default UpdateActivity;