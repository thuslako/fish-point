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
        submit: ()=>{
            //handle fore submition 
        }
    },
    computed: {
        //handle form 
    }
}
</script>