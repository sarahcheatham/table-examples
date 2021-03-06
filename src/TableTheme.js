import { createTheme } from '@mui/material/styles';
import { grey } from '@mui/material/colors';
const tableTheme = createTheme({
    palette: {
        primary: {
            main: '#307F5F',
            light: '#8EE59D',
            dark: '#20471B',
        },
        secondary: {
            main: '#004A8F',
            light: 'BCD4EF',
            dark: '#002746'
        }
    },
    typography: {
        body2: {
            fontFamily: 'Roboto',
            fontSize: '14px',
            textTransform: 'uppercase',
            letterSpacing: '0.15px',
            lineHeight: '143%',
            [`@media screen and (max-width: 1200px)`]:{
                fontSize: '12px'
            }
        },
        caption: {
            textTransform: 'none'
        },
    },
    components: {
        MuiToolbar: {
            styleOverrides: {
                root: {
                    paddingRight: '0.25em',
                    paddingLeft: '0.5em',
                    [`@media screen and (min-width: 600px)`]:{
                        paddingRight: '0.25em',
                        paddingLeft: '0.5em'
                    }
                }
            }
        },
        // MuiToolbar: {
        //     styleOverrides: {
        //         root: {
        //             paddingRight: '0px !important',
        //             paddingLeft: '0px !important',
        //             // paddingRight: 0,
        //             // [`@media (min-width: 600px)`]:{
        //             //     padding: 0
        //             // }
        //         },
        //         // gutters: {
        //         //     paddingRight: 0,
        //         //     paddingLeft: 0
        //         // }
        //     }
        // },
        MuiTablePagination: {
            styleOverrides: {
                selectLabel: {
                    fontSize: '12px',
                    textTransform: 'none',
                    letterSpacing: '0.4px',
                    lineHeight: '166%'
                },
                select: {
                    fontSize: '12px',
                    textTransform: 'none',
                    letterSpacing: '0.3px',
                },
                displayedRows: {
                    fontSize: '12px',
                    textTransform: 'none',
                    letterSpacing: '0.4px',
                    lineHeight: '166%'
                }
            }
        },
        MuiTableRow: {
            styleOverrides: {
                head: {
                    backgroundColor: 'rgba(42, 51, 62, .65)',
                },
            }
        },
        MuiTableCell: {
            styleOverrides: {
                root: {
                    fontFamily: "Roboto",
                },
                head: {
                    fontFamily: 'Roboto',
                    fontSize: '15px',
                    textTransform: 'none',
                    paddingLeft: '0.5em',
                    [`@media screen and (max-width: 1200px)`]:{
                        fontSize: '14px'
                    }
                },
            }
        },
        MuiChip: {
            styleOverrides: {
                root: {
                    marginRight: '0.5em'
                },
                label: {
                    fontFamily: 'Roboto',
                    fontSize: '13px',
                    textTransform: 'capitalize',
                    [`@media screen and (max-width: 1200px)`]:{
                        fontSize: '12px'
                    }

                }
            }
        },
        MuiTableSortLabel: {
            styleOverrides: {
                root: {
                    color: grey[50],
                    '&:hover': {
                        color: grey[100],
                        '.MuiTableSortLabel-icon': {
                            color: grey[100],
                            opacity: 1
                        }
                    },
                    '&.Mui-active': {
                        color: grey[100],
                        '.MuiTableSortLabel-icon': {
                            color: grey[100],
                            opacity: 1
                        }
                    }
                },
                icon: {
                    color: grey[50]
                }
            }
        },
        MuiButtonBase: {
            styleOverrides: {
                root: {
                    '& .MuiTableSortLabel-root': {
                        color: grey[50],
                    }
                }
            }
        }
    }
})

export default tableTheme;