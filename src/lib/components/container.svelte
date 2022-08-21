<script>
    export let items = [];
    export let grid = false;
    import { Swiper, SwiperSlide } from 'swiper/svelte';
    import { FreeMode, Scrollbar, Mousewheel } from 'swiper';
    import 'swiper/css';
    import 'swiper/css/free-mode';
    import 'swiper/css/scrollbar';
    let className = grid ? 'masonry' : 'vertical-scroller'
</script>

<Swiper
    class={className}
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
