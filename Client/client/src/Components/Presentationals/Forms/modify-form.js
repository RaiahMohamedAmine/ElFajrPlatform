import React from 'react';
import MaladeForm from './malade-form';
import ModifyMalade from '../../../middleware/malade/ModifyMalade';
import GetRDVByDate from '../../../middleware/rdv/GetRDVByDate';

var rdv = {
    dateRDV : "2020-09-58"
}
const ModifyForm=({
    initValues={},
    onClose=f=>f,
})=>{
    console.log(initValues);GetRDVByDate (rdv)
    return <MaladeForm onClose={onClose} modify={true} initValues={initValues} onSubmit={malade=>  ModifyMalade(malade)}/>
}

export default ModifyForm