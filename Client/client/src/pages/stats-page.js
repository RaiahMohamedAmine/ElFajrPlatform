import React, { useState, useEffect } from 'react'
import './stats-page.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import Header from '../Components/Presentationals/WithRouter/header'
import {
    ResponsiveContainer, PieChart, Pie, XAxis, YAxis, Bar, BarChart,
    Tooltip
} from 'recharts';
import Card from '../Components/Presentationals/card';
import GetMStats from '../middleware/malade/GetStatistics'
import GetPStats from '../middleware/prestation/GetStatistics';
import GetAllYears from '../middleware/prestation/GetAllYears';
import GetAStats from '../middleware/archive/GetStatistics';
import MaladePie from '../Components/Presentationals/Charts/malade-pie';

const StatsPage = (
) => {
    const [pageStuff, setData] = useState({
        loading: true,
        nbApiCall: 3,
    })
    var [anneePrestation,setAnneePrestation] = useState(new Date().getFullYear());
    const [years, setYears]= useState([]) ;
    const [maladeStats, setMStats] = useState({})
    const [archiveStats, setAStats] = useState({})
    const [prestationStats, setPStats] = useState({})
    const [Graphe1Data, setG1Data] = useState({
        choice: 'sexe',
        data: []
    })
    const [typePres,settype]=useState('medical')
    useEffect(() => {
        GetMStats().then(res => {
            setData({
                ...pageStuff,
                nbApiCall: --pageStuff.nbApiCall
            });
            setMStats(res)
            setG1Data({
                ...Graphe1Data,
                data: res.sexeStats
            })
            if (pageStuff.nbApiCall === 0) {
                setData({
                    ...pageStuff,
                    loading: false
                })
            }

        })
        GetAllYears().then (res=> setYears( res.years));
        GetPStats()
            .then(res => {
                setData({
                    ...pageStuff,
                    nbApiCall: --pageStuff.nbApiCall
                })
                setPStats(res)
                if (pageStuff.nbApiCall === 0) {
                    setData({
                        ...pageStuff,
                        loading: false
                    })
                }
            }
            )
        GetAStats()
            .then(res => {
                setData({
                    ...pageStuff,
                    nbApiCall: --pageStuff.nbApiCall
                })
                setAStats(res)
                if (pageStuff.nbApiCall === 0) {
                    setData({
                        ...pageStuff,
                        loading: false
                    })
                }
            }
            )
    },[])
    const updateG1Data = (critere) => {
        switch (critere) {
            case 'sexe':
                setG1Data({
                    choice: 'sexe',
                    data: maladeStats.sexeStats
                })
                break;
            case 'type':
                setG1Data({
                    choice: 'type',
                    data: maladeStats.typeStats
                })
                break;
            case 'situation':
                setG1Data({
                    choice: 'situation',
                    data: maladeStats.situationStats
                })
                break;
            case 'assurance':
                setG1Data({
                    choice: 'assurance',
                    data: maladeStats.assureStats
                })
                break;
            case 'adherence':
                setG1Data({
                    choice: 'adherence',
                    data: maladeStats.adherentStats
                })
                break;
            default:
                break;
        }
    }
    return <div>
        <Header />
        <div className='container-fluid stats-page'>
            <div className='row first-row justify-content-center'>
                <div className='col-4 n-malade-container'>
                    <Card>
                        <div className='n-malade'>
                            <p>Nombre de Malades</p>
                            <p className='malades'>{pageStuff.loading ? '0' : maladeStats.sexeStats.reduce((x, y) => x + y.value, 0)}</p>
                        </div>
                    </Card>
                    <div className='w-100' style={{ opacity: '0' }}>d</div>
                    <Card>
                        <div className='n-malade'>
                            <p>Nombre de Mort</p>
                            <p className='morts'>{pageStuff.loading ? '0' : archiveStats.etatStats[0].value}</p>
                        </div>
                    </Card>
                    <div className='w-100' style={{ opacity: '0' }}>ds</div>
                    <Card>
                        <div className='n-malade'>
                            <p>Nombre de Guérison</p>
                            <p className='gueris'>{pageStuff.loading ? '0' : archiveStats.etatStats[1].value}</p>
                        </div>
                    </Card>
                </div>
                <div className='col-7'>
                    <Card>
                        <MaladePie id='maladePie' choice={Graphe1Data.choice} data={Graphe1Data.data} title='Graphe' onChange={e => updateG1Data(e.target.value)} />
                    </Card>
                </div>
            </div>
            <div className='row justify-content-center' style={{ marginTop: '50px' }}>
                <div className='col-11'>
                    <Card>
                        <div className='chart-card' style={{ width: '100%', height: 500 }}>
                            <p style={{color :"#413ea0"}}>Graphe d'age</p>
                            <ResponsiveContainer>
                                <BarChart
                                    data={maladeStats.ageStats} sroke="#f5f5f5"
                                >
                                    <XAxis dataKey="name" label={{value :"Age (ans)" , position: 'insideBottomRight' }} />
                                    <YAxis label={{value :"Nombre Malade" ,angle :-90, position: 'insideLeft'}} />
                                    <Tooltip />
                                    <Bar dataKey="value" barSize={40} fill="#413ea0" />
                                </BarChart>
                            </ResponsiveContainer>
                        </div>
                    </Card>
                </div>
            </div>
            <div className='row justify-content-center' style={{ marginTop: '50px ' }}>
                <div className='col-4'>
                    <Card>
                        <div className='chart-card' style={{ width: '100%', height: 400 }}>
                            <div className='chart-card-prestation' style={{ height: '100%', width: '100%' }}>
                            <h1 style={{color :"#779da1"}}>Dépenses Générale de l'année  {anneePrestation}</h1>
                                <p>{pageStuff.loading ? '0' :  prestationStats.medicalStats.filter(s=> s.name==='GENERAL')[0].montant +
                                     prestationStats.socialeStats.filter(s=> s.name==='GENERAL')[0].montant
                                }</p>
                                <div style={{ width: '100%', height: '100%' }}>
                                    <ResponsiveContainer>
                                        <PieChart>
                                            <Tooltip />
                                            <Pie dataKey="value"
                                                data={[{ name: 'Medicale', value: pageStuff.loading ? 0 : prestationStats.medicalStats.filter(s=> s.name==='GENERAL')[0].montant },
                                                { name: 'Sociale', value: pageStuff.loading ? 0 : prestationStats.socialeStats.filter(s=> s.name==='GENERAL')[0].montant }]}
                                                fill="#779da1" label>
                                                </Pie>
                                        </PieChart>
                                    </ResponsiveContainer>
                                </div>
                            </div>
                        </div>
                    </Card>
                </div>
                <div className='col-7'>
                <select onChange={e=> 
                {
                    setAnneePrestation(e.target.value);
                    GetPStats(e.target.value).then (res=>  setPStats(res) )}
                }> 
                        {
                            years.map(year=><option key={year}>{year}</option>)
                        }
                </select>
                    <Card>
                        <div className='prestation-chart-container' style={{ width: '90%', height: 400, }}>
                            <p style={{color :"#779da1"}}>Graphe des Préstations de l'année  {anneePrestation}</p>
                            <div className='prestation-chart-content' style={{ height: '100%', width: '100%' }}>
                                <div className='prestation-radio-btns'>
                                    <div>
                                        <input checked={typePres === 'medical'} type='radio' name='prestation-graphe' value='medical' onChange={e=> settype('medical')}></input>
                                        <label>Médicale</label>
                                    </div>
                                    <div>
                                        <input checked={typePres === 'sociale'} type='radio' name='prestation-graphe' value='sociale' onChange={e=> settype('sociale')}></input>
                                        <label>Sociale</label>
                                    </div>
                                </div>
                                <div style={{ height: '100%', width: '100%',}}>
                                    <ResponsiveContainer>
                                        <BarChart
                                            data={pageStuff.loading ? null :typePres==='medical' ? prestationStats.medicalStats.filter(pres=> pres.name!=='GENERAL'): prestationStats.socialeStats.filter(pres=> pres.name!=='GENERAL')}
                                            margin={{ top: 20, left: 40, right:0, bottom: 50 }}
                                            barSize={30} 
                                        >
                                            <XAxis interval={0} dataKey="name"  padding={{ left: 10, right: 10 }} angle={-15} textAnchor='end' />
                                            <YAxis />
                                            <Tooltip />
                                            <Bar dataKey="montant" fill="#779da1" />
                                        </BarChart>
                                    </ResponsiveContainer>
                                </div>
                            </div>
                        </div>
                    </Card>
                </div>
            </div>
        </div>
    </div>
}


export default StatsPage