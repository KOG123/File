<!-- Created by dreamsqin on 2019/9/5 -->
<template>
	<div
		class="div-editable"
		contenteditable="true"
		v-html="innerText"
		@input="changeText"
		@focus="isChange = false"
		@blur="blurFunc"
		@keydown.enter="sendMsg"
		ref="edit"
	></div>
</template>

<script>
export default {
	name: 'DivEditable',
	inject: ['reload'],
	props: {
		value: {
			type: String,
			default: ''
		}
	},
	data() {
		return {
			innerText: this.value,
			isChange: true
		};
	},
	mounted() {
		this.$refs.edit.focus();
	},
	watch: {
		value() {
			if (this.isChange) {
				this.innerText = this.value;
			}
		}
	},
	methods: {
		changeText() {
			this.$emit('input', this.$el.innerHTML);
		},
		blurFunc() {
			this.isChange = true;
			this.$emit('blurFunc');
		},
		sendMsg() {
			this.reload();
		}
	}
};
</script>

<style lang="less">
.div-editable {
	width: 100%;
	height: 100%;
	overflow-y: auto;
	word-break: break-all;
	outline: none;
	user-select: text;
	white-space: pre-wrap;
	text-align: left;
	&[contenteditable='true'] {
		user-modify: read-write-plaintext-only;
		&:empty:before {
			content: attr(placeholder);
			display: block;
			color: #ccc;
		}
	}
}
</style>
