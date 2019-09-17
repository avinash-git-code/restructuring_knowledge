import React from 'react';

const styles = {
    footerCont: {
        position: 'absolute',
        bottom:0,
        borderTop:'1px solid #ccc',
        width:'100%',
        padding: '5px 10px 10px',
        height:'58px'
    },
    span: {
        fontSize:'10px',
        textAlign:'center',
        display: 'block',
    },
    footerLinkCon: {
        display: 'flex',
        justifyContent:'center',
        margin:'0px 0px 5px'
    },
    footerLink : {
        fontSize:'11px',
        margin: '0 10px',
        textDecoration: 'none',
        color: '#90b3f0'
    },
    copy: {
        textAlign: 'right',
        color: 'rgb(162, 157, 157)',
        cursor: 'default',
        fontSize: '8px'
    }
}

const Footer = () => {
    return(
        <div style={styles.footerCont}>
            <div style={styles.footerLinkCon}>
                <a style={styles.footerLink} href="">HELP</a>
                <a style={styles.footerLink} href="">FEEDBACK</a>
                <a style={styles.footerLink} href="">TEMPLATES</a>
            </div>
            <span style={styles.span}>Trail with all features </span>
            <div style={styles.copy}>© 2019 Ad Ltd - v. 1.0</div>
        </div>
    );
}

export default Footer;