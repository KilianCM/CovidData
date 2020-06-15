<template>
    <div class="statistics" v-if="!loading">
        <a-statistic class="spaced" title="Total confirmed cases" :value="confirmed">
            <template #suffix v-if="confirmedEvolution" >
                <div class="red">
                    <a-icon type="arrow-up" v-if="confirmedEvolution.up"/>
                    <a-icon type="arrow-down" v-else/>
                    {{confirmedEvolution.delta}}
                </div>
            </template>
        </a-statistic>
        <a-statistic class="spaced" title="Total deaths" :value="deaths">
            <template #suffix v-if="deathsEvolution" >
                <div class="red">
                    <a-icon type="arrow-up" v-if="deathsEvolution.up"/>
                    <a-icon type="arrow-down" v-else/>
                    {{deathsEvolution.delta}}
                </div>
            </template>
        </a-statistic>
        <a-statistic title="Total recovered" :value="recovered">
            <template #suffix v-if="recoveredEvolution" >
                <div class="green">
                    <a-icon type="arrow-up" v-if="recoveredEvolution.up"/>
                    <a-icon type="arrow-down" v-else/>
                    {{recoveredEvolution.delta}}
                </div>
            </template>
        </a-statistic>
    </div>
</template>

<script>
    export default {
        name: "GlobalStatistics",
        props: {
            confirmed: {
                default: 0,
                type: Number
            },
            deaths: {
                default: 0,
                type: Number
            },
            recovered: {
                default: 0,
                type: Number
            },
            loading: {
                default: false,
                type: Boolean
            },
            confirmedEvolution: {
                type: Object
            },
            deathsEvolution: {
                type: Object
            },
            recoveredEvolution: {
                type: Object
            }
        }
    }
</script>

<style scoped lang="scss">

    .statistics {
        text-align: left;
        display: flex;
        justify-content: space-between;
        max-width: 60%;
        margin-bottom: 30px;

        .spaced {
            margin-right: 30px;
        }
    }

    .red {
        color: $red;
    }

    .green {
        color: $green;
    }

</style>