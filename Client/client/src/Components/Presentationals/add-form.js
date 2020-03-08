import React from 'react'
import './add-form.css'
import Dialog from './dialog'
import 'bootstrap/dist/css/bootstrap.min.css';
import ProgressBar from './progress-bar';
import PageView from './page-view';

const AddForm = ({

}) => {
    const [nb, setNb] = React.useState(1)
    return <Dialog>
        <div className='add-form'>
            <div className='af-bar'>
                <ProgressBar currentStep={nb} steps={["Personal Info", "Photos", "Rendez-vous"]}></ProgressBar>
            </div>
            <div className='af-body'>
                <PageView currentPage={nb - 1}>
                    <form className='red' onSubmit={e => {
                        e.preventDefault()
                        if (nb < 3) {
                            setNb(nb + 1)
                        }
                    }}>
                        <input type='text' required></input>
                        <button>Submit</button>
                    </form>
                    <form className='red' onSubmit={e => {
                        e.preventDefault()
                        if (nb < 3) {
                            setNb(nb + 1)
                        }
                    }}>
                        <input type='text' required></input>
                        <button>Submit</button>
                    </form>
                    <form className='red' onSubmit={e => {
                        e.preventDefault()
                        if (nb < 3) {
                            setNb(nb + 1)
                        }
                    }}>
                        <input type='text' required></input>
                        <button>Submit</button>
                    </form>
                </PageView>
            </div>
        </div>
    </Dialog>
}

export default AddForm