<script setup lang="ts">
import { ref } from "vue";
import WeddingInviation from "./WeddingInviation.vue";

const audioRef = ref<null | HTMLAudioElement>(null);
const imgRef = ref<null | HTMLImageElement>(null);
let playStatus = ref(false);
const musicImg = ref({
	play: "https://storage.beta.custouch.com/res/8080/music.png",
	pause: "https://storage.beta.custouch.com/res/8082/stopMusic.png",
});
const musicUrl = new URL("../assets/test1.mp3", import.meta.url).href;
const controlMusic = () => {
	if (audioRef.value && imgRef.value) {
		if (playStatus.value) {
			audioRef.value.pause();
			imgRef.value.src = musicImg.value["pause"];
		} else {
			audioRef.value.play();
			imgRef.value.src = musicImg.value["play"];
		}
	}
	playStatus.value = !playStatus.value;
};
</script>

<template>
	<var-app-bar image="@/assets/home.png" @click="controlMusic">
		<template #right>
			<div class="img-box">
				<img
					ref="imgRef"
					:class="{ rotate: playStatus }"
					src="https://storage.beta.custouch.com/res/8082/stopMusic.png"
					alt="music"
					@click="controlMusic"
				/>
				<audio ref="audioRef" :src="musicUrl" loop></audio>
			</div>
		</template>

		<template #content>
			<div class="wedding-home-content">
				<div class="wedding-home-content-inner">
					<var-row :gutter="20">
						<var-col :span="8" :xs="24" justify="center">
							<var-avatar :size="180" bordered src="@/assets/avatar.jpg" />
						</var-col>
						<var-col direction="column" :span="16" :xs="24">
							<div class="wedding-home-title">
								<div class="text">
									<span class="word">婚</span>
									<span class="word">礼</span>
									<span class="word">邀</span>
									<span class="word">请</span>
									<span class="word">函</span>
								</div>
							</div>
							<div class="wedding-home-purport">{{ $t("purport") }}</div>
							<div class="wedding-home-inviation">
								<wedding-inviation />
							</div>
							<wedding-profile />
						</var-col>
					</var-row>
				</div>
			</div>
		</template>
	</var-app-bar>
</template>

<style lang="less" scoped>
.wedding-profile-icon {
	width: 22px;
	margin-right: 6px;
}
.wedding-home {
	&-content {
		display: flex;
		justify-content: center;
	}

	&-content-inner {
		width: 760px;
		padding: 30px 20px 70px;
		:deep(.var-avatar--bordered) {
			border-color: rgb(237, 204, 161);
		}
	}
	&-title {
		font-size: 20px;
		margin-top: 26px;
		padding: 0 3px;
		text-align: center;
		color: rgba(116, 26, 21, 1);
		display: flex;
		align-items: center;
		justify-content: center;
		.text {
			border-radius: 6px;
			width: 66%;
			background-color: rgb(237, 204, 161);
			display: flex;
			align-items: center;
			justify-content: center;
			.word {
				padding: 4px;
				font-size: 16px;
			}
		}
	}

	&-purport {
		font-size: 36px;
		margin-top: 22px;
		margin-bottom: 66px;
		text-align: center;
		color: #edcca1;
		font-family: SimSun, "sans-serif";
		letter-spacing: 10px;
	}
	&-inviation {
		font-size: 14px;
		color: #edcca1;
		letter-spacing: 10px;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		margin-bottom: 10px;
		height: 110px;
		.text {
			line-height: 22px;
			padding: 0;
		}
	}
}

// 元素持续旋转关键帧
@keyframes rotation {
	from {
		transform: rotate(0deg);
	}
	to {
		transform: rotate(360deg);
	}
}
.img-box {
	width: 27px;
	height: 27px;
	img {
		width: 100%;
		height: 100%;
	}
}
// 旋转类
.rotate {
	animation: rotation 3s linear infinite;
}
</style>
