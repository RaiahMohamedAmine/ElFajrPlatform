import React from 'react'
import './rdvs-list.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import ListRdvsItem from './rdvs-list-item'


const RdvsList = ({
    rdvs = {},
    onDateChange = f => f,
}) => {
    return <div className='rdvs-list'>
        <div className='container'>
            <div className='row justify-content-between align-items-center'>
                <div className='col-auto rdv-header'>
                    <p className='rdv-header-title'>Rendez Vous</p>
                    <p className='rdv-header-date'>{
                        rdvs.dateRdvs=== getInputDate(new Date()) ? "Demain" : rdvs.dateRdvs
                    }</p>
                </div>
                <div className='col-auto'>
                    <input id='rdv-date' type='date'
                        className='rdv-date-input' onChange={e => {
                            onDateChange(e.target.value+"")
                        }} />
                    <label htmlFor='rdv-date' className='rdv-date-icon'>
                    </label>
                </div>
            </div>
            <div className='row rdvs-list-content'>
                {
                    rdvs.loadingRdvs ?
                        <div className='load' style={{ borderColor: 'white' }}></div>
                        :
                        rdvs.rdvs.length === 0 ?
                            <div className='aucun-rdv'> Aucun Rendez Vous</div>
                            : rdvs.rdvs.map((rdv, i) => {
                                return <ListRdvsItem rdv={rdv} key={i}></ListRdvsItem>
                            })
                }
            </div>
        </div>
    </div>
}

export function getInputDate(Date){
    const date = Date.getDate() < 9 ? "0" + Date.getDate() +1: Date.getDate() +1
    const month = Date.getMonth() < 9 ? "0" + (Date.getMonth() + 1) : (Date.getMonth() + 1)
    return Date.getFullYear() + "-" + month + "-" + date
}
export default RdvsList