import service from './index';

export function getAudioURL(params) {
    return service({
        url: '/txtToAudio',
        methods: 'get',
        params
    });
}

export function getList(params) {
    return service({
        url: '/getList',
        methods: 'get',
        params
    })
}