<template>
	<div class="about">
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
		list: [],
		showList: false,
		showLoding: true
	}),
	created() {
		getList({ type: 'Mobile' })
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
		jump() {
			console.log('jump');
		}
	}
};
</script>
