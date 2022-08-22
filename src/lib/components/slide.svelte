<script>
    export let items = [];
    export let slidesPerView = '1';
    export let autoplay = false;
    import { Swiper, SwiperSlide } from 'swiper/svelte';
    import { Pagination, Navigation, FreeMode, Autoplay, Lazy } from 'swiper';
    let className = 'slide';
    let spaceBetween = 0;
    let pagination = {type: 'fraction'};
    let modules = [Pagination, Navigation, FreeMode];
    if (slidesPerView !== '1') {
        className = 'slide slide-multiple';
        spaceBetween = 8;
        pagination.type = 'progressbar';
    }
    if (autoplay === true) {
        className = 'slide slide-auto';
        pagination = {clickable: true};
        modules = [Autoplay, Pagination];
        autoplay = {
            delay: 2000,
            disableOnInteraction: false,
        };
    }
    if (slidesPerView === '1') {
        modules.push(Lazy);
    }
</script>

<Swiper
    class={className}
    slidesPerView={slidesPerView}
    spaceBetween={spaceBetween}
    pagination={pagination}
    navigation={!autoplay ? true : false}
    grabCursor={!autoplay ? true : false}
    loop={autoplay ? true : false}
    autoplay={autoplay}
    lazy={slidesPerView === '1' ? true : false}
    modules={modules}>
    {#each items as item}
    <SwiperSlide>
        <div class="slide-page">
            {#if slidesPerView === '1'}
            <img src="/blank.png" data-src={item.image} class="slide-image swiper-lazy" alt="">
            {:else}
            <img class="slide-image" src={item.image} srcset={`${item.image} 2x`} alt="">
            {/if}
            {#if item.text}<p class="slide-text">{item.text}</p>{/if}
        </div>
    </SwiperSlide>
    {/each}
</Swiper>
