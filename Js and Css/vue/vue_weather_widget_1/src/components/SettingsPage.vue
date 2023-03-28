<template>
    <div class="settings-wrapper">
        <div>
            <draggable
                :list="locations"
                item-key="location"
                @end="changeLocationStorage"
                handle=".handle"
            >
                <template #item="{ element }">
                    <div class="location">
                        <div>
                            <i class="fa-solid fa-bars handle"></i>
                            {{ element }}
                        </div>

                        <i 
                            @click="removeLocation(element)"
                            class="fa-solid fa-trash"
                        >
                        </i>
                    </div>
                </template>
            </draggable>
        </div>

        <div class="add-location-box">
            <input 
                type="text" 
                placeholder="Location Name" 
                v-model="location"
                @keyup.enter="addLocation"
            >

            <button @click="addLocation">Add</button>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import draggable from 'vuedraggable'

export default defineComponent({
    components: {
        draggable
    },
    data(){
        return {
            location: '',
            locations: [] as Array<string>
        }
    },
    created(){
        let locations = localStorage.getItem('locations')

        if (locations){
            this.locations = JSON.parse(locations)
        }
    },
    methods: {
        async addLocation(){
            if (this.location !== ''){
                const queryUrl = `${this.$store.state.url_base}weather?q=${this.location}&units=metric&APPID=${this.$store.state.api_key}`
                const res = await fetch(queryUrl)
                
                if (res.ok){
                    const responseData = await res.json().then(res => res.name)

                    this.locations.push(responseData)
                    this.changeLocationStorage()
                    this.location = ''

                } else {
                    console.error('settings page - fetching')
                    this.location = 'something went wrong'
                } 
            }
        },
        changeLocationStorage(){
            localStorage.setItem('locations', JSON.stringify(this.locations))
        },
        removeLocation(location: any){
            this.locations = this.locations.filter(e => e !== location)
            this.changeLocationStorage()
        }
    }
})
</script>

<style lang="scss" scoped>

.settings-wrapper {
    display: flex;
    align-items: center;
    flex-direction: column;

    .handle:hover {
        cursor: grab;
    }

    .add-location-box,
    .location {
        font-size: 0.9rem;
        display: flex;
        justify-content: space-between;
        gap: 10px;
    }

    .location {
        background-color: whitesmoke;
        padding: 10px;
        margin-bottom: 5px;
    }

    .add-location-box {
        margin-top: 5px;

        input, button {
            padding: 5px;
        }

        input {
            width: 100%;
        }
    }
}

</style>