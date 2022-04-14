import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Card from "../components/Card";
import {Todo, Pending, Done} from "../data/initialData";
import { useEffect, useState } from 'react';
import Window from "../components/Window";


const Home: NextPage = () => {

  const [todo,setTodo] = useState(Todo);
  const [pending,setPending] = useState(Pending);
  const [done,setDone] = useState(Done);
  const [newTask, setNewTask] = useState();
  const [window, setWindow] = useState(false);

  return (
    <>
    
    <div className="bg-gray-900 w-full h-screen flex flex-col justify-start items-center">
      <Head>
        <title>Roadmap</title>
        <meta name="description" content="Dimension HQ" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <nav className='mx-24 mt-10 border-b-2 border-slate-800 pb-4 flex flex-row justify-start w-5/6'>
      
      <img src="./images/ph_path.png" alt="logo" className='w-6'/>
      <h1 className="pl-2 font-sans text-slate-400 font-semibold ">Roadmap</h1>
      </nav>
      {window && <Window set={setWindow} newTask={setNewTask} setTodo = {setTodo} setPending = {setPending} setDone={setDone}/>}
      <main className='flex flex-row justify-evenly mt-24 w-5/6'>
      
        <section className='flex lg:flex-row justify-between w-5/6 flex-col'>
          <Card data={todo} title="Todo" set={setTodo} setWindow={setWindow}/>
          <Card data={pending} title="Pending" set={setPending} setWindow={setWindow} />
          <Card data={done} title="Done" set={setDone} setWindow={setWindow} />
        </section>
      </main>
        
    </div>
    </>
  )
}

export default Home
