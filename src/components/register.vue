<template>
	<div class="register">
		<input type="text" name="nickname" v-model.trim="nickname" @keydown.enter="login(nickname)" />
	</div>
</template>

<script type="text/javascript">
	export default {
		name: 'register',
		data () {
			return {
				nickname: '',
			}
		},
		watch: {
			nickname (val) {

			}
		},
		methods: {
			login (nickname) {
				if (nickname === '') this.nickname = "";
				this.$emit('login', this.nickname);

				
			}
		}
	}
</script>

<style type="text/css" lang="scss">
	.register {
		width: 100;
		height: 100%;
		background: #000;
		position: relative;
		input {
			position: absolute;
			left: 50%;
			top: 50%;
			transform: translate(-50%, -50%);
			border: none;
			outline: none;
			width: 50%;
			height: 0.8rem;
			line-height: 0.8rem;
			border-bottom: 1px solid #fff;
			background: #000;
			text-align: center;
			color: #fff;
			font-size: 0.6rem;
		}
	}
</style>
