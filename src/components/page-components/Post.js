import React from 'react';
import Box from '@material-ui/core/Box';
import { createStyles, makeStyles } from '@material-ui/core/styles';
import theme from '../../theme';


const useStyles = makeStyles(() =>
    createStyles({
        title: {
            fontSize: '20px',
            cursor: 'pointer',
            [theme.breakpoints.down('sm')]: {
                fontSize: '18px',
            },
        },
        body: {
            fontSize: '16px',
            color: '#555',
            [theme.breakpoints.down('sm')]: {
                fontSize: '13px',
            },
        },
    }),
);

const Post = ({id, name, desc}) => {
    const classes = useStyles();

    return (
        <React.Fragment>
           <Box p={3} bgcolor={'#eee'} borderRadius={'7px'} mb={2}>
                   <Box className={classes.title} mb={1} onClick={() => {
                       window.location.href = `/details/${id}`;
                   }}>
                       {name}
                   </Box>
               <Box className={classes.body}>
                   {desc}
               </Box>
           </Box>
        </React.Fragment>
    );
};

export default Post;
