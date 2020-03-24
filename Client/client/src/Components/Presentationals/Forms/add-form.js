import React from 'react'
import MaladeForm from './malade-form'
import AddMalade from '../../../middleware/AddMalade'


const AddForm=({
    onClose=f=>f,
})=>{
    return <MaladeForm onClose={onClose} onSubmit={malade=> AddMalade(malade)}/>
}

export default AddForm