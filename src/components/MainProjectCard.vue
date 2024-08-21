<script >

import axios from 'axios';

export default {
    data() {
        return {
            projects: [],
            currentPage: 1,
            totalPages: 1
        }
    },
    methods: {
        getProject(page = 1) {
            axios.get('http://127.0.0.1:8000/api/project', {
                params: {
                    page: page
                }
            })
                .then((response) => {
                    console.log(response.data.results.data);
                    this.projects.push(...response.data.results.data);
                    this.currentPage = page;
                    console.log(response.data.results);

                })
                .catch(function (error) {
                    console.log(error);
                })
                .finally(function () {
                    // always executed
                });
        }
    },
    created() {
        this.getProject();
    }
}

</script>

<template>
    <div class="container">
        <div class="row d-flex align-items-center flex-column">

            <div class="card mb-3 " style="width: 18rem;" v-for="project in projects">

                <div class="card-body">
                    <h5 class="card-title">{{ project.id }}: {{ project.name }}</h5>
                    <p class="card-text">
                        <a :href="project.url_repo">
                            {{ project.url_repo }}
                        </a>
                    </p>
                </div>

            </div>

        </div>

        <div class="row">
            <h3 class="text-center text-body-secondary opacity-50">
                <a href="#" 
                    class="text-reset" 
                    @click.prevent="getProject(currentPage +1)">
                Show more
                </a>
            </h3>
            
        </div>
    
    </div>

    
</template>

<style>

</style>