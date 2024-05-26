import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import ShouldRender from "../util/ShouldRender";
import ActivityItem from "./ActivityItem";

function ActivityDetail() {

    const [task, setTask] = useState([]);
    const [hasError, setError] = useState(false);

    const params = useParams();
    const navigate = useNavigate();

    const refresh = (id) => {
        fetchData();
    }

    const fetchData = () => {
        const id = params.id;
        const url = `https://cgc-todos-backend.onrender.com/todos/${id}`
        axios.get(url)
            .then(res => setTask(res.data), setError(false))
            .catch(() => setError(true))

        setTimeout(()=>{
            navigate('/activities/')
        },2000);
    }

    useEffect(() => {
        fetchData();
    }, [])

    return (
        <div className="mt-20 p-4 md:px-14 w-h-screen flex items-center justify-center">
            {/* {hasError && <Error />} */}

            <ShouldRender when={task}>
                <ActivityItem tsk={task} onItemDelete={refresh} />
            </ShouldRender>
        </div>
    );
}

export default ActivityDetail;