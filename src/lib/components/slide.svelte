<script>
    export let items = [];
    import { Swiper, SwiperSlide } from 'swiper/svelte';
    import { Pagination, Navigation } from 'swiper';
    import 'swiper/css';
    import 'swiper/css/pagination';
    import 'swiper/css/navigation';
</script>

<Swiper
    class="slide"
    pagination={{type: 'fraction'}}
    navigation={true}
    modules={[Pagination, Navigation]}>
    {#each items as item}
    <SwiperSlide>
        <div class="slide-page">
            <img class="slide-image" src={item.image} srcset={`${item.image} 2x`} alt="">
            <p class="slide-text">{item.text}</p>
        </div>
    </SwiperSlide>
    {/each}
</Swiper>
