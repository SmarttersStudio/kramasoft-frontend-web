import React, {useEffect, useState} from 'react';
import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import TwitterIcon from '@material-ui/icons/Twitter';
import { createStyles, makeStyles } from '@material-ui/core/styles';
import theme from '../../theme';
import Button from '@material-ui/core/Button';
import Hidden from "@material-ui/core/Hidden";
import Post from "../../components/page-components/Post";
import User from "../../components/page-components/User";
import Axios from "axios";

const useStyles = makeStyles(() =>
    createStyles({
        button: {
            borderRadius: '13px',
            padding: '3px 30px',
            marginBottom: '5px',
            width: '150px',
            [theme.breakpoints.down('sm')]: {
               fontSize: '12px',
                padding: '2px 20px',
                width: '120px',
            },
        },
        text: {
            marginBottom: '17px',
            fontWeight: '500',
            color: '#222',
            fontSize: '20px',
            [theme.breakpoints.down('sm')]: {
                fontSize: '18px',
            },
        }
    }),
);

const Home = () => {
    const classes = useStyles();


    const [email, setEmail] = useState("");
    const [name, setName] = useState("");
    const [phone, setPhone] = useState("");
    const [arr, setArr] = useState([]);
    const [users, setUsers] = useState([]);

    useEffect(() => {

        const id = localStorage.getItem('id');

        Axios.get("https://flutter.smarttersstudio.com/test/profile.php", {
            params: {
               id: id,
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

        Axios.get("https://flutter.smarttersstudio.com/test/getAllPosts.php", {
            params: {
                id: id,
            }
        })
            .then((res) => {
                setArr(res.data);
            })
            .catch((e) => {
                console.log("error", e);
            });

        Axios.get("https://flutter.smarttersstudio.com/test/getAllUsers.php", {
            params: {
                id: id,
            }
        })
            .then((res) => {
                setUsers(res.data);
            })
            .catch((e) => {
                console.log("error", e);
            });

    }, [])


    return (
        <React.Fragment>
            <Container maxWidth={'lg'}>
               <Grid container spacing={2}>
                   <Hidden xsDown>
                       <Grid item lg={3} md={3} sm={3}>
                           <Box position={'fixed'}>
                               <Box mt={2} mb={2}>
                                   <a href={'/'}>
                                       <TwitterIcon color={'primary'} />
                                   </a>
                               </Box>
                               <Box fontSize={'22px'} fontWeight={'700'} mb={2}>
                                   Hello !
                               </Box>
                               <Box className={classes.text}>
                                   {name}
                               </Box>
                               <Box className={classes.text}>
                                   {email}
                               </Box>
                               <Box className={classes.text}>
                                   {phone}
                               </Box>
                               <Box mb={2} mt={1}>
                                   <Button className={classes.button} variant={'outlined'} color={'primary'}>
                                       Edit
                                   </Button>
                               </Box>
                               <Box mb={8}>
                                   <Button className={classes.button} variant={'contained'} color={'primary'}>
                                       Type
                                   </Button>
                               </Box>
                               <Box>
                                   <Button className={classes.button} variant={'contained'} color={'secondary'} onClick={() => {
                                       localStorage.removeItem('id');
                                       window.location.href = '/login';
                                   }}>
                                       Log Out
                                   </Button>
                               </Box>
                           </Box>
                       </Grid>
                   </Hidden>
                   <Grid item lg={6} md={6} sm={6} xs={12}>
                      <Box width={'100%'}>
                        <Box mt={2}>
                            <Box fontSize={'22px'} fontWeight={'700'} mb={2}>
                                {'Home'}
                            </Box>
                        </Box>
                          <Box p={1}>
                              {/*for post*/}
                              {arr.filter(n => n.name !== "" && n.description !== "")
                                  .map(n => {
                                      return ( <Post name={n.name} id={n.userId} desc={n.description} />);
                                  })}
                          </Box>
                      </Box>
                   </Grid>
                   <Hidden xsDown>
                       <Grid item lg={3} md={3} sm={3}>
                           <Box mt={2}  position={'fixed'} width={'100%'} >
                               <Box fontSize={'22px'} fontWeight={'700'} mb={2}>
                                   {'Users'}
                               </Box>
                               <Box height={'350px'} overflow={'vertical-scroll'} >
                                   {/*for users*/}
                                   {/*{users.filter(n => n.name !== "")*/}
                                   {/*    .map(n => {*/}
                                   {/*        return ( <User name={n.name} id={n.id} />);*/}
                                   {/*    })}*/}
                                   {/*{console.log(users)}*/}
                               </Box>
                           </Box>

                       </Grid>
                   </Hidden>
               </Grid>
            </Container>
        </React.Fragment>
    );
};

export default Home;
