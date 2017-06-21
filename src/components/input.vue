<template>
	<div class="input-box">
		<input name="message" id="message" /><button>Send</button>
	</div>
</template>

<script type="text/javascript">
	export default {
		name: 'input-box',
	}
</script>

<style lang="scss" type="text/css">
	.input-box {
		position: fixed;
		left: 0;
		bottom: 0;
		width: 100%;
		height: 0.78rem;
		line-height: 0.78rem;
		padding: 0.05rem;
		border-top: 1px solid #000;
		display: flex;
		input {
			// display: inline-block;
			border: none;
			width: 80%;
			height: 0.68rem;
			line-height: 0.68rem;
			vertical-align: middle;
			outline: none;
			font-size: 0.32rem;
			padding: 0.05rem;
			border-bottom: 1px solid #2EB5E5;
			resize: none;
		}
		button {
			// display: inline-block;
			border: none;
			width: 18%;
			height: 0.68rem;
			margin-left: 0.1rem;
			background: #2EB5E5;
			text-align: center;
			font-size: 0.32rem;
			color: #fff;
			vertical-align: middle;
		}
	}
</style>
