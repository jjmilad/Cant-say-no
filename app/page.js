'use client'
import { useEffect, useState } from "react";
import Image from "next/image";


const ShokhakButton = (props)=>{
  const [right, setRight] = useState()
  const [top, setTop] = useState()

  useEffect(()=>{
    setRight(props.pos.right)
    setTop(props.pos.top)
  },[props.pos])

  return(
    <div class='' onMouseEnter={props.onClick} onMouseOver={props.onClick} >
    <button
            onClick={props.onClick}
            style={{
              position: props.pos.right ? 'absolute' : 'relative',
              right: Math.round(right)+'%',
              top: Math.round(top)+'%'
            }}
            className={`rounded-full flex items-center justify-center bg-white text-black border border h-12 w-32  transition-all `}
          >
          {props.text}
          </button>
    </div>
  )
}


export default function Home() {
  const [pos, setPos] = useState(false)
  const [clicked, setClicked] = useState()
  const [timer, setTimer] = useState(false)

  const ChangeClickStatus = ()=>{
    setClicked(true)
  }

  const ChangeToPos = ()=>{
    const rightRange = Math.random() * (50 - 3) + 3
    const topRange = Math.random() * (85 - 5) + 5
    return { 'right': rightRange, 'top' : topRange}
  }

  const ChangePos = () =>{
    setPos(ChangeToPos())
  }

  useEffect(()=>{
    setTimeout(() => {
      ChangePos()
      setTimer(!timer)
    }, 400);

  },[timer])


  return (
    <div className="h-screen w-screen flex items-center justify-center ">
      <div className="flex flex-col gap-8 items-center h-[300px]">

        <p class='text-center w-full text-[16px]'>Do You Want A Peice Of Me ???</p>
        <Image height={500} width={500} class='h-[200px] w-[300px]' src={'/200-245130080.gif'}/>

        <div className="gap-4 items-center flex flex-col sm:flex-row ">
          <button
            onClick={ChangeClickStatus}
            className="rounded-full flex items-center justify-center bg-white text-black gap-2  h-12  w-32 hover:bg-blue-500 hover:text-white border transition-all "
          >
            Yes
          </button>
          <ShokhakButton pos={pos} text={"No"} onClick={ChangePos}/>
          {
            pos ?
            <div class='h-12 w-32'/>
            :
            ''
          }
        </div>
          {
            clicked ?
            <div className="px-4 text-[17px] font-medium text-center absolute bottom-0 w-full pb-5">
            <p>Hello you have achived what you wanted !!!</p>
          </div>
          :
          ''
          }
      </div>
    </div>
  );
}
