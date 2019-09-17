import React from 'react';
import styled from 'styled-components';
const Div = styled.div`
        display: flex;
        justify-content: center;
        position: sticky;
        top: 0;
        padding: 5px 0;
        background: #fff;
`;

const Select = styled.select`
        background: #3079ed;
        color: #fff;
        height: 30px;
        fontSize: 18px;
`;

const Button = styled.button`
        background: #eee;
        border:1px solid #ccc;
        width:45px;
        height:30px;
        margin-left:10px;
        border-radius: 3px;
        padding: 4px 6px;
        position: relative;
        cursor: pointer;
        &:before {
            content: "";
            position: absolute;
            right:2px;
            top:50%;
            border-top:3px solid #3c4043;
            border-right:3px solid transparent;
            border-left:3px solid transparent;
            transform: translateY(-50%);
           }
`;

const Span = styled.span`
    display: block;
    width:21px;
    border-bottom:3px solid #3c4043;
    height:15px;position: relative;
    &:before,
    &:after{
        position: absolute;
        content: "";
        width:100%;
        height:100%;
        left:0;
    }
    &:before{
        top:0px;
        height:3px;
        background: #3c4043;
        }
    &:after{
        top:50%;
        height:3px;
        background:#3c4043;
    }
`;

const TopFilter = (props) => {
    return(
        <Div styled-components='true'>
            <Select name="" id="" styled-components='true'>
                <option value="table" selected={props.table}>Table</option>
                <option value="function">Function</option>
                <option value="function (+params)">Function (+params)</option>
                <option value="bar chart">Bar Chart</option>
            </Select>
            <Button id="refresh-query" styled-components='true'>
                <Span styled-components='true'></Span>
            </Button>
        </Div>
    );
}

export default TopFilter;