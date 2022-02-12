import React, {useState} from 'react';
import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import TwitterIcon from '@material-ui/icons/Twitter';
import { createStyles, makeStyles } from '@material-ui/core/styles';
import theme from '../../theme';
import Button from '@material-ui/core/Button';
import {Checkbox, IconButton, TextField, Typography} from "@material-ui/core";
import Axios from "axios";
import Bg from '../../images/pexels-pixabay-276514.jpg';
import ArrowBackIcon from "@material-ui/icons/ArrowBack";

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

const Verify = () => {
    const classes = useStyles();

    const [email, setEmail] = useState("");
    const [pass, setPass] = useState("");
    const [name, setName] = useState("");
    const [phone, setPhone] = useState("");
    const [result, setResult] = useState("");
    const [loading, setLoading] = useState(true);

    const Auth = () => {
        console.log("Auth-->");
        Axios.get("https://flutter.smarttersstudio.com/test/signup.php", {
            params: {
                email: email,
                password: pass,
                phone: phone,
                name: name,
                gender: 1,
            },
        })
            .then((res) => {
                console.log("-->", res);
                if (res.data.result) {
                    window.location.href = '/login'
                } else {
                    setResult("SignUp Error: " + res.data.reason);
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
                    <IconButton color="primary" component="span" onClick={() => {
                        window.location.href = '/login'
                    }}>
                        <ArrowBackIcon />
                    </IconButton>
                    <Box width={'100%'} height={'100vh'} display={'flex'} justifyContent={'center'} alignItems={'center'} flexDirection={'column'}>
                        <Box width={'400px'} display={'flex'} justifyContent={'center'} alignItems={'center'} flexDirection={'column'} mt={-8}>
                            <Box className={classes.head} mb={6} alignSelf={'flex-start'}>
                                {'Verify your Email & Phone'}
                            </Box>
                            <Box width={'400px'} mb={2}>
                                <TextField
                                    id="otp-email"
                                    label="Enter OTP sent on Email"
                                    variant="outlined"
                                    color="primary"
                                    fullWidth={true}
                                    required
                                    value={name}
                                    onChange={(event) => {
                                        setName(event.target.value);
                                    }}
                                />
                            </Box>
                            <Box width={'400px'} mb={3}>
                                <TextField
                                    id="otp-phone"
                                    label="Enter OTP sent on Phone"
                                    variant="outlined"
                                    color="primary"
                                    fullWidth={true}
                                    required
                                    value={phone}
                                    onChange={(event) => {
                                        setPhone(event.target.value);
                                    }}
                                />
                            </Box>
                            <Button className={classes.button} variant={'contained'} size={'large'} color={'primary'} onClick={() => {
                                Auth()
                                window.location.href = '/select'
                            }}>
                                Verify
                            </Button>
                            {/*<Box color={'red'} mt={1} mb={1}>{loading ? "" : result}</Box>*/}
                        </Box>
                    </Box>
                </Grid>
            </Grid>
        </React.Fragment>
    );
};

export default Verify;
