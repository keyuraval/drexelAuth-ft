import React from 'react'
import Main from '../Main'
import './styles.css'

const HomePage = () => {
    return (
        <>
            <Main />
            <div className='container'>
                <p>Welcome to Drexel.</p>
                <p className='head'>One Stop Cutomer Interaction Solution for Developers.</p>
            </div>
            <br /><br />

            <div className='container'>
                <div className="card text-center mb-3 row">
                    <div className="card-body col">
                        <h5 className="card-title">Start Free Trial</h5>
                        <p className="card-text">Get started with free trial.</p>
                        <a href="/inpt" className="btn btn-primary">Explore</a>
                    </div>
                </div>
                <div className="card text-center mb-3 row">
                    <div className="card-body col">
                        <h5 className="card-title">Get in touch with Drexel.</h5>
                        <p className="card-text">Explore Demo.</p>
                        <a href="/dmo" className="btn btn-primary">Demo</a>
                    </div>
                </div>
            </div>

        </>
    )
}

export default HomePage