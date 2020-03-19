import React from 'react'
import './page-view.css'

const PageView=({
    children=[],
    currentPage=1
})=>{
    return <div className='page-view'>
        {
            children.map((child,i)=>{
                var pos = i+1
                return <div key={i} className='page' style={
                    pos===currentPage ?
                    {transform:'translateX(0)'}
                    : pos>currentPage ?
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