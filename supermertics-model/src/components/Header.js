import React/*, { Component }*/ from 'react';

const styles = {
    BarHeader:{
        backgroundColor:'#616161'
    },
    h1:{
        fontSize: '16px',
        color: '#fff',
        margin: 0,
        padding: '10px',
        position: 'relative'
    },
    button:{
        position: 'absolute',
        right:'10px',
        top:'50%',
        transform: 'translateY(-50%)',
        fontSize: '22px',
        fontFamily: 'Arial, sans-serif',
        cursor: 'pointer',
        border: 'none',
        background:' transparent',
        color: 'inherit'
    }
};

const Header = () => {
    return(
        <div style={styles.BarHeader}>
            <h1 style={styles.h1}>
                Supermetrics
                <button role="button" title="Close" style={styles.button}>x</button>
            </h1>
        </div>
    )
};

export default Header;