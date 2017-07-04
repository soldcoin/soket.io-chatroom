<template>
	<div id="inBox">
		<div>
			<div class="message">
				<div class="info">
					<img src="../assets/logo.png" />
				</div>
				<p v-bind="showReceiveMsg()" class="item">{{ receiveMsg }}</p>
			</div>
<!-- 			<div class="message">
				<div class="info">
					<img src="../assets/logo.png" />
				</div>
				<p class="item">站在能分割世界的桥，</p>
			</div>
			<div class="message msg-mine clearfix">
				<div class="info">
					<img src="../assets/logo.png" />
				</div>
				<p class="item">孤独的海怪</p>
			</div> -->
		</div>
	</div>
</template>

<script>

	// var socket = io();

	export default {
		name: 'inMesg',
		data () {
			return {
				receiveMsg: ''
			}
		},
		methods: {
			showReceiveMsg: function (args) {
				var _this = this;
				socket.on('chat message', function (msg) {
					_this.receiveMsg = msg;
				});
			}
		}
	}
</script>

<style lang="scss" type="text/css">
	#inBox {
		.message {
			display: flex;
			width: 100%;
			padding: 0.2rem;
			.info {
				width: 0.56rem;
				height: 100%;
				margin: 0 0.2rem;
				min-height: 0.56rem;
				// background: #ff5a00;
				position: relative;
				img {
					display: block;
					border: none;
					width: 0.56rem;
					height: 0.56rem;
					border: 1px solid #e5e5e5;
					border-radius: 0.28rem;
					position: absolute;
					left: 50%;
					top: 50%;
					transform: translate(-50%, -50%);
				}
			}
			p.item {
				font-size: 0.28rem;
				line-height: 0.36rem;
				min-height: 0.36rem;
				max-width: 70%;
				text-align: left;
				padding: 0.1rem 0.2rem;
				background: #fff;
				border-radius: 0.1rem;
				position: relative;
				&::before {
					content: "";
					display: block;
					width: 0;
					height: 0;
					position: absolute;
					left: -0.2rem;
					top: 0.28rem;
					transform: translateY(-50%);
				    border-right: 0.1rem solid #fff;
				    border-left: 0.1rem solid transparent;
				    border-top: 0.1rem solid transparent;
				    border-bottom: 0.1rem solid transparent;
				}
			}
		}
		.msg-mine {

		}
	}
</style>
