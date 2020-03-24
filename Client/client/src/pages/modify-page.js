import React, { useEffect, useState } from 'react'
import ModifyForm from './../Components/Presentationals/Forms/modify-form';
import { withRouter } from 'react-router';
import getMalade from '../middleware/getMalade'
import MainPage from './home';

const ModifyPage = ({
    history,
    match
}) => {
    const [state, setState] = useState({ malade: {}, loading: true })
    useEffect(() => {
        async function fetchData() {
            (await getMalade({ key: match.params.id }).then(res => {
                setState({
                    malade: res[0],
                    loading: false
                })
            }))
        }
        fetchData()
    }, [match])
    return state.loading ? <MainPage /> : <div>
        <ModifyForm initValues={state.malade} onClose={e => history.goBack()} />
        <MainPage />
    </div>
}

export default withRouter(ModifyPage)