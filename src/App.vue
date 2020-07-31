<template>
	<div id="app">
		<router-view></router-view>
	</div>
</template>

<script>
export default {
	data: () => ({}),
	methods: {},
	created() {
		console.log(window.location.pathname);
		let pn = window.location.pathname;
		if (pn === '/homeList/' || pn === '/homeList') {
			if (
				navigator.userAgent.match(
					/(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows\sPhone)/i
				)
			) {
				this.$router.push('Mobile');
			} else {
				this.$router.push('PC');
			}
		}
	}
};
</script>

<style lang="less" scoped>
#app {
	width: 100%;
	height: 100%;
}
</style>
