const Window = (props) => {

    const onClickHandler = () => {
        console.log("you went out!");
        props.set(false)
    }

    const submitHandler = (event) => {
        event.preventDefault();
    console.log('You clicked submit.');
        const task = event.target.elements.Task.value;
        const date = event.target.elements.Date.value;
        const people = event.target.elements.People.value;
        const todo = event.target.elements.Todo.checked;
        const done = event.target.elements.Done.checked;
        const pending = event.target.elements.Pending.checked;
        const id = Math.floor((Math.random() * 10000) + 1).toString;

        const newData = {
            id: id,
            title: task,
            people: people,
            likes: 0,
            comments: 0,
            features: 0,
            date: date
        }

        if(todo)
        {
            props.setTodo(prevState => {
                prevState.push(newData);
                return prevState;
            })
        } else if(pending)
        {
            props.setPending(prevState => {
                prevState.push(newData);
                return prevState;
            })
        } else if(done)
        {
            props.setDone(prevState => {
                prevState.push(newData);
                return prevState;
            })
        }
        props.set(false)

    }

    return(
        <div className="absolute h-screen w-screen bg-gray-900/80 z-50 flex flex-col justify-center items-center">
            <form className="w-96 h-auto text-center bg-slate-700 p-8 rounded flex flex-col justify-evenly items-start z-60" onSubmit={submitHandler}>
                <label className="flex flex-col text-left text-white w-full">Enter Task:
                <input type="text" name="Task" className="mb-4 mt-2 rounded text-black pl-2" required></input>
                </label>
                <label className="flex flex-col text-left text-white w-full">Enter Date:
                <input type="text" name="Date" className="mb-4 mt-2 rounded text-black pl-2" required></input>
                </label>
                <label className="flex flex-col text-left text-white w-full">Enter People Involved:
                <input type="number" name="People" className="mb-4 mt-2 rounded text-black pl-2" required></input>
                </label>
                <label className="flex flex-col text-left text-white w-full">
                <div>
                    <input type="radio" id="Todo" name="type" value="To Do"
                           defaultChecked className="mr-2"/>
                    <label >To Do</label>
                        </div>

                        <div>
                          <input type="radio" id="Pending" name="type" value="Pending" className="mr-2"/>
                          <label >Pending</label>
                        </div>

                        <div>
                          <input type="radio" id="Done" name="type" value="Done" className="mr-2"/>
                          <label >Done</label>
                        </div>
                </label>
                <button type="submit" className="rounded w-full bg-slate-800 text-white p-2 mt-4 font-bold">Submit</button>
                <button type="button" className="rounded w-full bg-slate-800 text-white p-2 mt-4 font-bold" onClick={onClickHandler}>Exit</button>
            </form>
        </div>
        
    )
}

export default Window;