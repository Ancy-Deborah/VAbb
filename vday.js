function getQueryParam(param) {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(param);
  }
  
  function createHeart() {
    const heart = document.createElement("div");
    heart.classList.add("heart");
    heart.style.left = Math.random() * 100 + "vw";
    heart.style.animationDuration = Math.random() * 2 + 3 + "s";
    document.body.appendChild(heart);
    setTimeout(() => heart.remove(), 5000);
  }
  
  function sendLove() {
    const name = getQueryParam("name") || "Someone Special";
    const message = document.getElementById("message");
    message.innerHTML = `Hey Bestie! ❤️
    <br> On this Valentines day I want you to know that you are my diamond now and forever🤗 
    <br> I'm blessed to have you has my bestie😁
    <br> A best friend no one would get😍
    <br> A best friend who prays for me🙏
    <br> A best friend who pushes me close to christ✝️
    <br> Be the same! You will reach great heights in your life for sure 🤩
    <br> God's Got you buddy🤗
    <br> Hope in the next Valentines day you wont be single😜
    <br> I pray that jeje makes it happen this year✝️
    <br> Ancy ka lovz u more🤍  `;
    message.style.opacity = 1;
  
    // Create confetti effect
    for (let i = 0; i < 200; i++) {
      setTimeout(createHeart, i * 100);
    }
  }
  
  // Trigger the confetti and message on page load
  window.onload = sendLove;
  