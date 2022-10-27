import React, { Component } from 'react';

class Contact extends Component{
    componentDidMount(){
        document.title = "Contact Us | Katrina's Bakeshop"
    }
    render(){
        return(
            <>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 text-dark">
                            <h1>Contact Us</h1>
                        </div>
                    </div>
                </div>
                <div className="container pt-4" style={{backgroundColor: 'white'}}>
                    <div className="row">

                        {/* Embeded location */}

                        <div className="col-lg-6 text-center">
                            <iframe 
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d28141.604868565217!2d120.95823751649914!3d14.434217656799962!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3397d3d20b51d2ed%3A0x83a5fbd668985366!2sMolino%20Rd%2C%20Bacoor%2C%20Cavite!5e0!3m2!1sen!2sph!4v1663386762852!5m2!1sen!2sph" 
                                width="100%" 
                                height="830" 
                                style={{border:'0'}} 
                                allowfullscreen="" 
                                loading="lazy"
                                title='location' 
                                referrerpolicy="no-referrer-when-downgrade">
                            </iframe>
                        </div>

                        {/* Form */}

                        <div className="col-lg-6">
                            <form>
                                <div className="form-group">
                                        <h1>Katrina's Bakeshop</h1>
                                        <p>
                                            Progressive and Greenbreeze village corner<br/>
                                            Molino RD, Greenfield District <br/>
                                                Bacoor City, Cavite
                                        </p>
                                </div>
                                <div className="form-group">
                                        <label for="name">Full Name:</label>
                                        <input type="text" className="form-control" id="name" placeholder="Ex. Kriss Santos"/>
                                </div>
                                <div className="form-group pt-2">
                                        <label for="email">Email:</label>
                                        <input type="email" className="form-control" id="email" placeholder="Ex. kriss.santos@yahoo.com"/>
                                </div>
                                <div className="form-group col-md-4 pt-2">
                                <label for="inputSubject">Subject</label>
                                <select id="inputSubject" className="form-control">
                                    <option selected disabled>Please Select</option>
                                    <option>Suggestion</option>
                                    <option>Followup order</option>
                                    <option>Complain</option>
                                </select>
                                </div>
                                <div className="form-group pt-2">
                                <label for="exampleFormControlTextarea1">Message:</label>
                                <textarea className="form-control pb-5" id="exampleFormControlTextarea1" rows="3" ></textarea>
                                </div>
                                <button type="submit" className="btn" style={{backgroundColor: 'lightslategray', marginTop: '15px', float: 'right'}}>Send</button>
                                <div className="form-group">
                                    <h2 className="fs-5 pt-5">Contact Number</h2>
                                    <p> (212)456-7890<br/>
                                        Globe 0916-7006035 <br/>
                                        Smart 0906-9028632
                                    </p>
                                </div>
                                <div>
                                    <p>For comments and suggestion <br/>
                                    email: delivery.katrina@yahoo.com<br/>
                                    Send us a message<br/>
                                    Fill out the form above for inquiries, questions and other matters
                                </p>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}

export default Contact