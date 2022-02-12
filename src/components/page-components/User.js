import React from 'react';
import Box from '@material-ui/core/Box';
import { createStyles, makeStyles } from '@material-ui/core/styles';
import theme from '../../theme';


const useStyles = makeStyles(() =>
    createStyles({
        button: {
            borderRadius: '13px',
            padding: '5px 30px',
            marginBottom: '5px',
            width: '150px',
            [theme.breakpoints.down('sm')]: {
                fontSize: '12px',
                padding: '3px 20px',
            },
        },
        link: {
            cursor: 'pointer',
        },
    }),
);

const User = (name, id) => {
    const classes = useStyles();

    return (
        <React.Fragment>
            <Box className={classes.link} p={2} bgcolor={'#eee'} borderRadius={'17px'} mb={2} width={'150px'} display={'flex'} justifyContent={'center'} alignItems={'center'} onClick={() => {

                window.location.href = `/details/${id}`

            }}>
                    <Box>
                        {name}
                    </Box>
            </Box>
        </React.Fragment>
    );
};

export default User;
