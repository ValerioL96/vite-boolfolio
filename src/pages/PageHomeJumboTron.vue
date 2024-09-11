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
    <div class="container mb-4">
        <!-- Aggiunto data-bs-interval per avere uno scorrimento automatico del carosello -->
    <div id="carousel" class="carousel slide" data-bs-ride="carousel" data-bs-interval="3000">
        <div class="carousel-inner">

            <div 
                v-for="(carouselImage, index) in carouselImagesList" 
                :key="carouselImage.id" 
                class="carousel-item"
                :class="{ active: index === 0 }" 
            >
                <div class="text-center">
                    <h5 class="m-3">{{ carouselImage.name }}</h5>
                    <img :src="carouselImage.image" alt="carousel-image" class="img-fluid w-50 border border-secondary rounded">
                </div>
            </div>
        </div>
    </div>
    </div>
    
</template>

<style lang="scss" >

</style>
