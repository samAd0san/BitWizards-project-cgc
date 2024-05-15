import { Link } from "react-router-dom"
import { FaRegEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";

function ActivityItem({ tsk }) {
    return (
        <div className="p-7 border-2 border-gray-300 rounded-lg mb-3 flex items-center justify-between space-x-20">
            {/* Left Side */}
            <Link to={'/activities/' + tsk._id} >
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
            <div className="space-x-3 items-center mt-3">
                {/* Edit Button */}
                <Link to={{ pathname: `/activities/update/${tsk._id}`, state: { tskData: tsk } }}><button className="btnPrimary rounded-xl px-2 py-2 md:py-4 md:px-4"><FaRegEdit /></button></Link>
                {/* Delete Button */}
                <button className="bg-red-500 hover:bg-red-600 transition-all duration-300 text-white rounded-xl px-2 py-2 md:py-4 md:px-4"><MdDelete /></button>
            </div>
        </div>

    );
};
export default ActivityItem;