import { index } from 'mathjs';
import { useDispatch } from 'react-redux';

export default function AnswerPage() {
    const dispatch = useDispatch();
    const options =["Facebook","Goolge","Microsoft","Amazon"];
    function handleSelect(options) {
        dispatch({
            type: "MARK_ANSWER",
            payload:{
                qustionNo:1,
                answer: options
            }
        });
        
    }
  return (
    <>
      <h3>Qustion 1: React Creator ? </h3>
      {options.map((opt,index) =>(
        <button key={index}
        onClick={()=>handleSelect(opt)}
        style={{display:"block",margin:"6px 0",padding:"6px 12px"}}>
            {opt}
        </button>
      ))}
    </>
  );
}
