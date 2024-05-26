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
        axios.get(url)
        try {
            const res = await axios.get(url);
            setTasks(res.data.data);
            setMetadata(res.data.metadata);
        } catch {
            setError(true);
        }finally{
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
    }, [status,page]);

    return (
        <div className="mt-20 p-4 md:px-14">
            <ShouldRender when={loading}>
                <Loader />
            </ShouldRender>
            {/* If the todos fail to load */}
            <ShouldRender when={hasError}>
                <Error />
            </ShouldRender>

            <div className="mx-16 flex flex-col">
                {/* Heading 'TODOS' */}
                <div className="md:text-5xl mb-3 text-4xl font-semibold ml-16 text-primary">
                    Activities
                </div>

                <div className="flex md:flex-row items-center justify-between px-12">
                    <div className="ml-4 space-x-10">
                        {/* Add Product Button */}
                        <Link to='/activities/new'><button className='btnSecondary font-medium'>Add Task</button></Link>    

                            {/* Search Task by Status */}
                            {/* <input onChange={onTextChange} type="status" name="status" id="status" placeholder="Search by Status"
                                className="bg-[#9a7af159] px-2 py-2 md:py-3 md:px-4 rounded-md focus:outline-none placeholder-white" /> */}

                            <select onClick={onTextChange} className="py-2 text-center font-medium text-xl rounded-lg bg-secondary hover:bg-cyan-300 transition-all duration-300 text-white">
                                <option value="">Status</option>
                                <option value="pending">pending</option>
                                <option value="in-progress">in-progress</option>
                                <option value="completed">completed</option>
                            </select>

                            {/* Search Button */}
                            {/* <input onClick={onSearch} type="submit" value='Search' className=" px-2 py-2 md:px-4 md:py-3 bg-secondary rounded-md ml-1 cursor-pointer
                          hover:bg-cyan-300 border text-white duration-300 transition-all" /> */}
                    </div>
                    {/* Pagination */}
                    <div className="space-x-3 ">
                        {/* Left button */}
                        <button onClick={onPrev} style={{ background: page === 1 ? 'gray' : '' }} className="btnPrimary rounded-xl px-2 py-2 md:py-4 md:px-4"><FaAngleLeft /></button>

                        {/* Displaying the metadata */}
                        <span className="text-lg font-semibold text-primary">{page} of {metadata.pages} (Total: {metadata.rows})</span>

                        {/* Right button */}
                        <button onClick={onNext} style={{ background: page === metadata.pages ? 'gray' : '' }} className="btnPrimary rounded-xl px-2 py-2 md:py-4 md:px-4"><FaAngleRight /></button>
                    </div>
                </div>

                {/* Display the Content */}
                <div className="p-4">
                    <div className="flex flex-col">
                        {
                            tasks.map(task => <ActivityItem tsk={task} onItemDelete={refresh}/>)
                        }
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Activities;