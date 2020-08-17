// display current information 
<template>
    <div class="w-full">
        <div class="block w-full bg-gray-100 p-4 text-gray-500 p-2 text-left">
           <h1 class="text-black bold text-4xl">Fish Point</h1>
           <p>For all your attempts at catching one</p> 
        </div>
        <div class="dash lg:w-1/2 overflow-hidden">
            <Map/>
        </div>
    </div>
</template>
<script>
import Map from './map.vue';
export default {
    name: 'Dashboard',
    components: {
        Map,
    },
}
</script>