import React from 'react'
import Hdr from '../header'
import { withRouter } from 'react-router';

const Header=({
    history
})=>{
    return <Hdr toHome={e=>history.push('/')} toArchive={e=>history.push('/archives')} toStats={e=> history.push('/statistiques')} toChangePass= {e=> history.push ('/changerMotDePasse')}/>
}

export default withRouter(Header)