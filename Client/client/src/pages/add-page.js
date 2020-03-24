import React from 'react'
import AddForm from '../Components/Presentationals/Forms/add-form'
import { withRouter } from 'react-router';
import MainPage from './home';

const AddPage=({
    history
})=>{
    return <div>
         <AddForm onClose={e=>history.goBack()}
    ></AddForm>
    <MainPage></MainPage>
    </div>
}

export default withRouter(AddPage)