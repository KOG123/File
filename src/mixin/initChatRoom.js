module.exports = {
    methods: {
        initSock() {
            this.websock = new WebSocket('ws://localhost:23334');
            console.log('Connection open ...');
            this.websock.onmessage = this.websocketonmessage;
            this.websock.onopen = this.websocketonopen;
            this.websock.onerror = this.websocketonerror;
            this.websock.onclose = this.websocketclose;
            window.console.log(this.websock);
        },
        websocketonmessage(msg) {
            let data = JSON.parse(msg.data),
                time = this.$moment().format('YYYY-MM-DD HH:mm:ss');
            if (data.type === 0) {
                this.slfe = data.slefName;
                return;
            }
            let url = 'http://47.94.142.206/' + data.url;
            this.mes.push({
                data: data.data,
                name: data.name,
                color: data.color === 1 ? '#000' : '#fff',
                bgColor: data.color === 0 ? '#000' : '#fff',
                time,
                url
            });
            this.fromNow[time] = this.$moment(time).fromNow();
            this.$nextTick(() => {
                this.scrollBottom();
            })
            console.log(this.fromNow[time]);
        },
        websocketonopen() {
            this.websocketsend('大家好!');
            console.log('open');
        },
        websocketsend(msg) {
            this.websock.send(msg);
        },
        websocketonerror() {
            this.$message.error('Connection error!');
        },
        websocketclose() {
            this.$message.warning('Connection close!');
        }
    }
}