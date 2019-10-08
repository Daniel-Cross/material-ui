import React, { Fragment } from "react";
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import '../styles/Register.css';
import { Link } from "react-router-dom";
import useForm from '../hooks/form';

export interface RegisterProps {

}

const Register: React.SFC<RegisterProps> = () => {

    const register = () => {
        console.log(values)
    }

    const { values, handleChange, handleSubmit } = useForm(register);

    return (
        <Fragment>
            <Card id='Register'>
                <CardContent>
                    <Link to='/'>
                        <p className='go-back'>Back to Login</p>
                    </Link>
                    <h1>Register</h1>
                    <form action="submit" className='register-form' onSubmit={handleSubmit}>
                        <TextField
                            className='input'
                            label="First Name"
                            type="text"
                            name="firstName"
                            margin="normal"
                            onChange={handleChange}
                        />
                        <TextField
                            className='input'
                            label="Last Name"
                            type="text"
                            name="lastName"
                            margin="normal"
                            onChange={handleChange}
                        />
                        <TextField
                            className='input'
                            label="Email"
                            type="email"
                            name="email"
                            autoComplete="email"
                            margin="normal"
                            onChange={handleChange}
                        />
                        <TextField
                            className='input'
                            label="Confirm Email"
                            type="email"
                            name="confirmEmail"
                            autoComplete="email"
                            margin="normal"
                            onChange={handleChange}
                        />
                        <TextField
                            className='input'
                            label="Password"
                            type="password"
                            name="password"
                            autoComplete="current-password"
                            margin="normal"
                            onChange={handleChange}
                        />
                        <TextField
                            className='input'
                            label="Confirm Password"
                            type="password"
                            name="confirmPassword"
                            autoComplete="current-password"
                            margin="normal"
                            onChange={handleChange}
                        />
                        <Button className='button' variant="contained" color="primary" type='submit'>
                            Submit
                        </Button>
                    </form>
                </CardContent>
            </Card>
        </Fragment>
    );
}

export default Register;