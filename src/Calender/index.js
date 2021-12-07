import React,{useState,useEffect} from 'react'
import moment from "moment"
import "./calender.css"



export const Calender = () => {
    const[calender,setCalender]=useState([])
    c
const value=moment();
const startDay=value.clone().startOf("month").startOf("week")
const endDay=value.clone().endOf("month").endOf("week")
const day=startDay.clone().subtract(1,"day")
const calender=[];
while(day.isBefore(endDay,"day")){
  calender.push(
      Array(7).fill(0).map(()=>day.add(1,"day").clone())
  )
}

    return (
        <div>
         calender is ready to use 

         {calender.map((week)=>(<div className="week">

            {week.map((day)=>(<div className="day">{day.format("D")}</div>))

            }

         </div>))}
        
        </div>
    )
}

