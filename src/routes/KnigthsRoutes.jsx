import { Routes, Route} from 'react-router-dom';
import { PageInitial } from '../pages/PageInitial'
import { AboutKnights } from '../pages/AboutKnights'

export function KnigthsRoutes(){

     return(
        <Routes>
            <Route path='/' element={ <PageInitial/> }></Route>
            <Route path='/cavaleiros/:name' element={ <AboutKnights/> }></Route>
        </Routes>
     )
}