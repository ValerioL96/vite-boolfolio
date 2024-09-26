<script>
export default {
    data() {
        return {
            carouselImagesList: [
                {
                    id: 1,
                    name: 'Boolzapp',
                    image: 'src/assets/img/Screenshot_6-9-2024_17587_.jpeg',
                },
                {
                    id: 2,
                    name: 'Discord',
                    image: 'src/assets/img/Screenshot_6-9-2024_175638_.jpeg',
                },
                {
                    id: 3,
                    name: 'Boolfolio',
                    image: 'src/assets/img/Screenshot_30-8-2024_114828_127.0.0.1.jpeg',
                },
            ],
        };
    },
    methods: {},
};
</script>

<template>
    <div class="jumbotron vh-100 d-flex justify-content-center align-items-center">
        <div id="carousel" class="carousel slide w-100 h-100" data-bs-ride="carousel" data-bs-interval="3000">
            <div class="carousel-inner h-100">
                <div 
                    v-for="(carouselImage, index) in carouselImagesList" 
                    :key="carouselImage.id" 
                    class="carousel-item h-100"
                    :class="{ active: index === 0 }"
                >
                    <div class="text-center h-100">
                        <img 
                            :src="carouselImage.image" 
                            alt="carousel-image" 
                            class="img-fluid w-100 h-100 object-fit-cover"
                        >
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss">
.jumbotron {
    background: linear-gradient(135deg, rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.6));
    position: relative;
    height: 100vh;
    color: white;
}

.carousel-item {
    transition: opacity 0.5s ease-in-out;
}

img {
    object-fit: cover;
    height: 100vh;
    width: 100vw;
}
</style>


