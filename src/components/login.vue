<template>
	<div class="wrapper-bg">
		<input type="text" name="nickname" maxlength="10" v-model="nickname" @keydown.enter="login(nickname)" />
	</div>
</template>

<script type="text/javascript">
	export default {
		name: 'login',
		data () {
			return {
				nickname: ''
			}
		},
		methods: {
			login (nickname) {
				var joinTime = new Date().getTime();
				this.$emit('cameIn', {name: nickname, date: joinTime });
				this.nickname = "";
			}
		}
	}
</script>

<style lang="scss" type="text/css">
	.wrapper-bg {
		width: 100%;
		height: 100%;
		background: #000;
		position: relative;
	}
	input[name="nickname"] {
		position: absolute;
		left: 50%;
		top: 50%;
		transform: translate(-50%, -50%);
		display: block;
		width: 60%;
		height: 0.8rem;
		line-height: 0.8rem;
		border: none;
		background: #000;
		border-bottom: 1px solid #fff;
		outline: none;
		font-size: 0.6rem;
		text-align: center;
		color: #fff;
		font-weight: bold;
	}
</style>
