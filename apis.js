import React from "react";

export const getChannels = async() =>{
    let res = [];
        var requestOptions = {
        method: 'GET',
        redirect: 'follow'
        };

        await fetch("http://mandalATsoftonic.pythonanywhere.com/newstv/channels/", requestOptions)
        .then(response => response.json())
        .then(result => {res=result})
        .catch(error => {console.log('error', error);res=[]});
        return res;
}