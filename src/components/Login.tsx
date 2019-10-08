import React from 'react';
import useForm from '../hooks/form';
import Container from '@material-ui/core/Container';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';
import '../styles/Login.css';

export interface LoginProps { }

const Login: React.SFC<LoginProps> = () => {

    const login = () => {
        console.log(values)
    }

    const { values, handleChange, handleSubmit } = useForm(login);

    return (
        <Container>
            <Card id="Login">
                <CardContent>
                    <h1>Login</h1>
                    <form action="submit" onSubmit={handleSubmit} className='login-form'>
                        <TextField
                            className='input'
                            label="Email"
                            type="email"
                            name="email"
                            autoComplete="email"
                            margin="normal"
                            variant="outlined"
                            onChange={handleChange}
                        />
                        <TextField
                            className='input'
                            label="Password"
                            type="password"
                            name="password"
                            autoComplete="current-password"
                            margin="normal"
                            variant="outlined"
                            onChange={handleChange}
                        />
                        <Button className='button' variant="contained" color="primary" type='submit'>
                            Login
                        </Button>
                    </form>
                    <Link to='/register'>
                        <p className='register-link'>Register here</p>
                    </Link>
                </CardContent>
            </Card>
        </Container>
    );
}

export default Login;