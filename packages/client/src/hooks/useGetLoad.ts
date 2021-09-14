import { useState, useEffect, useRef } from 'react';
import api from '../api/api';

const useGetLoad = <T> (id:number) : [number, boolean, ()=>void] => {
    const [cpuLoad, setCpuLoad] = useState<number>(0)
    const [status, setStatus] = useState<boolean>(true)
    const intervalRef = useRef<ReturnType <typeof setInterval>>();
    
    const callAndRepeat = (fn:any,time:number) => {fn(); return setInterval(fn,time)}
    
    const toggleStatus = ()=> setStatus(!status)

    useEffect(() => {
    //effect
        if (status) {
            intervalRef.current = callAndRepeat(()=>{api.get(id)
                                                        .then(res=> setCpuLoad(res?.load || 0))}
                                                    ,5000)
            }
        else{
            clearInterval(intervalRef.current)
            setCpuLoad(0)
        }
        //cleanup
        return () => {clearInterval(intervalRef.current)}
    }, [status])

 return [cpuLoad, status, toggleStatus]

}

export default useGetLoad;