import React, { useState, useEffect } from 'react'
import './stats-page.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import Header from '../Components/Presentationals/WithRouter/header'
import {
    ResponsiveContainer, PieChart, Pie, XAxis, YAxis, Bar, BarChart, CartesianGrid,
    Tooltip, Legend, LineChart, Line
} from 'recharts';
import Card from '../Components/Presentationals/card';
import GetStats from '../middleware/malade/GetStatistics'
import GetStatistics from '../middleware/prestation/GetStatistics';

const StatsPage = ({

}) => {
    const [maladeStats, setMStats] = useState({})
    const [PrestationStats, setPStats] = useState({})
    const [Graphe1Data, setG1Data] = useState({
        choice: 'sexe',
        data: []
    })
    useEffect(() => {
        GetStats().then(res => {
            setMStats(res);
            setG1Data({
                ...Graphe1Data,
                data: res.sexeStats
            })
        })
        GetStatistics().then(res => {
            console.log(res)
            setPStats(res)
        }
        )
    }, [])
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
                            <p className='malades'>80080</p>
                        </div>
                    </Card>
                    <Card>
                        <div className='n-malade'>
                            <p>Nombre de Mort</p>
                            <p className='morts'>80080</p>
                        </div>
                    </Card>
                    <Card>
                        <div className='n-malade'>
                            <p>Nombre de Guérison</p>
                            <p className='gueris'>80080</p>
                        </div>
                    </Card>
                </div>
                <div className='col-7' style={{ marginTop: '15px' }}>
                    <div className='chart-container'>
                        <p>Graphe</p>
                        <div className='radio-btns'>
                            <div>
                                <input checked={Graphe1Data.choice === 'sexe'} type='radio' name='graphe1' value='sexe' onChange={e => updateG1Data(e.target.value)}></input>
                                <label>Sexe</label>
                            </div>
                            <div>
                                <input checked={Graphe1Data.choice === 'situation'} type='radio' name='graphe1' value='situation' onChange={e => updateG1Data(e.target.value)}></input>
                                <label>Situation</label>
                            </div>
                            <div>
                                <input checked={Graphe1Data.choice === 'assurance'} type='radio' name='graphe1' value='assurance' onChange={e => updateG1Data(e.target.value)}></input>
                                <label>Assurance</label>
                            </div>
                            <div>
                                <input checked={Graphe1Data.choice === 'adherence'} type='radio' name='graphe1' value='adherence' onChange={e => updateG1Data(e.target.value)}></input>
                                <label>Adherence</label>
                            </div>
                            <div>
                                <input checked={Graphe1Data.choice === 'type'} type='radio' name='graphe1' value='type' onChange={e => updateG1Data(e.target.value)}></input>
                                <label>Type</label>
                            </div>
                        </div>
                        <div style={{ width: '100%', height: '100%' }}>
                            <ResponsiveContainer>
                                <PieChart>
                                    <Tooltip />
                                    <Pie dataKey="value" data={Graphe1Data.data} fill="#779da1" label />
                                </PieChart>
                            </ResponsiveContainer>
                        </div>
                    </div>
                </div>
            </div>
            <div className='row justify-content-center'>
                <div className='col-11'>
                    <div className='chart-container' style={{ width: '100%', height: 400, marginTop: '50px' }}>
                        <p>D'autres graphe</p>
                        <ResponsiveContainer>
                            <BarChart
                                data={maladeStats.ageStats}
                            >
                                <CartesianGrid strokeDasharray="3 3" />
                                <XAxis dataKey="name" />
                                <YAxis />
                                <Tooltip />
                                {/* <Legend /> */}
                                <Bar dataKey="value" barSize={60} fill="#bd1320" />
                            </BarChart>
                        </ResponsiveContainer>
                    </div>
                </div>
            </div>
            <div className='row justify-content-center'>
                <div className='col-4'>
                    <div className='chart-container' style={{ width: '100%', height: 400, marginTop: '50px' }}>
                        <div className='chart-container-prestation' style={{ height: '100%', width: '100%' }}>
                            <h1>General</h1>
                            <p>10000200</p>
                            <div style={{ width: '100%', height: '100%' }}>
                                <ResponsiveContainer>
                                    <PieChart>
                                        <Tooltip />
                                        <Pie dataKey="value" data={[{ name: 'Medicale', value: 900 }, { name: 'Sociale', value: 500 }]} fill="#779da1" label />
                                    </PieChart>
                                </ResponsiveContainer>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='col-7'>
                    <div className='chart-container' style={{ width: '100%', height: 400, marginTop: '50px' }}>
                        <p>D'autres graphe</p>
                        <ResponsiveContainer>
                            <LineChart
                                data={maladeStats.ageStats}
                            >
                                <CartesianGrid strokeDasharray="3 3" />
                                <XAxis dataKey="name" />
                                <YAxis />
                                <Tooltip />
                                <Line type="monotone" dataKey="uv" stroke="#779da1" />
                            </LineChart>
                        </ResponsiveContainer>
                    </div>
                </div>
            </div>
        </div>
    </div>
}


export default StatsPage