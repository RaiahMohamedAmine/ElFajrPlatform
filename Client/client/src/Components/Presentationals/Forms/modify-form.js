import React, { useState } from 'react';
import MaladeForm from './malade-form';
import ModifyMalade from '../../../middleware/malade/ModifyMalade';

const ModifyForm = ({
    initValues = {},
    onClose = f => f,
}) => {
    const [photoData, setPhotoData] = useState({
        src: '',
        isShowed: false
    })
    return <div>
        <div className='photo-malade-container' style={{ display: photoData.isShowed ? 'block' : 'none' }} >
            <div style={{ height: '100%', width: '100%' }} onClick={e => setPhotoData({
                ...photoData,
                isShowed: false
            })}></div>
            <div className='photo-xl' style={{ backgroundImage: photoData.src }} />
        </div>
        <MaladeForm onClose={onClose} modify={true} initValues={initValues}
            onPhotoClick={src=> setPhotoData({
                src:src,
                isShowed:true
            })}
            onSubmit={malade => ModifyMalade(malade)} />
    </div>

}

export default ModifyForm