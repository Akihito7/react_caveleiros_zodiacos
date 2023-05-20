import { BrowserRouter } from "react-router-dom";
import { KnigthsRoutes } from '../routes/KnigthsRoutes';

export function Routes(){

    return(
        <BrowserRouter>

           <KnigthsRoutes/>
           
        </BrowserRouter>
    )

}