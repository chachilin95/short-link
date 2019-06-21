import React from 'react';
import { Link } from 'react-router';

export default class Signup extends React.Component {
    
    constructor(props) {
        super(props);

        this.state = {
            error: ''
        };
    }

    onSubmit(e) {
        e.preventDefault();

        // throwing an error just because
        this.setState({
            error: 'OH NO!'
        });
    }
    
    render() {
        return (
            <div>
                <h1>Signup for Short Lnk</h1>
                
                {this.state.error ? <p>{this.state.error}</p> : undefined}
                
                <form onSubmit={this.onSubmit.bind(this)}>
                    <input type='email' name='email' placeholder='abc@123.com'/>
                    <input type='password' name='password' placeholder='Password'/>
                    <button>Create account</button>
                </form>

                <Link to="/">Already have an account?</Link>
            </div>
        );
    }
}