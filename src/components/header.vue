<template>
	<div class="nav-container">
		<div class="header-left">
			<img src="../assets/logo.png" />
			<!-- <icon name="bell-o" scale="3"></icon> -->
		</div>
		<div class="header-right">
<!-- 			<icon name="bell" scale="2"></icon>
			<icon name="bell-slash-o" scale="2.4"></icon> -->
		</div>
	</div>
</template>

<style lang="scss">
	.nav-container {
		width: 100%;
		height: 0.88rem;
		background-color: #2EB5E5;
		display: flex;
		&>div {
			flex: 1;
		}
		.header-left {
			padding: 0.04rem 0;
			img {
				display: block;
				width: 0.6rem;
				height: 0.6rem;
				border-radius: 0.3rem;
				vertical-align: middle;
			}	
		}
		.header-right {

		}
	}
</style>

<script>
	export default {
		name: 'navHeader',
		methods: {
			dosth1: function (argument) {
				console.log(123)
			}
		}

	}
</script>
