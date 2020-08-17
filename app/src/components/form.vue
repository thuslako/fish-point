// submit enter for recent fishing trip
<template>
    <div class="log-form">
        <form action="post">
            <label for="catch">
                <span>Catch?</span>            
                <select name="catch" id="catch">
                    <option value="yes">Yes</option>
                    <option value="no">Sweet nothing</option>
                </select>
            </label>
            <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded" type="submit">Add</button>
        </form>
    </div>
</template>
<script>
export default {
    name: 'form',
    data: {
        catch: false
    },
    methods: {
        submit(){
            //handle fore submition 
        }
    },
    computed: {
        //handle form 
    }
}
</script>