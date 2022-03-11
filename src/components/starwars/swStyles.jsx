export const swStyles = {
    main: {
        display: 'flex',
        flexDirection: 'column',
        width: '95%',
        height: '69px',
        justifyContent: 'center',
    },
    content: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },

    primaryText: {
        color: 'black',
        fontFamily: 'SFProDisplayBold',
        fontSize: '17px',
        lineHeight: '20px',
    },
    secondarytext: {
        fontFamily: 'SFProDisplay',
        fontSize: '14px',
        lineHeight: '17px',
        color: '#828282',
    },
    divider: {
        display: 'flex',
        justifyContent: 'flex-end',
    },
    dividerlength: {
        width: '96%',
    },
    menuItem: { paddingTop: 0, paddingBottom: 0 },
    error: {
        main: {
            paddingTop: '45px',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
        },
        primaryText: {
            fontFamily: 'SFProDisplayBold',
            color: '#EC5757',
            fontSize: '17px',
            lineHeight: '20px',
            textAlign: 'center',
            padding: 16,
        },
        icon: {
            fontSize: '32px',
            color: 'black',
        },
    },
    loading: {
        main: {
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
        },
        primaryText: {
            fontFamily: 'SFProDisplayBold',
            color: '#828282',
            fontSize: '17px',
            lineHeight: '20px',
            textAlign: 'center',
            padding: 16,
        },
        icon: {
            color: '#828282',
        },
    },
    characterInfo: {
        main: {
            paddingTop: '45px',
            display: 'flex',
            flexDirection: 'column',
        },
        subtitle: {
            display: 'flex',
            height: '60px',
            alignItems: 'flex-end',
        },
        info: {
            color: '#828282',
            fontFamily: 'SFProDisplayBold',
            fontSize: '17px',
            lineHeight: '20px',
        },
        details: {
            display: 'flex',
            justifyContent: 'space-between',
            height: '49px',
        },
    },
}
