<template>
    <div>
        <h1>KALKULATOR TELES</h1>
        <form>
            <label>Ime seta:</label>
            <input type="text" name="set" readonly v-model="set">
            <label>Izberite telo:</label>
            <input type="text"  name="telo" readonly v-model="telo1">
            <!-- PRIZMA -->
            <div v-if="telo1 === 'prizma'">
                <label>Vnesite dolžino stranice:</label>
                <input type="number" required name="stranica" v-model="stranica" readonly>
                
                <label>Vnesite dolžino višine:</label>
                <input type="number" required name="visina" v-model="visina" readonly>

                <label>Obseg:</label>

                <input type="number" name="obseg" readonly v-model="obseg">
                <label>Ploscina osnovne ploskve:</label>

                <input type="number" name="ploscina" readonly v-model="ploscina">
                <label>Volumen:</label>

                <input type="number" name="volumen" readonly v-model="volumen">
            </div>
            <!-- KROGLA -->
            <div v-if="telo1 === 'krogla'">
                <label>Vnesite dolžino polmera:</label>
                <input type="number" required name="polmer" v-model="polmer" readonly>

                <label>Obseg:</label>

                <input type="number" name="obseg" readonly v-model="obseg" >
                <label>Ploscina osnovne ploskve:</label>

                <input type="number" name="ploscina" readonly v-model="ploscina">
                <label>Volumen:</label>

                <input type="number" name="volumen" readonly v-model="volumen">
            </div>

            <!-- KVADER -->
            <div v-if="telo1 === 'kvader'">
                <label>Vnesite dolžino stranice a:</label>
                <input type="number" required name="stranicaA" v-model="stranicaA" readonly>
                
                <label>Vnesite dolžino stranice b:</label>
                <input type="number" required name="stranicaB" v-model="stranicaB" readonly>

                <label>Vnesite višino:</label>
                <input type="number" required name="visina" v-model="visina" readonly>

                <label>Obseg:</label>

                <input type="number" name="obseg" readonly v-model="obseg">
                <label>Ploscina osnovne ploskve:</label>

                <input type="number" name="ploscina" readonly v-model="ploscina">
                <label>Volumen:</label>

                <input type="number" name="volumen" readonly v-model="volumen">
            </div>
        </form>
    </div>
</template>

<script>
import axios from 'axios';

export default {

    data(){
        return {
            set:'',
            telo1: '',
            polmer: '',
            stranica: '',
            stranicaA: '',
            stranicaB:'',
            visina: '',
            obseg:'',
            ploscina:'',
            volumen: ''
        }
    },
    methods:{

    },
    async mounted(){
        const id = window.location.pathname.split('/')[2];
        const body = await axios.get('http://localhost:4000/getBody/'+id);
        this.telo = body.data;

        this.set = this.telo.set
        this.telo1 = this.telo.telo;
        this.visina = this.telo.visina;
        this.stranica = this.telo.stranica;
        this.stranicaA = this.telo.stranicaA;
        this.stranicaB = this.telo.stranicaB;
        this.polmer = this.telo.polmer;
        this.obseg = this.telo.obseg;
        this.ploscina = this.telo.ploscina;
        this.volumen = this.telo.volumen;

    },
}
</script>

<style>
    form{
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
</style>