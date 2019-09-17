import React from 'react';

const styles = {
    loaderStyle: {
        height: '50px',
        margin: '10px 0',
        textAlign: 'center'
    }
}

const LoaderImg = () => {
    return(
        <div style={styles.loaderStyle}></div>
    );
}

export default LoaderImg;