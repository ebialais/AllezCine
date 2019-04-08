<template>
    <form>
        <input id='wordInput' name="search"  list='suggest' autocomplete="off" required :getSuggest="getSuggest"/>
        <button type="submit"><b>Search</b></button>
        <datalist id='suggest'>
            <option value="">
            <option value="">
            <option value="">
            <option value="">
            <option value="">
            <option value="">
            <option value="">
            <option value="">
            <option value="">
            <option value="">
        </datalist>
    </form>
</template>

<script>

import { getSuggest } from '../../utils/getSuggest.js'

export default {

    data(){
        return {
        }
    },

    methods:{
        getSuggest,
    }


}
</script>

<style>

</style>
