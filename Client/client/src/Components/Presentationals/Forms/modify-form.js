import React from 'react';
import MaladeForm from './malade-form';
import ModifyMalade from '../../../middleware/malade/ModifyMalade';

const ModifyForm=({
    initValues={},
    onClose=f=>f,
})=>{
    return <MaladeForm onClose={onClose} modify={true} initValues={initValues} onSubmit={malade=>  ModifyMalade(malade)}/>
}

export default ModifyForm