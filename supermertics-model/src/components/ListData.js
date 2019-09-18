import React, { useState }/*, { Component } */from 'react';
import styled from 'styled-components';

const StyleUl = styled.ul`
    overflow-y: auto;
    height: calc(100% - 208px);
`;

const Li = styled.li`
    .label-box{
        background: #F5F5F5;
        padding:7px 20px;
        border:1px solid #ccc;
        margin:2px 1px;
        position: relative;

        &.arrow:before{
            border-left:4px solid #3c4043;
            border-top:4px solid transparent;
            border-bottom: 4px solid transparent;
            position: absolute;
            content:'';top:50%;
            left:10px;
            transform:rotate(0deg)  translateY(-50%)
            }
        &:hover{
            border:1px solid #000;
         }
         &.label-open:before{
            transform: rotate(90deg) translate(0px,-48%);
            left:5px;top:45%;
         }
    }
    h2{
        font-size:16px;
        font-weight: normal;
        position: relative;
        span{
            font-size:10px;
            position: absolute;
            top:4px;
            margin-left: 4px;
        }
    }
    .sub-list-cont{
        margin: 12px 8px;
    }
`;

const ListData = (props) => {
    const [setActive, setActiveState] = useState("");



    function listEventHandler() {
        setActiveState(setActive === "" ? "active" : "");
        // console.log('hi');
        // console.log(this.nextSibling);

    }

    // render() {

        return (
            <StyleUl styled-components='true'>
                <Li>
                    <div className={`label-box arrow ${setActive}`} onClick={listEventHandler}>
                        <h2>Data source <span className="source-label">Facebook ads </span></h2>
                    </div>
                    <div className="sub-list-cont" >
                        <div className="label-box">
                            <h2>Adform</h2>
                        </div>
                        <div className="label-box">
                            <h2>AdRoll</h2>
                        </div>
                        <div className="label-box">
                            <h2>Adform</h2>
                        </div>
                    </div>
                </Li>
                <Li>
                    <div className={`label-box arrow ${setActive}`}  onClick={listEventHandler}>
                        <h2>Data source <span className="source-label">Facebook ads </span></h2>
                    </div>
                    <div className="sub-list-cont">
                        <div className="label-box">
                            <h2>Adform</h2>
                        </div>
                        <div className="label-box">
                            <h2>AdRoll</h2>
                        </div>
                        <div className="label-box">
                            <h2>Adform</h2>
                        </div>
                    </div>
                </Li>
                <Li>
                    <div className={`label-box arrow ${setActive}`}  onClick={listEventHandler}>
                        <h2>Data source <span className="source-label">Facebook ads </span></h2>
                    </div>
                    <div className="sub-list-cont">
                        <div className="label-box">
                            <h2>Adform</h2>
                        </div>
                        <div className="label-box">
                            <h2>AdRoll</h2>
                        </div>
                        <div className="label-box">
                            <h2>Adform</h2>
                        </div>
                    </div>
                </Li>
                <Li>
                    <div className={`label-box arrow ${setActive}`}  onClick={listEventHandler}>
                        <h2>Data source <span className="source-label">Facebook ads </span></h2>
                    </div>
                    <div className="sub-list-cont">
                        <div className="label-box">
                            <h2>Adform</h2>
                        </div>
                        <div className="label-box">
                            <h2>AdRoll</h2>
                        </div>
                        <div className="label-box">
                            <h2>Adform</h2>
                        </div>
                    </div>
                </Li>
                <Li>
                    <div className={`label-box arrow ${setActive}`}  onClick={listEventHandler}>
                        <h2>Data source <span className="source-label">Facebook ads </span></h2>
                    </div>
                    <div className="sub-list-cont">
                        <div className="label-box">
                            <h2>Adform</h2>
                        </div>
                        <div className="label-box">
                            <h2>AdRoll</h2>
                        </div>
                        <div className="label-box">
                            <h2>Adform</h2>
                        </div>
                    </div>
                </Li>
            </StyleUl>
        );
    // }
}

export default ListData;
