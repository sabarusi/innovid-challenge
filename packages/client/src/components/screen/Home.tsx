import React from 'react'
import ItemServer from '../ItemServer/ItemServer'
const NUM_OF_SERVER = 4

export const Home : React.FC = () => {
    return (<div className="serverList" style={{display:"flex", 
                                                flexFlow:"row wrap", 
                                                gap:"1.5rem",
                                                paddingLeft:"0.5rem", 
                                                paddingRight:"0.5rem"}}>
                {[...Array(NUM_OF_SERVER).keys()].map(e => <ItemServer key={e} id={e+1}/>)}
            </div>
    )
}
