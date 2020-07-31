<template>
	<div class="pc">
		<v-loading v-if="showLoding" />
		<ul v-if="showList">
			<li v-for="item in list" :key="item.id" @click="jump(item)">
				{{ item.name }}
			</li>
		</ul>
		<div class="serverError" v-else>
			SERVER ERROR!
		</div>
	</div>
</template>

<script>
import { getList } from 'api/api.js';
export default {
	data: () => ({
		showList: true,
		showLoding: true,
		list: []
	}),
	created() {
		getList({ type: 'PC' })
			.then((res) => {
				this.showLoding = false;
				console.log(res);
				if (res.data.success === 1) {
					this.list = res.data.data.list;
				} else {
					this.showList = false;
				}
			})
			.catch(() => {
				this.showLoding = false;
				this.showList = false;
			});
	},
	methods: {
		jump(item) {
			console.log(item.url);
			// window.location.href = item.url;
			this.$router.push({ name: item.name });
		}
	}
};
</script>

<style lang="less" scoped>
.pc {
	background: #000;
	width: 100%;
	height: 100%;
	color: #fff;
	position: relative;
	ul {
		position: absolute;
		left: 20px;
		top: 100px;
		border-left: solid 5px #222;
		padding-left: 10px;
		li {
			width: 300px;
			height: 50px;
			background: #222;
			border-radius: 5px;
			padding-left: 20px;
			font-size: 30px;
			margin-bottom: 10px;
			cursor: pointer;
		}
		& > :last-child {
			margin: 0;
		}
	}
	.serverError {
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
		font-size: 30px;
	}
}
</style>
