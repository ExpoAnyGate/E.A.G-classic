const multiplier = {
    translate: .1,
    rotate: .01
}

new Swiper('.spotlight-swiper', {
    slidesPerView: 'auto',
    spaceBetween: 90,
    centeredSlides: true,
    loop: true,
    grabCursor: true,
    allowTouchMove: false,
    speed: 5000,
    autoplay: {
        delay: 0,   // 不延遲，馬上滾動
        //避免點擊造成跑馬燈失效，視情況增加
        disableOnInteraction: false,
    },
})

function calculateWheel() {
    const slides = document.querySelectorAll('.single')
    slides.forEach((slide, i) => {
        const rect = slide.getBoundingClientRect()
        const r = window.innerWidth * .5 - (rect.x + rect.width * .5)
        let ty = Math.abs(r) * multiplier.translate - rect.width * multiplier.translate

        if (ty < 0) {
            ty = 0
        }
        const transformOrigin = r < 0 ? 'left top' : 'right top'
        slide.style.transform = `translate(0, ${ty}px) rotate(${-r * multiplier.rotate}deg)`
        slide.style.transformOrigin = transformOrigin
    })
}

function raf() {
    requestAnimationFrame(raf)
    calculateWheel()
}

raf();