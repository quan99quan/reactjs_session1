import React from 'react'
import ComFather from './ComFather'
let count =1000
export default function ComGrand() {
  function sayHi(name) {
    alert(name)
  }
  return (
    <>
    <div>gran {count}</div>

    <ComFather count={count} sayHaaa={sayHi}/>
    
    </>

  )
}

