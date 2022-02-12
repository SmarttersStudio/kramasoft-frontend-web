import React, {useEffect, useMemo, useState} from 'react';
import Box from '@material-ui/core/Box';
import { createStyles, makeStyles } from '@material-ui/core/styles';
import theme from '../../theme';
import Container from "@material-ui/core/Container";
import TwitterIcon from "@material-ui/icons/Twitter";
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import {IconButton} from "@material-ui/core";
import Post from "../../components/page-components/Post";
import Axios from "axios";
import {useParams} from "react-router-dom";


const useStyles = makeStyles(() =>
    createStyles({
        text: {
            marginBottom: '17px',
            fontWeight: '500',
            color: '#222',
            fontSize: '20px',
            [theme.breakpoints.down('sm')]: {
                fontSize: '18px',
            },
        },
        title: {
            [theme.breakpoints.down('xs')]: {
               flexDirection: 'column',
            },
        },
        card: {
            padding: '0 300px',
            [theme.breakpoints.down('sm')]: {
                padding: '0 150px',
            },
            [theme.breakpoints.down('xs')]: {
                padding: '0 50px',
            },
        }
    }),
);

const Details = ({match}) => {
    const classes = useStyles();

    const param = useParams();
    // console.log(param.id)

    const userID = param.id;
    const [email, setEmail] = useState("");
    const [name, setName] = useState("");
    const [phone, setPhone] = useState("");

    const [arr, setArr] = useState([]);

    // const message = useMemo(() => {
    //     if(name === "")
    //         return "";
    //     return "Hello " + name;
    // }, [name])

    // =========================================================================

    // const [newMessgae, setNewMessage] = useState("");
    //
    // useEffect(() => {
    //     if(name === "")
    //         setNewMessage("");
    //     setNewMessage("Hello " + name);
    // }, [name])

    useEffect(() => {
        if(!param || !param.id) return;

        Axios.get("https://flutter.smarttersstudio.com/test/profile.php", {
            params: {
                id: userID,
            },
        })
            .then((res) => {
                if (res.data.gender) {
                    setName(res.data.name);
                    setEmail(res.data.email);
                    setPhone(res.data.phone);
                }
            })
            .catch((e) => {
                console.log("error", e);
            });
    }, [param])

    useEffect(() => {
        Axios.get("https://flutter.smarttersstudio.com/test/getMyPosts.php", {
            params: {
                id: userID,
            }
        })
            .then((res) => {
                setArr(res.data);
            })
            .catch((e) => {
                console.log("error", e);
            });
    }, [userID])

    return (
        <React.Fragment>
            <Container maxWidth={'lg'}>
                <Box mt={2} width={'100%'} >
                    <Box display={'flex'} alignItems={'center'} mb={2}>
                        <IconButton color="primary" component="span" onClick={() => {
                            window.location.href = '/'
                        }}>
                            <ArrowBackIcon />
                        </IconButton>
                        <Box fontSize={'22px'} fontWeight={'700'} ml={1}>
                            {'User'}
                        </Box>
                        {/*<Box fontSize={'22px'} fontWeight={'700'} ml={1}>*/}
                        {/*    {message}*/}
                        {/*</Box>*/}
                        {/*<Box fontSize={'22px'} fontWeight={'700'} ml={1}>*/}
                        {/*    {newMessgae}*/}
                        {/*</Box>*/}
                    </Box>
                   <Box width={'100%'} display={'flex'} justifyContent={'space-around'} alignItems={'center'} mb={2} className={classes.title}>
                       <Box className={classes.text}>
                           {name}
                       </Box>
                       <Box className={classes.text}>
                           {email}
                       </Box>
                       <Box className={classes.text}>
                           {phone}
                       </Box>
                   </Box>
                    <Box>
                        <Box className={classes.card}>
                            {arr.filter(n => n.name !== "" && n.description !== "")
                                .map(n => {
                                    return ( <Post name={n.name} id={n.userId} desc={n.description} />);
                                })}
                        </Box>
                    </Box>
                </Box>
            </Container>

        </React.Fragment>
    );
};

export default Details;
