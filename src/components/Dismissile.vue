<template>
    <div>
        <pie-chart v-bind:labels="labels"
        v-bind:datasets="datasets"
        v-bind:option="option"></pie-chart>
    </div>
</template>


<script>


export default {
    data() {
        return {
            labels: ['Apples', 'bananna', 'Grapes'],
            datasets: [
                {
                    data: [20, 30, 50],
                    backgroundcolor: ['red', 'Yellow', 'Purple']
                }
            ],
            option: {
                title: {
                    display: true,
                    position: 'bottom',
                    text: 'Fruits'
                }
            }
        };
    }
};
</script>

<style>

</style>