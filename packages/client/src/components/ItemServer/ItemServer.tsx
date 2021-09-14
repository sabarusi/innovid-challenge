import React from 'react'
import pcOff from "../../assets/pc-off.png"
import pcOn from "../../assets/pc-on.gif"
import useGetLoad from '../../hooks/useGetLoad'
import { ServerProps } from '../../types/types'

const ItemServer : React.FC <ServerProps> = ({id}) => {
   const [load, status, toggleStatus] = useGetLoad(id)

   return (
    <div className="window" style={{width: 320, margin: "auto"}}>
        <div className="title-bar">
          <div className="title-bar-text">Server #{id}</div>
        </div>
        <div className="window-body">
          <img src={status? pcOn : pcOff} width={200} height={200} alt={"PC "+ status ? "ON": "OFF"}/>
        </div>
        <div className="status-bar">
            <p className="status-bar-field">Status: {status? "ON": "OFF"}</p>
            <p role="button" 
               className="status-bar-field" 
               style={{color:"blue",
                       cursor:"pointer"}}
               onClick={toggleStatus}>
                 {status? "turn off" : "turn on"}
            </p>
            <p className="status-bar-field">CPU Usage: {load}%</p>
        </div>
      </div>
    )
}

export default ItemServer;