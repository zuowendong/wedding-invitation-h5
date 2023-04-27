<template>
	<div ref="textRef1" class="text word">{{ showText1 }}</div>
	<div ref="textRef2" class="text">{{ showText2 }}</div>
	<div ref="textRef3" class="text">{{ showText3 }}</div>
	<div ref="textRef4" class="text">{{ showText4 }}</div>
	<div ref="textRef5" class="text">{{ showText5 }}</div>
</template>

<script setup lang="ts">
import { ref } from "vue";

const time = 420;

let text1 = ref("收到这封邀请函的你");
let showText1 = ref("");
let timer1 = ref();
function writing(idx: number) {
	const num = text1.value.split("");
	if (idx < num.length) {
		showText1.value += num[idx];
		timer1.value = setTimeout(writing, time, ++idx);
	} else {
		clearTimeout(timer1.value);
		removeClassWord();
		writing2(0);
	}
}

let text2 = ref("是我们生命中重要的部分");
let showText2 = ref("");
let timer2 = ref();
function writing2(idx: number) {
	const num = text2.value.split("");
	if (idx < num.length) {
		addClassWord2();
		showText2.value += num[idx];
		timer2.value = setTimeout(writing2, time, ++idx);
	} else {
		clearTimeout(timer2.value);
		removeClassWord2();
		writing3(0);
	}
}

let text3 = ref("/");
let showText3 = ref("");
let timer3 = ref();
function writing3(idx: number) {
	const num = text3.value.split("");
	if (idx < num.length) {
		showText3.value += num[idx];
		timer3.value = setTimeout(writing3, time, ++idx);
	} else {
		clearTimeout(timer3.value);
		removeClassWord3();
		writing4(0);
	}
}

let text4 = ref("这样特殊的一天");
let showText4 = ref("");
let timer4 = ref();
function writing4(idx: number) {
	const num = text4.value.split("");
	if (idx < num.length) {
		addClassWord4();
		showText4.value += num[idx];
		timer4.value = setTimeout(writing4, time, ++idx);
	} else {
		clearTimeout(timer4.value);
		removeClassWord4();
		writing5(0);
	}
}

let text5 = ref("希望有你的见证");
let showText5 = ref("");
let timer5 = ref();
function writing5(idx: number) {
	const num = text5.value.split("");
	if (idx < num.length) {
		addClassWord5();
		showText5.value += num[idx];
		timer5.value = setTimeout(writing5, time, ++idx);
	} else {
		clearTimeout(timer5.value);
		removeClassWord5();
	}
}

let textRef1 = ref();
function removeClassWord() {
	textRef1.value.className = "text";
}
let textRef2 = ref();
function removeClassWord2() {
	textRef2.value.className = "text";
}
function addClassWord2() {
	textRef2.value.className = "text word";
}
let textRef3 = ref();
function removeClassWord3() {
	textRef3.value.className = "text";
}
let textRef4 = ref();
function removeClassWord4() {
	textRef4.value.className = "text";
}
function addClassWord4() {
	textRef4.value.className = "text word";
}
let textRef5 = ref();
function removeClassWord5() {
	textRef5.value.className = "text";
}
function addClassWord5() {
	textRef5.value.className = "text word";
}

writing(0);
</script>

<style scoped lang="less">
.text {
	line-height: 22px;
	padding: 0;
}

.word {
	&::after {
		content: "|";
		animation: blink 1s infinite;
	}
}

@keyframes blink {
	from {
		opacity: 0;
	}
	to {
		opacity: 1;
	}
}
</style>
