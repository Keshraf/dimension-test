type Props = {
    title: string,
    total: number,
    setWindow: any
}

const Bar = ({title, total, setWindow}: Props) => {

    const onClickHandler = () => {
        setWindow(true);
    }

    return(
        <div className="w-full h-8 bg-gray-700 flex flex-row justify-between px-2 items-center rounded">
            <div className="flex flex-row">
                <p className="text-white">{title}</p>
                <p className="text-slate-300 ml-3">{total}</p>
            </div>
            <div className="flex flex-row items-center">
                <img src="./images/akar-icons_plus.png" alt="add" className="w-4 h-4 cursor-pointer" onClick={onClickHandler}></img>
                <img src="./images/bi_three-dots.png"alt="options" className="w-4 h-4 ml-3"></img>
            </div>
        </div>
    )
}

export default Bar;