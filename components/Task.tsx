import Image from "next/image";

type Item = {
    id: string,
    title: string,
    likes: number,
    comments: number,
    people: number;
    date: string,
    features: number
}

const Task = ({id, title, likes, comments, people, date, features}: Item) => {
    return(
        <div className="flex flex-col justify-start mt-4 bg-gray-700 py-6 px-4 rounded w-full">
            <div>
                <img src="./images/framedots.png" alt="status" />
            </div>
            <p className="text-white mt-5 font-sans font-medium w-5/6">{title}</p>
            <div className="mt-4 flex flex-row justify-between items-center w-full">
                <div className="flex flex-row items-center">
                    <img src="./images/heart-outline.png" alt="likes"/>
                    <p className="text-slate-300 ml-3">{likes}</p>
                </div>
                <div className="flex flex-row items-center">
                    <img src="./images/fluent_comment-24-regular.png" alt="likes"/>
                    <p className="text-slate-300 ml-3">{comments}</p>
                </div>
                <div className="flex flex-row items-center">
                    <p className="text-indigo-500 mr-3 font-bold">+{people}</p>
                    <div className="relative w-20 h-auto flex flex-row items-center">
                        <img src="./images/Ellipse 1.png" className="absolute w-10 h-10 right-5 z-20"/>
                        <img src="./images/Ellipse 2.png" className="absolute w-10 h-10 right-1 z-10"/>
                        <img src="./images/Ellipse 3.png" className="absolute w-10 h-10 right-10 z-30"/>
                    </div>
                </div>
            </div>
            <div className="flex flex-row justify-start items-center mt-5">
                    <div className="flex flex-row justify-between items-center w-4/9 bg-gray-800 p-3 rounded mr-3">
                        <img src="./images/akar-icons_calendar.png" alt="calender"/>
                        <p className="ml-3 text-slate-300">{date}</p>
                    </div>
                    {features !== 0 && <div className="flex flex-row justify-between items-center w-4/9 bg-gray-800 p-3 rounded">
                        <img src="./images/ri_hashtag.png" alt="hash"/>
                        <p className="ml-3 text-slate-300">{features} features</p>
                    </div>}
            </div>

        </div>
    )
}

export default Task;