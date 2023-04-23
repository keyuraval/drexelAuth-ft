import React from 'react'
import './styles.css'

const Demo = () => {
    return (
        <>
            <div className='container'>
                <form>
                    <div className="form-group">
                        <label for="formGroupExampleInput">Drexel Demo</label>
                        <input type="text" className="form-control" id="formGroupExampleInput" placeholder="Example input" />
                    </div>
                    <br></br>
                    <div className="form-group">
                        <input type="text" className="form-control" id="formGroupExampleInput2" placeholder="Example Output" />
                    </div>
                    <div>
                        <button type="button" className="btn btn-primary">Submit</button>
                    </div>
                </form>

            </div>

        </>
    )
}

export default Demo