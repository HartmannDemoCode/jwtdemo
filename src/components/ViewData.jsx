import {getData} from '../../facade';
import {useState} from 'react';

export default function ViewData() {
    const [data, setData] = useState(null);

    const handleClick = async ()=>{
        const data = await getData();
        console.log("data", data);
        setData(data);
    }
  return (
    <>
    <button onClick={handleClick}>Get data</button>
    {data && <div>{data.msg}</div>}
    </>
  )
}
