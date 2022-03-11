<template>
    <div>
        <h1>KALKULATOR TELES</h1>
        <form v-on:submit.prevent="submitForm">
            <label>Ime seta:</label>
            <input type="text" name="set" required v-model="form.set">
            <label>Izberite telo:</label>
            <select v-model="form.telo">
                <option value="prizma" name="telo">Prizma</option>
                <option value="krogla" name="telo">Krogla</option>
                <option value="kvader" name="telo">Kvader</option>
            </select>
            <!-- PRIZMA -->
            <div v-if="form.telo === 'prizma'">
                <label>Vnesite dolžino stranice:</label>
                <input type="number" required name="stranica" v-model="this.form.stranica" min="0" max="200" @change="racunanje">
                
                <label>Vnesite dolžino višine:</label>
                <input type="number" required name="visina" v-model="this.form.visina" min="0" max="200" @change="racunanje">

                <label>Obseg:</label>
                <input type="number" name="obseg" readonly v-model="this.form.obseg">
                <label>Ploscina osnovne ploskve:</label>

                <input type="number" name="ploscina" readonly v-model="this.form.ploscina">
                <label>Volumen:</label>

                <input type="number" name="volumen" readonly v-model="this.form.volumen">
            </div>

            <!-- KROGLA -->
            <div v-if="form.telo === 'krogla'">
                <label>Vnesite dolžino polmera:</label>
                <input type="number" required name="polmer" v-model="this.form.polmer" min="0" max="200" @change="racunanje">

                <label>Obseg:</label>

                <input type="number" name="obseg" readonly v-model="this.form.obseg" >
                <label>Ploscina osnovne ploskve:</label>

                <input type="number" name="ploscina" readonly v-model="this.form.ploscina">
                <label>Volumen:</label>

                <input type="number" name="volumen" readonly v-model="this.form.volumen">
            </div>

            <!-- KVADER -->
            <div v-if="form.telo === 'kvader'">
                <label>Vnesite dolžino stranice a:</label>
                <input type="number" required name="stranicaA" v-model="this.form.stranicaA" min="0" max="200" @change="racunanje">
                
                <label>Vnesite dolžino stranice b:</label>
                <input type="number" required name="stranicaB" v-model="this.form.stranicaB" min="0" max="200" @change="racunanje">

                <label>Vnesite višino:</label>
                <input type="number" required name="visina" v-model="this.form.visina" min="0" max="200" @change="racunanje">

                <label>Obseg:</label>

                <input type="number" name="obseg" readonly v-model="this.form.obseg">
                <label>Ploscina osnovne ploskve:</label>

                <input type="number" name="ploscina" readonly v-model="this.form.ploscina">
                <label>Volumen:</label>

                <input type="number" name="volumen" readonly v-model="this.form.volumen">
            </div>

            <br>
            <button type="submit">Potrdi</button>
        </form>
    </div>
</template>

<script>
import axios from 'axios';
import {useRouter} from 'vue-router';


export default {
    data(){
        return{
            form:{
                set: '',
                telo: '',
                stranica: '',
                visina: '',
                stranicaA: '',
                stranicaB:'',
                polmer: '',
                obseg: '',
                ploscina: '',
                volumen: ''
            }
        }
    },
    methods: {
        async submitForm(){
            const routerhaha = useRouter();
            axios.post('http://localhost:4000/newBody', this.form)
                await this.$router.go();
        },
        racunanje(){
            if(this.form.telo == "krogla"){
            this.form.obseg = (2*3.14159265359*this.form.polmer).toFixed(2);
            this.form.ploscina = (3.14159265359*this.form.polmer**2).toFixed(2);
            this.form.volumen = (4/3*3.14159265359*this.form.polmer**3).toFixed(2);
            }
            else if(this.form.telo == "prizma"){
                this.form.obseg = (3*this.form.stranica).toFixed(2);
                this.form.ploscina = ((this.form.stranica**2 * Math.sqrt(3))/4).toFixed(2);
                this.form.volumen = (((this.form.stranica**2 * Math.sqrt(3))/4)*this.form.visina).toFixed(2);
            }
            else if(this.form.telo == "kvader"){
                this.form.obseg = (2*this.form.stranicaA+2*this.form.stranicaB).toFixed(2);
                this.form.ploscina = (this.form.stranicaA*this.form.stranicaB).toFixed(2);
                this.form.volumen = (this.form.stranicaA*this.form.stranicaB*this.form.visina).toFixed(2);
            }
        }
    }
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