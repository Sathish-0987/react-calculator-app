import { evaluate } from 'mathjs';
import React, { useState } from 'react'

export default function Calculator() {
    const [value,setValue]=useState('');
  return (
    <div className='Container'>
        <div className='Calculator'>
            <form action=''>
            <div className='Display'>
                <input type='text' value={value}></input>
            </div>
            <div>
                <input type='button' value='AC' onClick={e=>setValue('')}/>
                <input type='button' value='DE' onClick={e=>setValue(value.slice(0,-1))}/>
                <input type='button' value=' .' onClick={e=>setValue(value+e.target.value)}/>
                <input type='button' value='/' onClick={e=>setValue(value+e.target.value)}/>
            </div>
            <div>
                <input type='button' value='7' onClick={e=>setValue(value+e.target.value)}/>
                <input type='button' value='8' onClick={e=>setValue(value+e.target.value)}/>
                <input type='button' value='9' onClick={e=>setValue(value+e.target.value)}/>
                <input type='button' value='*' onClick={e=>setValue(value+e.target.value)}/>
            </div>
            <div>
                <input type='button' value='4' onClick={e=>setValue(value+e.target.value)}/>
                <input type='button' value='5' onClick={e=>setValue(value+e.target.value)}/>
                <input type='button' value='6' onClick={e=>setValue(value+e.target.value)}/>
                <input type='button' value='-' onClick={e=>setValue(value+e.target.value)}/>
            </div>
            <div>
                <input type='button' value='1' onClick={e=>setValue(value+e.target.value)}/>
                <input type='button' value='2' onClick={e=>setValue(value+e.target.value)}/>
                <input type='button' value='3' onClick={e=>setValue(value+e.target.value)}/>
                <input type='button' value='+' onClick={e=>setValue(value+e.target.value)}/>
            </div>
            <div>
                <input type='button' value='00' onClick={e=>setValue(value+e.target.value)}/>
                <input type='button' value='0' onClick={e=>setValue(value+e.target.value)}/>
                <input type='button' value='=' onClick={e=>setValue(evaluate(value).toString())}/>
                <input type='button' value='OFF' onClick={e=>setValue("")}/>
            </div>
            </form>
        </div>
    </div>
  )
}
