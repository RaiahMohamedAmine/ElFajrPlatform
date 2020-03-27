import React from 'react';
import MaladeForm from './malade-form';
import ModifyMalade from '../../../middleware/malade/ModifyMalade';
import DeleteMalade from '../../../middleware/malade/DeleteMalade';

const ModifyForm=({
    initValues={},
    onClose=f=>f,
})=>{
    console.log(initValues); DeleteMalade (90);
    return <MaladeForm onClose={onClose} modify={true} initValues={initValues} onSubmit={malade=>  ModifyMalade(malade)}/>
}

export default ModifyForm