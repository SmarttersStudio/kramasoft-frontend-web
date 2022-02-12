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

const Select = () => {
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
                            <Box className={classes.head} mb={3}>
                                {'We found your accounts'}
                            </Box>
                            <Box mb={2}>
                                {'Select the property to refinance'}
                            </Box>
                            <Box width={'100%'} display={'flex'} justifyContent={'center'} alignItems={'center'} mt={1} fontSize={'20px'}>
                                <Checkbox />
                                {'1234 Folsom Dr, Folsom - CA-95630'}
                            </Box>
                            <Box width={'100%'} display={'flex'} justifyContent={'center'} alignItems={'center'} mt={1} fontSize={'20px'} mb={5}>
                                <Checkbox />
                                {'1234 Folsom Dr, Folsom - CA-95630'}
                            </Box>
                            <Button className={classes.button} variant={'contained'} size={'large'} color={'secondary'} onClick={() => {
                                // Auth()
                                window.location.href = '/'
                            }}>
                                Continue
                            </Button>
                            <Box mt={2} />
                            {/*<Box color={'red'} mt={1} mb={1}>{loading ? "" : result}</Box>*/}
                            <Button className={classes.button} size={'large'} color={'secondary'} onClick={() => {
                                // Auth()
                                window.location.href = '/login'
                            }}>
                                Cancel
                            </Button>
                        </Box>
                    </Box>
                </Grid>
            </Grid>
        </React.Fragment>
    );
};

export default Select;
