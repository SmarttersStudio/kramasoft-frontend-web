import React, {useState} from 'react';
import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import TwitterIcon from '@material-ui/icons/Twitter';
import { createStyles, makeStyles } from '@material-ui/core/styles';
import theme from '../../theme';
import Button from '@material-ui/core/Button';
import {Checkbox, TextField} from "@material-ui/core";
import Axios from "axios";
import Bg from "../../images/pexels-pixabay-276514.jpg";


const useStyles = makeStyles(() =>
    createStyles({
        button: {
            width: '100%',
            borderRadius: '5px',
            padding: '5px 40px',
            marginBottom: '5px',
            // [theme.breakpoints.down('sm')]: {
            //     padding: '56px 76px',
            // },

        },
        btn: {
            color: 'blue',
            cursor: 'pointer',
        },
        head: {
            fontWeight: '700',
            fontSize: '32px',
            [theme.breakpoints.down('xs')]: {
                fontSize: '37px',
            },
        },
        tail: {
            fontSize: '17px',
            [theme.breakpoints.down('xs')]: {
                fontSize: '20px',
            },
        },
        img: {
            width: '100%',
            height: '100vh'
        }
    }),
);

const Login = () => {
    const classes = useStyles();

    const [email, setEmail] = useState("");
    const [pass, setPass] = useState("");
    const [result, setResult] = useState("");
    const [loading, setLoading] = useState(true);

    const Auth = () => {
        console.log("Auth-->");
        Axios.get("https://flutter.smarttersstudio.com/test/login.php", {
            params: {
                user: email,
                pass: pass,
            },
        })
            .then((res) => {
                console.log(res.data);
                if (res.data.result) {
                    localStorage.setItem('id', res.data.id);
                   window.location.href = '/'
                } else {
                    setResult("Login Error: " + res.data.reason);
                }
            })
            .catch((e) => {
                console.log("error", e);
            })
            .then(() => {
                console.log("final");
                setLoading(false);
            });
    };

    return (
        <React.Fragment>
            <Grid container spacing={0}>
                <Grid item lg={6} md={6} sm={6}>
                    <img className={classes.img} src={Bg} alt={'Bg'} />
                </Grid>
                <Grid item lg={6} md={6} sm={6}>
                    <Box width={'100%'} height={'100vh'} display={'flex'} justifyContent={'center'} alignItems={'center'} flexDirection={'column'}>
                        <Box width={'400px'} display={'flex'} justifyContent={'center'} alignItems={'center'} flexDirection={'column'}>
                            <Box className={classes.head} mb={6} alignSelf={'flex-start'}>
                                {'Sign In'}
                            </Box>
                            <Box width={'400px'} mb={3}>
                                <TextField
                                    id="signup-email"
                                    label="Email ID"
                                    variant="outlined"
                                    color="primary"
                                    fullWidth={true}
                                    required
                                    value={email}
                                    onChange={(event) => {
                                        setEmail(event.target.value);
                                    }}
                                />
                            </Box>
                            <Button className={classes.button} variant={'contained'} size={'large'} color={'primary'} onClick={() => {
                                Auth()
                                window.location.href = '/verify'
                            }}>
                                Sign In
                            </Button>
                            {/*<Box color={'red'} mt={1} mb={1}>{loading ? "" : result}</Box>*/}
                            <Box width={'100%'} display={'flex'} justifyContent={'center'} alignItems={'center'} mt={1} >
                                {'Not a member?'}
                                <a className={classes.btn} onClick={() => {
                                    window.location.href = '/signup'
                                }}>
                                    Sign Up
                                </a>
                            </Box>
                        </Box>
                    </Box>
                </Grid>
            </Grid>
        </React.Fragment>
    );
};

export default Login;
