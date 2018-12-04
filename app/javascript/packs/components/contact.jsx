import React from 'react';
import axios from 'axios';

const csrfToken = document.querySelector('[name="csrf-token"]').content;
axios.defaults.headers.common['X-CSRF-TOKEN'] = csrfToken;

class About extends React.Component {
    handleSubmit(e){
        let message = e.target.elements[0].value;
        axios.post('/contact', `message=${message}`)
            .then( (data)=> {
                debugger;
            })
    }


    render(){
        return (
            <div className="container" style={{padding: '40px 0'}}>
                <div className="row">
                    <div className="col-md-8 offset-md-2">
                        <h1>Contact Us</h1>
                        <form onSubmit={this.handleSubmit.bind(this)}>
                            <input type="text" name="message" className="form-control" placeholder="Send us a message"/>
                            <button type="submit" className="btn btn-primary">Send</button>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}

export default About