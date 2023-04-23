import React from 'react'
import Main from '../Main'

const Inpt = () => {
    return (
        <div>
            <Main />
            <br /><br /><br /><br />
            <div class="input-group mb-3 container">
                <label class="input-group-text" for="inputGroupSelect01">Options</label>
                <select class="form-select" id="inputGroupSelect01">
                    <option selected>Choose Catagory</option>
                    <option value="1">Basic Interaction</option>
                    <option value="2">Menu Guide</option>
                    <option value="3">Timing Guide</option>
                </select>
            </div>
            <div className='container'>
                <form>
                    <fieldset >
                        <legend>Disabled fieldset example</legend>
                        <div class="mb-3">
                            <label class="form-label">Enter Details</label><br />
                            <input type="text" class="form-control" placeholder='Enter Question' />
                            <input type="text" class="form-control" placeholder='Enter Answer' />
                        </div>
                        <div class="mb-3">
                            <input type="text" class="form-control" placeholder='Enter Question' />
                            <input type="text" class="form-control" placeholder='Enter Answer' />
                        </div><div class="mb-3">
                            <input type="text" class="form-control" placeholder='Enter Question' />
                            <input type="text" class="form-control" placeholder='Enter Answer' />
                        </div>
                        <button type="submit" class="btn btn-primary">Submit</button>
                    </fieldset>
                </form>

            </div>


        </div>
    )
}

export default Inpt