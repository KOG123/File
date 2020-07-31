<template>
	<div class="chatRoom">
		<div class="cen">
			<div class="messageBox" ref="mesBox">
				<div
					v-for="(item, index) in mes"
					:key="index"
					:class="item.name === slfe ? 'fright' : ''"
				>
					<!-- <p :style="{color:item.color,background:item.bgColor}">{{item.name}}:{{item.data}}</p> -->
					<a-comment>
						<a slot="author" style="color:#fff">{{ item.name }}</a>
						<a-avatar slot="avatar" :src="item.url" :alt="item.name" />
						<p
							slot="content"
							class="msg"
							:style="{ color: item.color, background: item.bgColor }"
						>
							{{ item.data }}
						</p>
						<a-tooltip slot="datetime">
							<span>{{ item.time }}</span>
						</a-tooltip>
					</a-comment>
				</div>
			</div>
			<div class="inputBox">
				<!-- <v-edit v-if="isShow" v-model="inp" ref="edit" /> -->
				<textarea v-model="inp" @keydown="keyDown($event)" @keyup="keyUp($event)" />
			</div>
		</div>
	</div>
</template>

<script>
import initChatRoom from '@/mixin/initChatRoom.js';
export default {
	mixins: [initChatRoom],
	provide() {
		return {
			reload: this.pageReload
		};
	},
	data: () => ({
		websock: null,
		slfe: '', //保存当前窗口用户名
		mes: [], //消息集合
		fromNow: {}, //消息发出距离现在时间
		// isShow: true,	//清空组件用
		inp: '', //输入的内容
		shiftDown: false //shift键是否按下
	}),
	mounted() {
		this.init();
	},
	watch: {
		inp() {
			if (this.inp === '\n') {
				this.inp = '';
			}
		}
	},
	methods: {
		init() {
			this.initSock();
		},
		keyDown(e) {
			console.log(e);
			if (e.key === 'Shift') {
				this.shiftDown = true;
			}
			if (e.key === 'Enter') {
				if (this.shiftDown) {
					return;
				}
				if (!this.inp) {
					return;
				}
				this.websock.send(this.inp);
				this.inp = '';
			}
		},
		keyUp(e) {
			if (e.key === 'Shift') {
				this.shiftDown = false;
			}
		},
		// pageReload() {
		// 	let reg = /(<\/?.*?>)/gi;
		// 	this.inp = this.inp.replace(reg, '');
		// 	if (!this.inp) {
		// 		return;
		// 	}
		// 	this.websock.send(this.inp);
		// 	this.inp = '';
		// 	this.isShow = false;
		// 	this.$nextTick(() => {
		// 		this.isShow = true;
		// 	});
		// },
		scrollBottom() {
			// this.$refs.mesBox.scrollTop = this.$refs.mesBox.scrollHeight + 93;
		}
	}
};
</script>

<style lang="less">
.chatRoom {
	width: 100%;
	height: 100%;
	background: #000;
	box-sizing: border-box;
	padding: 5% 0;
	.msg {
		box-sizing: border-box;
		padding: 2px;
		width: fit-content;
		width: -webkit-fit-content;
		width: -moz-fit-content;
		border-radius: 5px;
	}
	.cen {
		min-width: 1000px;
		height: 100%;
		width: 70%;
		margin: auto;
		background: #222;
		border-radius: 4px;
		overflow: hidden;
	}
	.messageBox {
		height: calc(100% - 200px);
		box-sizing: border-box;
		padding: 0 10px;
		overflow: auto;
		.fright {
			transform: rotateY(180deg);
			.ant-comment-content-author-name,
			.ant-comment-content-author-time,
			.ant-comment-avatar > span,
			.ant-comment-content-detail > p {
				transform: rotateY(-180deg);
			}
		}
	}
	.inputBox {
		border-top: solid 2px #000;
		width: 100%;
		height: 200px;
		color: #fff;
		outline: none;
		textarea {
			background: transparent;
			resize: none;
			width: 100%;
			height: 200px;
			border: none;
			outline: none;
			padding: 10px 5px;
		}
	}
}
</style>
