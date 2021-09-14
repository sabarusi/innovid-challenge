import { ServerLoad } from "../types/types";

const api={
    get:async (id:number):Promise<ServerLoad> => fetch(`http://localhost:8000/status/${id}`)
                                                            .then(res => res.json())
}
export default api