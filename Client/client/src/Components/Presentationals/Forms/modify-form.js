import React from 'react';
import MaladeForm from './malade-form';
import ModifyMalade from '../../../middleware/malade/ModifyMalade';
import GetMaladeArchiveById from '../../../middleware/archive/GetMaladeArchiveById';

const ModifyForm=({
    initValues={},
    onClose=f=>f,
})=>{
    console.log(initValues); console.log (GetMaladeArchiveById (2));
    return <MaladeForm onClose={onClose} modify={true} initValues={initValues} onSubmit={malade=>  ModifyMalade(malade)}/>
}

export default ModifyForm