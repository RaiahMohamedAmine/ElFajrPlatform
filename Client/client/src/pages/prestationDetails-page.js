import React, { useState, useEffect } from 'react'
import './archive-page.css'
import './prestationDetail-page.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import BoostrapTable from 'react-bootstrap-table-next'
import GetStatisticsDetails from '../middleware/prestation/GetStatisticsDetails';
import GetAllYears from '../middleware/prestation/GetAllYears';
import Header from '../Components/Presentationals/WithRouter/header'
import { withRouter } from 'react-router';
import { toastr } from 'react-redux-toastr';
import { LineChart, XAxis, YAxis, CartesianGrid, Line, Tooltip, Legend } from 'recharts'

const ArchivePage = (
    {
        location
    }

) => {
    const [Stats, setStats] = useState();
    const [loading, setloading] = useState(true);
    const [years, setYears] = useState([]);
    const [currenState, setCurrentState] = useState({
        year: location.currentYear ? location.currentYear : new Date().getFullYear(),
        currentPres: location.currentPres ? location.currentPres : 'medical',
    })
    useEffect(() => {
        GetAllYears().then(res => {
            setYears(res.years);
            if (res.years && res.years.length > 0) {
                GetStatisticsDetails(currenState.year).then(res => {
                    if (res.type === 'Err')
                        toastr.error('Erreur !', 'Une erreur s\'est produite. Veuillez Réessayez !')
                    else {
                        setStats(res.Stats)
                        setloading(false);
                    }
                }).catch(err => toastr.error('Erreur Fatale', 'Assurez vous que le serveur est en marche'));
            }
        }).catch(err => toastr.error('Erreur Fatale', 'Assurez vous que le serveur est en marche'));
    }, [])
    const setYear = yr => setCurrentState({
        ...currenState,
        year: yr
    })
    const setCurrentPres = pres => setCurrentState({
        ...currenState,
        currentPres: pres
    })
    var { year, currentPres } = currenState
    return <div className='prestation-detail-page'>
        <Header></Header>
        <div className='container-fluid prestation-detail-content'>
            {
                loading ?
                    <div />
                    :
                    <div className=''>
                        <h1> Bilan Financier {year}</h1>
                        <div className='prestation-radio-btns'>
                            <div>
                                <input checked={currentPres === 'medical'} type='radio' name='prestation-graphe' value='medical' onChange={e => setCurrentPres('medical')}></input>
                                <label>Médicale</label>
                            </div>
                            <div>
                                <input checked={currentPres === 'sociale'} type='radio' name='prestation-graphe' value='sociale' onChange={e => setCurrentPres('sociale')}></input>
                                <label>Sociale</label>
                            </div>
                            <div>
                                <input checked={currentPres === 'bureau'} type='radio' name='prestation-graphe' value='bureau' onChange={e => setCurrentPres('bureau')}></input>
                                <label>Bureau</label>
                            </div>
                        </div>
                        <select className='select-years' defaultValue={year} onChange={e => {
                            setYear(e.target.value);
                            GetStatisticsDetails(e.target.value).then(res => {
                                if (res.type === 'Err')
                                    toastr.error('Erreur !', 'Une erreur s\'est produite. Veuillez Réessayez !')
                                else
                                    setStats(res.Stats)
                            }).catch(err => toastr.error('Erreur Fatale', 'Assurez vous que le serveur est en marche'));
                        }
                        }>
                            {
                                years.map(yr => <option key={yr}>{yr}</option>)
                            }
                        </select>
                        <BoostrapTable
                            id='table'
                            bootstrap4
                            keyField='mois'
                            columns={currentPres === 'medical' ? Stats.medicalStats.columns : currentPres === 'sociale' ? Stats.socialeStats.columns : Stats.bureauStats.columns}
                            data={currentPres === 'medical' ? Stats.medicalStats.data : currentPres === 'sociale' ? Stats.socialeStats.data : Stats.bureauStats.data}
                        />
                        <div className='w-100 m-5'></div>
                        <LineChart width={window.innerWidth - 250} height={400} data={getChartsData(Stats)} margin={50} >
                            <XAxis dataKey="name" />
                            <YAxis />
                            <CartesianGrid stroke="#eee" strokeDasharray="10 10" />
                            <XAxis dataKey="name" />
                            <YAxis dataKey='Dépenses' />
                            <Tooltip />
                            <Legend />
                            <Line type="monotone" dataKey="Dépenses Médicales" stroke="#ff0000" activeDot={{ r: 6 }} />
                            <Line type="monotone" dataKey="Dépenses Sociales" stroke="#0000ff" activeDot={{ r: 6 }} />
                            <Line type="monotone" dataKey="Dépenses Bureau" stroke="#008000" activeDot={{ r: 6 }} />
                        </LineChart>
                        <h1> Graphe des dépenses de l'année {year}</h1>
                    </div>
            }
        </div>

    </div>
}

const getChartsData = (Stats) => {
    if (Stats) {
        var data = [];
        var i = 0;
        Stats.medicalStats.data.forEach(stat => {
            data.push({
                name: stat['mois'],
                "Dépenses Médicales": stat['GENERAL'],
                "Dépenses Sociales": Stats.socialeStats.data[i]['GENERAL'],
                "Dépenses Bureau": Stats.bureauStats.data[i]['GENERAL'],
            });
            i++;
        })
        return data;
    }
    return [];
}
export default withRouter(ArchivePage)