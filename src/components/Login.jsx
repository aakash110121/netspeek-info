import '../styles/App.css';
import Header from './Header';
import Footer from './Footer';
import { useState } from 'react';
import { TextField, Button, Container, Typography, Box, FormControl, InputLabel, Input } from '@mui/material';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        // Add your sign-in logic here
    };
    return (
        <>
            <Header />
            <Container maxWidth="sm">
                <Box mt={5}>
                    <Typography variant="h4" align="center" gutterBottom>
                        Sign In
                    </Typography>
                    <form onSubmit={handleSubmit}>
                        <div className='inputlabels'>
                            <InputLabel htmlFor="email">EMAIL</InputLabel>
                            <TextField
                                id='email'
                                variant="standard"
                                fullWidth
                                margin="normal"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                sx={{ m: 0 }}
                            />
                        </div>

                        <div className='inputlabels'>
                            <InputLabel htmlFor="password">PASSWORD</InputLabel>
                            <TextField
                                id="password"
                                variant="standard"
                                fullWidth
                                margin="normal"
                                type="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                sx={{ m: 0 }}
                            />
                        </div>
                        <Button
                            type="submit"
                            variant="contained"
                            color="primary"
                            fullWidth
                            size="large"
                            sx={{ mt: 2 }}
                        >
                            Sign In
                        </Button>
                    </form>
                </Box>
            </Container>
            <Footer />
        </>
    )
}

export default Login;