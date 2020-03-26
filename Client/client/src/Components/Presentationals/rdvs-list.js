import React, { useState } from 'react'
import './rdvs-list.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import ListRdvsItem from './rdvs-list-item'


const RdvsList = ({
    rdvs = [],
    loading = false,
    onDateChange = f => f,
}) => {
    var today = new Date()
    const date = today.getDate() < 10 ? "0" + today.getDate() : today.getDate()
    const month = today.getMonth() < 10 ? "0" + (today.getMonth() + 1) : (today.getMonth() + 1)
    today = today.getFullYear() + "-" + month + "-" + date
    const [currentDate, setDate] = useState(today)
    return <div className='rdvs-list'>
        <div className='container'>
            <div className='row justify-content-between align-items-center'>
                <div className='col-auto rdv-header'>
                    <p className='rdv-header-title'>Rendez Vous</p>
                    <p className='rdv-header-date'>{
                        currentDate=== today ? "Aujourd'hui" : currentDate
                    }</p>
                </div>
                <div className='col-auto'>
                    <input id='rdv-date' type='date'
                        className='rdv-date-input' onChange={e => {
                            onDateChange(e.target.value + "")
                            const haya = e.target.value
                            setDate(haya)
                        }} />
                    <label htmlFor='rdv-date' className='rdv-date-icon'>
                    </label>
                </div>
            </div>
            <div className='row rdvs-list-content'>
                {
                    loading ?
                        <div className='load' style={{ borderColor: 'white' }}></div>
                        :
                        rdvs.length === 0 ?
                            <div className='aucun-rdv'> Aucun Rendez Vous</div>
                            : rdvs.map((rdv, i) => {
                                console.log(rdv)
                                return <ListRdvsItem rdv={rdv} key={i}></ListRdvsItem>
                            })
                }
            </div>
        </div>
    </div>
}


export default RdvsList