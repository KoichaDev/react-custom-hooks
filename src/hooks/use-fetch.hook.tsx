import React from 'react';
import useAsync from './use-async.hook';

const DEFAULT_OPTIONS = {
	headers: {
		'Content-Type': 'application/json',
	},
};

const useFetch = (url: string, options = {}, dependencies = []) => {
	return useAsync(() => {
        return fetch(url, {...DEFAULT_OPTIONS, ...options}).then(res => {
            if(res.ok) return res.json()

            return res.json().then(json => Promise.reject(json))
        })
    }, dependencies);
};

export default useFetch;
