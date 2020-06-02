<template>
  <div class="vLoader">
    <div />
    <div />
    <div />
    <div />
    <div />
    <div />
    <div />
    <div />
  </div>
</template>

<style>
.vLoader {
  display: inline-flex;
  width: auto;
  height: auto;
  margin: 0 auto;
}
.vLoader div {
  animation: vLoader 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
  transform-origin: 40px 40px;
}
.vLoader div:after {
  content: " ";
  display: block;
  position: absolute;
  width: 7px;
  height: 7px;
  border-radius: 50%;
  background: #ff5151;
  margin: -4px 0 0 -4px;
}
.vLoader div:nth-child(1) {
  animation-delay: -0.036s;
}
.vLoader div:nth-child(1):after {
  top: 63px;
  left: 63px;
}
.vLoader div:nth-child(2) {
  animation-delay: -0.072s;
}
.vLoader div:nth-child(2):after {
  top: 68px;
  left: 56px;
}
.vLoader div:nth-child(3) {
  animation-delay: -0.108s;
}
.vLoader div:nth-child(3):after {
  top: 71px;
  left: 48px;
}
.vLoader div:nth-child(4) {
  animation-delay: -0.144s;
}
.vLoader div:nth-child(4):after {
  top: 72px;
  left: 40px;
}
.vLoader div:nth-child(5) {
  animation-delay: -0.18s;
}
.vLoader div:nth-child(5):after {
  top: 71px;
  left: 32px;
}
.vLoader div:nth-child(6) {
  animation-delay: -0.216s;
}
.vLoader div:nth-child(6):after {
  top: 68px;
  left: 24px;
}
.vLoader div:nth-child(7) {
  animation-delay: -0.252s;
}
.vLoader div:nth-child(7):after {
  top: 63px;
  left: 17px;
}
.vLoader div:nth-child(8) {
  animation-delay: -0.288s;
}
.vLoader div:nth-child(8):after {
  top: 56px;
  left: 12px;
}
@keyframes vLoader {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>
