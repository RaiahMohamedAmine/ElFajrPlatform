import c from '../constants'

const prestations=(state={},action)=>{
        switch (action.type) {
            case c.REQUEST_PRESTATION:
                return {
                    ...state,
                    loadingPres:true
                }        
            case c.RECEIVE_PRESTATION:
                return {
                    ...state,
                    loadingPres:false
                }        
            case c.SET_PRESTATION:
                return {
                    ...state,
                    prestations:action.prestations
                }        
            default:
                return state
        }
}

export default prestations