import React from 'react';
import MaladeForm from './malade-form';
import ModifyMalade from '../../../middleware/malade/ModifyMalade';
import GetStatistics from '../../../middleware/prestation/GetStatistics';

const ModifyForm=({
    initValues={},
    onClose=f=>f,
})=>{
    console.log(initValues); GetStatistics();
    return <MaladeForm onClose={onClose} modify={true} initValues={initValues} onSubmit={malade=>  ModifyMalade(malade)}/>
}

export default ModifyForm