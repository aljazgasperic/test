<template>
    <div>
        <h1>Prikaz teles</h1>
        <label>Prikaži samo izbrana telesa:</label>
        <select v-model="filter" class="filter">
            <option value="">Izberi telo</option>
            <option value="prizma" name="prizma">Prizma</option>
            <option value="krogla" name="krogla">Krogla</option>
            <option value="kvader" name="kvader">Kvader</option>
        </select>

        <div class="seti" v-for="telo in filteredBodies" :key="telo._id">
            <p>Ime seta: {{telo.set}}</p>
            <p>Telo: {{telo.telo}}</p>
            <p>Obseg: {{telo.obseg}}</p>
            <p>Ploščina: {{telo.ploscina}}</p>
            <p>Volumen: {{telo.volumen}}</p>

            <router-link v-bind:to="`/pregled/${telo._id}`" tag="button" class="prikaz">Prikaži podatke</router-link>
            <p></p>
            <button class="izbris" v-on:click="izbrisi(telo._id)">Izbriši set</button>

        </div>
        

    </div>
</template>

<script>
import axios from 'axios';

export default {
    data(){
        return{
            telesa: [],
            filter: ''
        }



    },
    methods: {
        async izbrisi(id){
            const izbris = await axios.delete('http://localhost:4000/deleteBody/'+id)
            this.$router.go();
        }

    },
    async mounted(){
        const telesa = await axios.get('http://localhost:4000/getBodies');
        this.telesa = telesa.data;
    },
    computed:{
        filteredBodies: function(){
            return this.telesa.filter((telo)=>{
                return telo.telo.match(this.filter);
            })
        }
    }
}
</script>

<style>
form, .seti{
    max-width: 420px;
    margin: 30px auto;
    background: white;
    text-align: left;
    padding: 40px;
    border-radius: 10px;
}

label{
    color: #aaa;
    display: inline-block;
    margin: 25px 0 15px;
    font-size: 0.6em;
    text-transform: uppercase;
    letter-spacing: 1px;
    font-weight: bold;
}
input, select, button{
    display: block;
    padding: 10px 6px;
    width: 100%;
    box-sizing: border-box;
    border: none;
    border-bottom: 1px solid #ddd;
    color: #555;
}
.prikaz{
    background-color: #39be3e; 
    border: none;
    width: 100%;
    color: white;
    padding: 10px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 16px;
    margin: 4px 2px;
    cursor: pointer;
    border-radius: 8px;
}
.prikaz:hover{
    color: white;
    background-color: #1c9b20;
}
.izbris{
        background-color: #cf1919; 
    border: none;
    width: 100%;
    color: white;
    padding: 10px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 16px;
    margin: 4px 2px;
    cursor: pointer;
    border-radius: 8px;
}
.izbris:hover{
    color:white;
    background-color: #af1616;
}
.filter{
    width: 15%;
    margin:auto;
    border-radius: 10px;
    text-align: center;
}
</style>