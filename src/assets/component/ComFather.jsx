import React from 'react'
import ComChildren from './ComChildren'
export default function father({count,sayHaaa}) {
  
  return (
    <>
    <div>father {count+10}</div>
    {/* <button onClick={()=>{
      sayHi("Quân")
    }}>Call me</button> */}
     <button onClick={function aaa() {
      sayHaaa("quannnnnn")
     }}>Call me</button>
    <ComChildren test={{name:'quan',age:2}}  name={"quan2"}/>
    </>
  )
}
