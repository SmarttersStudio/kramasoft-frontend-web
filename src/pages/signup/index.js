import React, {useState} from 'react';
import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import TwitterIcon from '@material-ui/icons/Twitter';
import { createStyles, makeStyles } from '@material-ui/core/styles';
import theme from '../../theme';
import Button from '@material-ui/core/Button';
import {Checkbox, TextField, Typography} from "@material-ui/core";
import Axios from "axios";
import Bg from '../../images/pexels-pixabay-276514.jpg';
import {useCropperDialog, withCropper} from "../../components/cropper/CropperDialogProvider";
import {uploadFile} from "../../apis/res.app";

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

const Signup = () => {
    const classes = useStyles();

    const [email, setEmail] = useState("");
    const [pass, setPass] = useState("");
    const [name, setName] = useState("");
    const [phone, setPhone] = useState("");
    const [result, setResult] = useState("");
    const [loading, setLoading] = useState(true);

    const { getCroppedImage } = useCropperDialog();

    const dataURLtoFile = (dataurl, filename) => {
        let arr = dataurl.split(','),
            mime = arr[0].match(/:(.*?);/)[1],
            bstr = atob(arr[1]),
            n = bstr.length,
            u8arr = new Uint8Array(n);
        while (n--) {
            u8arr[n] = bstr.charCodeAt(n);
        }
        return new File([u8arr], filename, { type: mime });
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
                          <Box className={classes.head} mb={2} alignSelf={'flex-start'}>
                              {'Sign Up'}
                          </Box>
                          <Box width={'100%'} display={'flex'} justifyContent={'center'} alignItems={'center'} flexDirection={'column'} bgcolor={'#ddd'} mb={1} border={'1px solid black'}
                            onClick={()=>{
                                getCroppedImage({}).then(
                                    res => {
                                        const { status , src } = res ;
                                        console.log(res);
                                        if(status === 'CROPPED'){
                                            uploadFile(dataURLtoFile(src,'aaa')).then(
                                                res => {
                                                    const {name , email , phone } = res;
                                                    setName(name);
                                                    setEmail(email);
                                                    setPhone(phone);
                                                }
                                            )
                                        }
                                    }
                                );
                            }}
                            style={{
                                cursor: 'pointer'
                            }}
                          >
                              <Box textAlign={'center'} fontWeight={'600'} fontSize={'18px'} mb={2} mt={3}>
                                  {'Drop your Business Card here'}
                              </Box>
                              <Box textAlign={'center'} mb={2}>
                                  {'Our AI fills the dat for you'}
                              </Box>
                          </Box>
                          <Box alignSelf={'flex-start'} fontSize={'15px'} mb={5}>
                              {'Supported formats PNG, JPEG'}
                          </Box>
                          <Box width={'400px'} mb={2}>
                              <TextField
                                  id="signup-name"
                                  label="Full Name"
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
                          <Box width={'400px'} mb={2}>
                              <TextField
                                  id="signup-phone"
                                  label="Contact Number"
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
                          <Box width={'400px'}>
                              <TextField
                                  id="signup-email-phone"
                                  label="Email ID / Phone"
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
                          {/*<Box width={'300px'} mb={2}>*/}
                          {/*    <TextField*/}
                          {/*        id="signup-pass"*/}
                          {/*        label="Password"*/}
                          {/*        variant="outlined"*/}
                          {/*        color="primary"*/}
                          {/*        fullWidth={true}*/}
                          {/*        required*/}
                          {/*        value={pass}*/}
                          {/*        onChange={(event) => {*/}
                          {/*            setPass(event.target.value);*/}
                          {/*        }}*/}
                          {/*    />*/}
                          {/*</Box>*/}
                          <Box width={'100%'} display={'flex'} justifyContent={'center'} alignItems={'center'} mb={2}>
                              <Checkbox />
                              {' By signing up, I agree to Kramasoft\'s.'}
                          </Box>
                          <Button className={classes.button} variant={'contained'} size={'large'} color={'primary'} >
                              Sign Up
                          </Button>
                          {/*<Box color={'red'} mt={1} mb={1}>{loading ? "" : result}</Box>*/}
                          <Box width={'100%'} display={'flex'} justifyContent={'center'} alignItems={'center'} mt={1} >
                              {'Already a member?'}
                              <a className={classes.btn} onClick={() => {
                                  window.location.href = '/login'
                              }}>
                                  Log In
                              </a>
                          </Box>
                      </Box>
                  </Box>
              </Grid>
          </Grid>
        </React.Fragment>
    );
};

export default withCropper(Signup);
