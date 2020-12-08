<template>
	<button class="g-button" :class="{[`icon-${iconPosition}`]:true}">
		<svg v-if="icon" class="icon">
			<use :xlink:href="`#i${icon}`"></use>
		</svg>
		<div class="content">
			<slot></slot>
		</div>
	</button>
</template>
<script>
	export default {
		props: ['icon', 'iconPosition', //left,right
		],
	};
</script>
<style lang="scss">
	.g-button {
		font-size: var(--font-size);
		height: var(--button-height);
		padding: 0 1em;
		font: inherit;
		border-radius: var(--border-radius);
		border: 1px solid var(--border-color);
		background: var(--button-bg);
		display: inline-flex; //inline 导致对不齐
		justify-content: center;
		align-items: center;
		vertical-align: middle; // 加上 这个css 就对齐了

		&:hover {
			border-color: var(--border-color-hover);
		}

		&:active {
			background: var(--button-active-bg);
		}

		&:focus {
			outline: none;
		}

		.icon {
			order: 1;
			margin-right: .1em;
		}

		.content {
			order: 2;
		}

		&.icon-right {
			.content {
				order: 1;
			}

			.icon {
				margin-right: 0;
				margin-left: .1em;
				order: 2;
			}
		}
	}
</style>
