import React, { useEffect } from 'react'
import './stats-page.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import Header from '../Components/Presentationals/header'
import {
    ResponsiveContainer, PieChart, Pie, XAxis, YAxis, Bar, BarChart, CartesianGrid,
    Tooltip, Legend,LineChart,Line
} from 'recharts';
import Card from '../Components/Presentationals/card';
import GetStats from '../middleware/malade/GetStatistics'

const StatsPage = ({

}) => {
    const data = [
        { name: 'Group A', value: 400 }, { name: 'Group B', value: 300 },
        { name: 'Group C', value: 300 }, { name: 'Group D', value: 200 },
    ];
    const data1 = [
        {
            name: 'Page A', uv: 4000, pv: 2400, amt: 2400,
        },
        {
            name: 'Page B', uv: 3000, pv: 1398, amt: 2210,
        },
        {
            name: 'Page C', uv: 2000, pv: 9800, amt: 2290,
        },
        {
            name: 'Page D', uv: 2780, pv: 3908, amt: 2000,
        },
        {
            name: 'Page E', uv: 1890, pv: 4800, amt: 2181,
        },
        {
            name: 'Page F', uv: 2390, pv: 3800, amt: 2500,
        },
        {
            name: 'Page G', uv: 3490, pv: 4300, amt: 2100,
        },
    ];
    return <div>
        <Header />
        <div className='container-fluid stats-page'>
            <div className='row first-row justify-content-center'>
                <div className='col-5 n-malade-container'>
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
                <div className='col-6' style={{ marginTop: '15px' }}>
                    <div className=' chart-container'>
                        <p>Graphe</p>
                        <div style={{ width: '100%', height: '100%' }}>
                            <ResponsiveContainer>
                                <PieChart>
                                    <Pie dataKey="value" data={data} fill="#779da1" label />
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
                                data={data1}
                            >
                                <CartesianGrid strokeDasharray="3 3" />
                                <XAxis dataKey="name" />
                                <YAxis />
                                <Tooltip />
                                <Legend />
                                <Bar dataKey="uv" barSize={60} fill="#bd1320" />
                            </BarChart>
                        </ResponsiveContainer>
                    </div>
                </div>
            </div>
            <div className='row justify-content-center'>
                <div className='col-11'>
                    <div className='chart-container' style={{ width: '100%', height: 400, marginTop: '50px' }}>
                        <p>D'autres graphe</p>
                        <ResponsiveContainer>
                            <LineChart
                                data={data1}
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