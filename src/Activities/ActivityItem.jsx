import { Link } from "react-router-dom"
import { FaRegEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import axios from "axios";
import { useState } from "react";
import ShouldRender from "../util/ShouldRender";
import Error from "../util/Error";
import Success from "../util/Success";

function ActivityItem({ tsk, onItemDelete }) {

    const [hasError, setError] = useState(false);
    const [success, setSuccess] = useState(false);

    const onDelete = async () => {
        try {
            const url = `https://cgc-todos-backend.onrender.com/todos/${tsk._id}`;
            await axios.delete(url);

            setSuccess(true);
            onItemDelete(tsk._id);

            setTimeout(() => {
                setSuccess(false)
            }, 1500);
        } catch (err) {
            console.error(err);
            setError(true);

            setTimeout(() => {
                setError(false)
            }, 3000);
        }
    }

    return (
        <div className="p-7 border-2 border-gray-300 rounded-lg mb-3 flex items-center justify-between space-x-20">
            {/* Left Side */}
            <Link to={'/activities/' + tsk._id} >

                {/* If the item does not deletes */}
                <ShouldRender when={hasError}>
                    <Error msg='Failed to perform the operation' />
                </ShouldRender>

                <ShouldRender when={success}>
                    <Success msg='Successfully Deleted' />
                </ShouldRender>

                <div className="items-center">
                    {/* Title */}
                    <div>
                        <h3 className="text-2xl md:text-3xl font-bold text-secondary mb-7"> <span className="text-primary">Title:</span> {tsk.title}</h3>
                    </div>
                    {/* Description */}
                    <div>
                        <p className="text-lg md:text-xl font-medium text-tartiary mb-1"><span className="text-black">Description:</span> {tsk.description}</p>
                    </div>
                    {/* Status with ternary operator */}
                    <div>
                        <span className="md:font-small text-tartiary">Status: </span>
                        <span className={`${tsk.status === 'completed' ? 'text-green-500' : tsk.status === 'in-progress' ? 'text-yellow-500' : 'text-red-500'}`}>{tsk.status}</span>
                    </div>
                </div>
            </Link>
            {/* Right Side */}
            <div className="mt-3 md:flex md:space-x-3 md:items-center space-y-2 md:space-y-0">
                {/* Edit Button */}
                <Link to={{ pathname: `/activities/update/${tsk._id}`, state: { tskData: tsk } }}>
                    <button className="btnPrimary rounded-xl px-2 py-2 md:py-4 md:px-4"><FaRegEdit /></button>
                </Link>
                {/* Delete Button */}
                <button onClick={onDelete} className="bg-red-500 hover:bg-red-600 transition-all duration-300 text-white rounded-xl px-2 py-2 md:py-4 md:px-4"><MdDelete /></button>
            </div>
        </div>

    );
};
export default ActivityItem;