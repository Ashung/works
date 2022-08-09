<script>
    export let items = [];
    import { Swiper, SwiperSlide } from 'swiper/svelte';
    import { FreeMode, Scrollbar, Mousewheel } from 'swiper';
    import 'swiper/css';
    import 'swiper/css/free-mode';
    import 'swiper/css/scrollbar';
</script>

<Swiper
    class="vertical-scroller"
    direction={"vertical"}
    slidesPerView={"auto"}
    freeMode={true}
    scrollbar={true}
    mousewheel={true}
    modules={[FreeMode, Scrollbar, Mousewheel]}>
    <SwiperSlide>
        {#each items as item}
        <img class="slide-image" src={item.image} srcset={`${item.image} 2x`} alt="">
        {/each}
    </SwiperSlide>
</Swiper>
