import React from 'react'
import './page-view.css'

const PageView=({
    children=[],
    currentPage=1
})=>{
    return <div className='page-view'>
        {
            children.map((child,i)=>{
                return <div className='page' style={
                    i===currentPage ?
                    {transform:'translateX(0)'}
                    : i>currentPage ?
                    {transform:'translate(100%)'}:
                    {transform:'translate(-100%)'}
                }>
                    {child}
                </div>
            })
        }
    </div>
}

export default PageView