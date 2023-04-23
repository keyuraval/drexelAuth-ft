import React from 'react'
import Main from '../Main'
import './styles.css'

const HomePage = () => {
    return (
        <div>
            <Main />
            <div className='container'>
                <p>Welcome to Drexel.</p>
                <p className='head'>One Stop Cutomer Interaction Solution for Developers.</p>
            </div>
            <div class="card text-center mb-3">
                <div class="card-body">
                    <h5 class="card-title">Start Free Trial</h5>
                    <p class="card-text">Get started with free trial.</p>
                    <a href="/inpt" class="btn btn-primary">Explore</a>
                </div>
            </div>
            <div class="card text-center mb-3">
                <div class="card-body">
                    <h5 class="card-title">Get in touch with Drexel.</h5>
                    <p class="card-text">Explore Demo.</p>
                    <a href="/inpt" class="btn btn-primary">Demo</a>
                </div>
            </div>
        </div>
    )
}

export default HomePage