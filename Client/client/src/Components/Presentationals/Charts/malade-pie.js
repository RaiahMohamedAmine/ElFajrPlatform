import React from 'react'
import './malade-pie.css'
import { ResponsiveContainer, PieChart, Tooltip, Pie, Cell, Legend } from 'recharts'

const colors = [
    '#009de0',
    '#bd1320',
    '#feed01',
    '#f29400',
    '#779da1',
    '#72c3e1',
    '#62e331',
    '#7b03fc',
    '#ca03fc',
    '#03fce7',
    '#aa91ab'
]

const MaladePie = ({
    choice,
    data,
    title,
    onChange
}) => {
    return <div className='malade-pie-container'>
        <p>{title}</p>
        <div className='malade-pie-left'>
            <div className='radio-btns'>
                <div>
                    <input checked={choice === 'sexe'} type='radio' name='graphe1' value='sexe' onChange={onChange}></input>
                    <label>Sexe</label>
                </div>
                <div>
                    <input checked={choice === 'situation'} type='radio' name='graphe1' value='situation' onChange={onChange}></input>
                    <label>Situation</label>
                </div>
                <div>
                    <input checked={choice === 'assurance'} type='radio' name='graphe1' value='assurance' onChange={onChange}></input>
                    <label>Assurance</label>
                </div>
                <div>
                    <input checked={choice === 'adherence'} type='radio' name='graphe1' value='adherence' onChange={onChange}></input>
                    <label>Adherence</label>
                </div>
                <div>
                    <input checked={choice === 'type'} type='radio' name='graphe1' value='type' onChange={onChange}></input>
                    <label>Type</label>
                </div>
            </div>
            <div style={{ height: "100%", width: '70%' }}>
                <ResponsiveContainer>
                    <PieChart>
                        <Legend/>
                        <Tooltip />
                        <Pie dataKey="value" data={data} fill="#779da1" label>
                            {data.map((entry, index) =>
                                <Cell key={`cell-${index}`} fill={colors[index%11]} />
                            )}
                        </Pie>
                    </PieChart>
                </ResponsiveContainer>
            </div>
        </div>
    </div>
}

export default MaladePie