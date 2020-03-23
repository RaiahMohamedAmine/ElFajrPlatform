import React from 'react'
import ListMalades from './../listMalades';
import {withRouter} from 'react-router';

export default withRouter(({
    malades=[],
    loading=false,
    history
})=>{
    return <ListMalades malades={malades} loading={loading}
        onClick={malade=> history.push(`malades/${malade._id}`)}></ListMalades>
})