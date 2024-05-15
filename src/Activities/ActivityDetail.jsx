import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ShouldRender from "../util/ShouldRender";
import ActivityItem from "./ActivityItem";

function ActivityDetail() {

    const [task, setTask] = useState([]);
    const [hasError, setError] = useState(false);

    const params = useParams();

    useEffect(()=> {
        const id = params.id;
        const url = `http://localhost:3000/todos/${id}`
        axios.get(url) 
            .then(res => setTask(res.data),setError(false))
            .catch(() => setError(true))
    },[])

    return (
        <div className="mt-20 p-4 md:px-14 w-h-screen flex items-center justify-center">
            {/* {hasError && <Error />} */}

            <ShouldRender when={task}>
                <ActivityItem tsk={task}/>
            </ShouldRender>
        </div>
    );
}

export default ActivityDetail;