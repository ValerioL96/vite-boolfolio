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
                .catch((error) => {
                    this.$router.push({name: "404"});
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

            <div class="card mb-3 " style="width: 40rem; height: 20rem;" v-for="project in projects">

                <div class="card-body d-flex flex-column justify-content-center align-items-center ">
                    <h5 class="card-title">{{ project.id }}: {{ project.name }}</h5>
                    <p class="card-text" >
                        {{ project.type.name}}
                    </p>
                    <p class="card-text">
                        <a :href="project.url_repo">
                            {{ project.url_repo }}
                        </a>
                    </p>
                </div>

            </div>

        </div>

        <div class="row mb-3">
            <h3 class="text-center text-success">
                <a href="#" 
                    class="text-reset" 
                    @click.prevent="getProject(currentPage +1)">
                Show more
                </a>
            </h3>
            
        </div>
    
    </div>

    
</template>

<style scoped>
.container {
    margin-top: 2rem;
}

.card {
    transition: transform 0.2s ease, box-shadow 0.2s ease;
}

.card:hover {
    transform: translateY(-5px);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
}

.card-body {
    text-align: center;
}

.card-title {
    font-size: 1.25rem;
    font-weight: bold;
}

.card-text a {
    color: #007bff;
    text-decoration: none;
}

.card-text a:hover {
    text-decoration: underline;
}

.row.mb-3 {
    margin-top: 1rem;
}

.text-success {
    color: #28a745;
}
</style>
