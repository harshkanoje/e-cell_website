import React from 'react'

const Forms = () => {
    return (
        <div className="container">
            <h1 color='#fff'>Event Name</h1>
            <br />
            <p style={{ color: '#fff' }}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure expedita dolorem laudantium,
                hic amet quibusdam dicta provident esse beatae dolores cumque quaerat laborum soluta iste sequi quod vero quam magni!
            </p>
            <p style={{ color: '#fff' }}>
                Date :
                <br />
                Time :
                <br />
                Venue :
            </p>
            <hr className="border-top border-white" />
            <form>
                <div class="row">
                    <div class="col">
                        <label for="FirstName" style={{ color: '#fff' }}>First Name
                            <sup style={{ color: '#ff0000' }}> * </sup>                        </label>
                        <input type="text" class="form-control" placeholder="First name" required />
                    </div>
                    <div class="col">
                        <label for="FirstName" style={{ color: '#fff' }}>Last Name
                            <sup style={{ color: '#ff0000' }}> * </sup>                        </label>

                        <input type="text" class="form-control" placeholder="Last name" required />
                    </div>
                    <br />
                    <br />
                    <br />

                    <div class="row">
                        <div class="form-group col-md-6">
                            <label for="inputEmail4" style={{ color: '#fff' }}>Email<sup style={{ color: '#ff0000' }}> * </sup></label>
                            <input type="email" class="form-control" id="inputEmail4" placeholder="Email" required />
                        </div>
                        <br />
                        <br />
                        <br />
                        <div class="form-group col-md-6">
                            <label for="registraionNo" style={{ color: '#fff' }}>Registration Number
                                <sup style={{ color: '#ff0000' }}> * </sup>
                            </label>
                            <input type="text" class="form-control" placeholder="Registration Number" maxLength={10} required />
                        </div>

                        <br />
                        <br />
                        <br />

                        <div className="form-group col-md-6">
                            <label htmlFor="phoneNumber" style={{ color: '#fff' }}>
                                Phone
                                <sup style={{ color: '#ff0000' }}> *</sup>
                            </label>
                            <div className="input-group">
                                
                                <input
                                    type="tel"
                                    className="form-control"
                                    id="phoneNumber"
                                    placeholder="Phone Number"
                                    maxLength={10}
                                    required
                                />
                            </div>
                        </div>


                        <br />
                        <br />
                        <br />
                        <br />

                        <div class="mb-3">
                            <button class="btn btn-primary" type="submit" >Submit form</button>
                        </div>

                    </div>
                </div>
            </form>

        </div>
    )
}

export default Forms
