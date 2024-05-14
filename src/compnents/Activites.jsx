import { useEffect, useState } from "react";
import axios from "axios";

function Activities() {

    const [tasks, setTasks] = useState([]);

    const fetchData = () => {
        const url = `http://localhost:3000/todos/page/1/size/20`
        axios.get(url)
            .then(res => {
                setTasks(res.data.data)
            })
            .catch(err => console.log(err))
    };

    useEffect(() => {
        fetchData();
    }, [tasks]);

    return (
        <div className="mt-20 p-4 md:px-14">
            <div className="mx-16 flex flex-col">
                {/* Heading 'TODOS' */}
                <div className="md:text-5xl mb-3 text-4xl font-semibold text-center text-primary">
                    Todos
                </div>
                
                {/* Display the Content */}
                <div className="p-4">
                    <div className="flex flex-col">
                        {
                            tasks.map(tsk => <div className="p-7 border-2 border-primary rounded-lg mb-3">
                                <div>
                                    <h3 className="text-3xl font-bold text-secondary"> <span className="text-primary">Title:</span> {tsk.title}</h3>
                                </div>
                                <div>
                                    <p className="text-xl font-medium text-tartiary"><span className="text-black">Description:</span> {tsk.description}</p>
                                </div>
                            </div>)
                        }
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Activities;