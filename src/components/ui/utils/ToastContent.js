import React from 'react';
import WarningIcon from '@material-ui/icons/Warning';
import InfoOutlinedIcon from '@material-ui/icons/InfoOutlined';
import CancelOutlinedIcon from '@material-ui/icons/CancelOutlined';
import CheckCircleOutlineIcon from '@material-ui/icons/CheckCircleOutline';

export function WarnToast(props) {
    return (
        <div >
            <div><WarningIcon style={{marginBottom: '0.5rem'}} /></div>
            <div style={{marginBottom: '0.5rem'}}>{props.text}</div>
        </div>
    )
}

export function InfoToast(props) {
    return (
        <div >
            <div><InfoOutlinedIcon style={{marginBottom: '0.5rem'}} /></div>
            <div style={{marginBottom: '0.5rem'}}>{props.text}</div>
        </div>
    )
}

export function ErrorToast(props) {
    return (
        <div >
            <div><CancelOutlinedIcon style={{marginBottom: '0.5rem'}} /></div>
            <div style={{marginBottom: '0.5rem'}}>{props.text}</div>
        </div>
    )
}

export function SuccessToast(props) {
    return (
        <div >
            <div><CheckCircleOutlineIcon style={{marginBottom: '0.5rem'}} /></div>
            <div style={{marginBottom: '0.5rem'}}>{props.text}</div>
        </div>
    )
}