import { useEffect, useState } from "react";
import axios from "axios";
import { FaAngleRight, FaAngleLeft } from "react-icons/fa6";
import ShouldRender from "../util/ShouldRender";
import Error from "../util/Error";
import ActivityItem from "./ActivityItem";
import { Link } from "react-router-dom";
import Loader from "../util/Loader";

function Activities() {
    const [tasks, setTasks] = useState([]);
    const [hasError, setError] = useState(false);
    const [page, setPage] = useState(1);
    const [metadata, setMetadata] = useState({});
    const [status, setStatus] = useState('');
    const [loading, setLoading] = useState(true);

    const fetchData = async () => {
        const url = `https://cgc-todos-backend.onrender.com/todos/page/${page}/size/10?status=${status}`;
        try {
            const res = await axios.get(url);
            setTasks(res.data.data);
            setMetadata(res.data.metadata);
        } catch {
            setError(true);
        } finally {
            setLoading(false);
        }
    };

    const onPrev = () => {
        if (page > 1) setPage(page - 1);
    };

    const onNext = () => {
        if (page < metadata.pages) setPage(page + 1);
    };

    const onTextChange = (evt) => {
        setStatus(evt.target.value);
    }

    const onSearch = () => fetchData();

    const refresh = (id) => {
        console.log('Item deleted',id);
        fetchData();
    }

    useEffect(() => {
        fetchData();
    }, [status, page]);

    return (
        <div className="p-4 md:px-14">
            <ShouldRender when={loading}>
                <Loader />
            </ShouldRender>
            <ShouldRender when={hasError}>
                <Error />
            </ShouldRender>

            <div className="flex flex-col mt-20">
                <div className="text-4xl font-semibold ml-4 md:text-5xl mb-3 text-primary">
                    Activities
                </div>

                <div className="flex flex-col space-y-4 md:flex-row md:items-center md:justify-between md:px-12">
                    <div className="flex flex-row space-x-4 md:space-y-0 md:flex-row md:items-center md:space-x-4">
                            {/* Add Task Button */}
                        <Link to='/activities/new'>
                            <button className='btnSecondary font-medium'>Add Task</button>
                        </Link>

                            {/* Status Button */}
                        <select
                            onChange={onTextChange}
                            className="py-2 w-[128px] text-center font-medium text-xl rounded-lg bg-secondary hover:bg-cyan-300 text-white"
                        >
                            <option value="">Status</option>
                            <option value="pending">Pending</option>
                            <option value="in-progress">In Progress</option>
                            <option value="completed">Completed</option>
                        </select>
                    </div>

                    <div className="flex items-center">
                        {/* Pagination button left */}
                        <button
                            onClick={onPrev}
                            style={{ background: page === 1 ? 'gray' : '' }}
                            className="btnPrimary rounded-xl py-2 px-4 mr-2"
                        >
                            <FaAngleLeft />
                        </button>

                        {/* Metadata */}
                        <span className="text-lg font-semibold text-primary">
                            {page} of {metadata.pages} (Total: {metadata.rows})
                        </span>

                        {/* Pagination metadata right */}
                        <button
                            onClick={onNext}
                            style={{ background: page === metadata.pages ? 'gray' : '' }}
                            className="btnPrimary rounded-xl py-2 px-4 ml-2"
                        >
                            <FaAngleRight />
                        </button>
                    </div>
                </div>

                <div className="mt-4">
                    {tasks.map((task) => (
                        <ActivityItem key={task.id} tsk={task} onItemDelete={refresh} />
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Activities;
