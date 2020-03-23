import React from 'react'
import AddBtn from './../Buttons/add-btn';
import { withRouter } from 'react-router';


export default withRouter((
    { history }
) => <AddBtn onClick={e => history.push('./Ajouter-Malade')}></AddBtn>)