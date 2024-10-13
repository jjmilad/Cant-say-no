'use client'
import { useState } from "react";
import Image from "next/image";


const ShokhakButton = (props)=>{
  return(
    <div class='' onMouseEnter={props.onClick} >
    <button
            onClick={props.onClick}
            className={`rounded-full flex items-center justify-center border h-12 w-32  transition-all ${props.pos} `}
          >
          {props.text}
          </button>
    </div>
  )
}


export default function Home() {
  const [pos, setPos] = useState(1)
  const [clicked, setClicked] = useState()
  const posList = [1,2,3]

  const ChangeClickStatus = ()=>{
    setClicked(!clicked)
  }

  const excludeFromList = (list, value)=>{
    const newList = []
    for (let index = 0; index < list.length; index++) {
      const element = list[index];
      if(element !== value){
        newList.push(element)
      }
    }
    return newList
  }

  const Choose = (list)=>{
    const value = Math.floor(Math.random() * (1 - 0 + 1) ) + 0
    return list[value];
  }


  const changePos = () =>{
    console.log(pos)
    const range = Math.random() * (3 - 1) + 1
    const newRange = excludeFromList(posList, pos)
    const value = Choose(newRange)
    console.log(value)
    setPos(value)
  }

  return (
    <div className="h-screen w-screen flex items-center justify-center ">
      <div className="flex flex-col gap-8 items-center h-[300px]">

        <p class='text-center w-full text-[16px]'>Do You Want A Peice Of Me ???</p>
        <Image height={500} width={500} class='h-[200px] w-[300px]' src={'/200-245130080.gif'}/>

        <div className="gap-4 items-center flex flex-col sm:flex-row ">
          <button
            onClick={ChangeClickStatus}
            className="rounded-full flex items-center justify-center border gap-2  h-12  w-32 hover:bg-white hover:text-black transition-all "
          >
            Yes
          </button>
          {
          pos === 1 ? 
          <ShokhakButton text={"No"} onClick={changePos}/>
          : 
          <div class='h-12  w-32'>
          </div>
        }

        </div>

        {
          pos === 2 ? 
          <ShokhakButton text={"No"} onClick={changePos} pos={'absolute left-[15%] bottom-[7%] '}/>
          : 
          ''
        }
        {
          pos === 3 ? 
          <ShokhakButton text={"No"} onClick={changePos} pos={'absolute right-[10%] top-[14%]'}/>
          : 
          ''
        }

          {
            clicked ?
            <div className="px-4 text-center">
            <p>Hello you have achived what you wanted !!!</p>
          </div>
          :
          ''

          }
      </div>
    </div>
  );
}
