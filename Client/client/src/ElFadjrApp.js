import React, { useEffect } from 'react'
import MainPage from './pages/home';
import {
    HashRouter,
    Route,
} from 'react-router-dom'
import AddPage from './pages/add-page'
import MaladePage from './pages/malade-page';
import ModifyPage from './pages/modify-page'
import RdvPage from './pages/rdv-page';



const ElFadjrApp = ({
    getRdv = f => f
}) => {
    useEffect(() => {
        var today = new Date()
        const date = today.getDate() < 10 ? "0" + today.getDate() : today.getDate()
        const month = today.getMonth() < 10 ? "0" + (today.getMonth() + 1) : (today.getMonth() + 1)
        today = today.getFullYear() + "-" + month + "-" + date
        getRdv(today)
    }, [])
    return <HashRouter>
        <Route exact path='/' component={MainPage} />
        <Route path='/Ajouter-Malade' component={AddPage} />
        <Route exact path='/malades/:id' component={MaladePage} />
        <Route path='/malades/:id/Modifier' component={ModifyPage}></Route>
        <Route path='/malades/:id/Rendez-Vous' component={RdvPage}></Route>
    </HashRouter>
}

export default ElFadjrApp