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
                        rdvs.dateRdvs=== getInputDate() ? "Demain" : rdvs.dateRdvs
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
            <div className='row rdvs-list-content' style={{height: rdvs.rdvs.length===0 ? '100%':'auto'}}>
                {
                    rdvs.loadingRdvs ?
                        <div className='load' style={{ borderColor: 'white' }}></div>
                        :
                        rdvs.rdvs.length === 0 ?
                            <div className='aucun-rdv'> Aucun Rendez-Vous</div>
                            : rdvs.rdvs.map((rdv, i) => {
                                return <ListRdvsItem rdv={rdv} key={i}></ListRdvsItem>
                            })
                }
            </div>
        </div>
    </div>
}

export function getInputDate()
{
    var tomoroow = new Date ();
    tomoroow.setDate (tomoroow.getDate ()+1);
    const date = tomoroow.getDate() < 10 ? "0" + tomoroow.getDate() : tomoroow.getDate() ;
    const month = tomoroow.getMonth() < 9 ? "0" + (tomoroow.getMonth() + 1) : (tomoroow.getMonth() + 1);
    return tomoroow.getFullYear() + "-" + month + "-" + date
}
export function getInputToday(){
    const today = new Date()
    const date = today.getDate() < 9 ? "0" + today.getDate(): today.getDate()
    const month = today.getMonth() < 9 ? "0" + (today.getMonth() + 1) : (today.getMonth() + 1)
    return today.getFullYear() + "-" + month + "-" + date
}
export default RdvsList