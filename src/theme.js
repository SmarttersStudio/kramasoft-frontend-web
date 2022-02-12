import { createMuiTheme } from '@material-ui/core/styles';

// Create a theme instance.
let theme = createMuiTheme({
    palette: {
        type: 'light',
        common: {
            black: '#000',
            white: '#fff',
        },
        primary: {
            main: '#2851BA',
        },
        secondary: {
            main: '#8FBD60',
        },
        default: {
            main: '#fff',
        },
        text: {
            primary: '#000',
            secondary: '#D1D1D1',
        },
        background: {
            default: '#F5F5FB',
            strike: '#C6C6C6',
            text: '#7E7E7E',
            search: '#E9E9F2',
            primary: '#E2EAFF',
            secondary: '#EBFFE2',
        },
        button: {
            main: '#8FBD60',
            select: '#EFEFEF',
        },
        divider: '#CCCCCC',
    },
    typography: {
        fontFamily: 'EuclidCircularA',
        fontWeightLight: 400,
        fontWeightRegular: 500,
        fontWeightMedium: 600,
        fontWeightBold: 700,
        h1: {
            fontWeight: 300,
            fontSize: '6rem',
            lineHeight: 1.167,
            letterSpacing: '"-0.01562em',
        },
        h2: {
            fontWeight: 500,
            fontSize: '29px',
            lineHeight: '39.38px',
            '@media(max-width: 500px)': {
                fontSize: '24px',
            },
            '@media(max-width: 360px)': {
                fontSize: '16px',
            },
        },
        h3: {
            fontWeight: 500,
            fontSize: '22px',
            lineHeight: '30px',
        },
        h4: {
            fontWeight: 400,
            fontSize: '20px',
            lineHeight: '25px',
            letterSpacing: 'normal',
        },
        h5: {
            fontWeight: 500,
            fontSize: '14px',
            lineHeight: '20px',
            letterSpacing: 'normal',
        },
        h6: {
            fontWeight: 400,
            fontSize: '16px',
            lineHeight: '23px',
        },
        subtitle1: {
            fontWeight: 400,
            fontSize: '14px',
            lineHeight: '20px',
        },
        subtitle2: {
            fontWeight: 400,
            fontSize: '12px',
            lineHeight: '18px',
        },
        body1: {
            fontWeight: 500,
            fontSize: '1rem',
            lineHeight: 1.5,
            letterSpacing: '0.00938em',
        },
        body2: {
            fontWeight: 400,
            fontSize: '12px',
            lineHeight: '15.22px',
            letterSpacing: '0.19px',
        },
        button: {
            fontWeight: 500,
            fontSize: '14px',
            lineHeight: 1.21,
            textTransform: 'none',
        },
        caption: {
            fontSize: '0.75rem',
            fontWeight: 400,
            lineHeight: 2.66,
            '@media(max-width: 360px)': {
                lineHeight: 1,
            },
        },
    },
    shape: {
        borderRadius: 7,
    },
    props: {
        MuiTab: {
            disableRipple: true,
        },
    },
    mixins: {
        toolbar: {
            minHeight: 48,
        },
    },
});

theme = {
    ...theme,
    overrides: {
        MuiInput: {
            input: {
                '&::placeholder': {
                    color: 'gray',
                },
            },
        },
        MuiDrawer: {
            paperAnchorDockedLeft: {
                borderRight: 'none',
            },
        },
        MuiButton: {
            root: {
                padding: '6px 10px',
            },
            label: {
                textTransform: 'none',
            },
            contained: {
                boxShadow: 'none',
                '&:active': {
                    boxShadow: 'none',
                },
            },
        },
        MuiTabs: {
            root: {
                marginLeft: theme.spacing(1),
            },
            indicator: {
                height: 3,
                borderTopLeftRadius: 3,
                borderTopRightRadius: 3,
                backgroundColor: theme.palette.common.white,
            },
        },
        MuiTab: {
            root: {
                textTransform: 'none',
                margin: '0 16px',
                minWidth: 0,
                padding: 0,
                [theme.breakpoints.up('md')]: {
                    padding: 0,
                    minWidth: 0,
                },
            },
        },
        MuiIconButton: {
            root: {
                padding: theme.spacing(1),
            },
        },
        MuiTooltip: {
            tooltip: {
                borderRadius: 6,
                backgroundColor: theme.palette.primary.main,
                boxShadow: `0px 4px 4px rgba(234, 67, 53, 0.34)`,
                fontSize: '13px',
            },
        },
        MuiDivider: {
            root: {
                backgroundColor: '#404854',
            },
        },
        MuiListItemText: {
            primary: {
                fontWeight: theme.typography.fontWeightMedium,
            },
        },
        MuiListItemIcon: {
            root: {
                color: 'inherit',
                marginRight: 0,
                '& svg': {
                    fontSize: 20,
                },
            },
        },
        MuiAvatar: {
            root: {
                width: 32,
                height: 32,
            },
        },
        MuiPaper: {
            elevation4: {
                boxShadow: 'none',
            },
            elevation8: {
                boxShadow:
                    '5px 5px 5px -50px rgb(0 0 0 / 5%), 0px 8px 10px 1px rgb(0 0 0 / 3%), 0px 3px 2px 2px rgb(0 0 0 / 0%)',
            },
        },
        MuiButtonGroup: {
            contained: {
                boxShadow: 'none',
            },
            groupedContainedHorizontal: {
                borderRight: 'none',
            },
        },
        MuiStepper: {
            root: {
                padding: 0,
            },
        },
        MuiFormControl: {
            marginNormal: {
                marginTop: 0,
                marginBottom: 0,
            },
        },

    },
};

export default theme;
