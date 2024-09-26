<script>
import axios from 'axios';

export default {
    data() {
        return {
            projects: [],
            currentPage: 1,
            totalPages: 1,
            searchQuery: '', // Variabile per la ricerca
            filteredProjects: [] // Progetti filtrati
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
                    this.filteredProjects = this.projects; // Inizializza i progetti filtrati
                    this.currentPage = page;
                    console.log(response.data.results);
                })
                .catch((error) => {
                    this.$router.push({ name: "404" });
                    console.log(error);
                });
        },
        filterProjects() {
            const query = this.searchQuery.toLowerCase();
            this.filteredProjects = this.projects.filter(project => 
                project.name.toLowerCase().includes(query)
            );
        }
    },
    created() {
        this.getProject();
    }
}
</script>


<template>
        <!-- Search Bar -->
            <div class="col d-flex justify-content-center">
                <input 
                    type="text" 
                    v-model="searchQuery" 
                    class="form-control" 
                    placeholder="Search projects..."
                    @input="filterProjects"
                />
            </div>
        
    <div class="container">
        <div class="row d-flex justify-content-center flex-wrap">
            <!-- Projects List -->
            <div class="card mb-4" v-for="project in filteredProjects" :key="project.id" style="width: 22rem; height: auto;">
                <div class="card-body text-center">
                    <h5 class="card-title">{{ project.id }}: {{ project.name }}</h5>
                    <p class="card-text">{{ project.type.name }}</p>
                    <p class="card-text">
                        <a :href="project.url_repo" target="_blank">
                            {{ project.url_repo }}
                        </a>
                    </p>
                </div>
            </div>
        </div>

        <!-- Show More Button -->
        <div class="row mb-5">
            <div class="col text-center">
                <button class="btn btn-outline-success btn-lg" @click.prevent="getProject(currentPage + 1)">
                    Show more
                </button>
            </div>
        </div>
    </div>
</template>



<style lang="scss" scoped>
/* Container */
.container {
    margin-top: 4rem;
    padding-bottom: 2rem;
    display: flex;
    flex-direction: column; /* Aggiungi per garantire che i contenuti siano allineati verticalmente */
    align-items: center; /* Centra orizzontalmente il contenuto */
}

/* Search Bar */
input.form-control {
    width: 300px; /* Puoi modificare la larghezza secondo necessità */
    border-radius: 5px;
    border: 1px solid #ced4da;
}

/* Card Styles */
.card {
    border: none;
    border-radius: 15px;
    overflow: hidden;
    transition: all 0.3s ease-in-out;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

/* Card Hover Effect */
.card:hover {
    transform: translateY(-10px);
    box-shadow: 0 8px 15px rgba(0, 0, 0, 0.3);
}

/* Card Body */
.card-body {
    padding: 1.5rem;
    background-color: #f8f9fa;
}

/* Title */
.card-title {
    font-size: 1.5rem;
    font-weight: 600;
    color: #333;
    margin-bottom: 0.75rem;
}

/* Text */
.card-text {
    font-size: 1rem;
    color: #666;
}

.card-text a {
    color: #007bff;
    text-decoration: none;
    font-weight: 500;
}

.card-text a:hover {
    text-decoration: underline;
}

/* Show more button */
.btn-outline-success {
    border: 2px solid #007bff;
    color: #007bff;
    padding: 0.75rem 2rem;
    transition: background-color 0.3s ease-in-out, color 0.3s ease-in-out;
    margin-top: 20px; /* Spazio sopra il pulsante per distanziare dalla lista */
}

.btn-outline-success:hover {
    background-color: #007bff;
    color: #fff;
}
</style>
