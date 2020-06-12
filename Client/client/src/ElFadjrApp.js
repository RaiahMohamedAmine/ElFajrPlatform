import React, { useEffect } from 'react'
import { Route, Switch, BrowserRouter } from 'react-router-dom';
import MainPage from './pages/home';
import addPage from './pages/add-page';
import maladePage from './pages/malade-page';
import modifyPage from './pages/modify-page';
import rdvPage from './pages/rdv-page';
import { getInputDate } from './Components/Presentationals/rdvs-list';
import PrestationPage from './pages/prestation-page';
import ArchivePage from './pages/archive-page';
import ApercuArchive from './pages/apercu-archive';
import PrestationArchive from './pages/prestation-archive';
import StatsPage from './pages/stats-page';
import ChangerMDP from './pages/changer-mdp';
import PageIntrouvable from './pages/page-introuvable';
import AboutUs from './pages/about-us';
import prestationBureau from './pages/prestation-bureau';

const ElFadjrApp = ({
    getRdv = f => f,
}) => {
    useEffect(() => {
        var date = getInputDate(new Date())
        getRdv(date)
    }, [getRdv])
    return <BrowserRouter>
        <Switch>
            <Route path='/archives' component={() => {
                return <Route>
                    <Route exact path='/archives/:id' component={ApercuArchive}></Route>
                    <Route path='/archives/:id/Prestations' component={PrestationArchive}></Route>
                    <Route path='/archives' component={ArchivePage}></Route>
                </Route>
            }}></Route>
            <Route path='/statistiques' component={StatsPage}></Route>
            <Route path='/about-us' component={AboutUs}></Route>
            <Route path='/Ajouter-Malade' component={addPage} />
            <Route exact path='/malades/:id' component={maladePage} />
            <Route path='/malades/:id/Modifier' component={modifyPage}></Route>
            <Route path='/malades/:id/Rendez-Vous' component={rdvPage}></Route>
            <Route path='/malades/:id/Prestations' component={PrestationPage}></Route>
            <Route path='/prestation/bureau' component={prestationBureau}></Route>
            <Route path='/changerMotDePasse' component={ChangerMDP}></Route>
            <Route exact path='/' component={MainPage} />
            <Route component={PageIntrouvable}></Route>
        </Switch>
    </BrowserRouter>
}

export default ElFadjrApp
