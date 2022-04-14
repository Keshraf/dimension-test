import { INSPECT_MAX_BYTES } from "buffer";
import Bar from "./Bar";
import Task from './Task';


type Props = {
    data: Item[]
    title: string
    set: any,
    setWindow: any
}

type Item = {
    id: string,
    title: string,
    likes: number,
    comments: number,
    people: number;
    date: string,
    features: number
}

const Card = ({data, title, set, setWindow}:Props) => {

    return(
        <div className="bg-gray-800 px-6 py-8 h-auto w-96 flex flex-col justify-start items-center rounded m-4" >
            <Bar title={title} total={data.length} setWindow={setWindow}/>
            {
                data.map((item) => {
                    return <Task title={item.title} likes={item.likes} comments={item.comments} people={item.people} date={item.date} features={item.features} key={item.id} id={item.id}/>
                })
            }
        </div>   
    )
}

export default Card;