<template>
    <div
        @click="changeViewState"
        class="view-changer-icon"
    >
      <i
          :class="showSettings ? 'fa-solid fa-xmark' : 'fa-sharp fa-solid fa-gear'">
      </i>
    </div>

    <div v-if="!showSettings">
      <WeatherCard
          v-for="location in locations"
          :key="location"
          :location="location"
      />
    </div>

    <div v-else>
      <SettingsPage/>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import WeatherCard from '@/components/WeatherCard.vue';
import SettingsPage from '@/components/SettingsPage.vue';

let locationsStorage = localStorage.getItem('locations')

export default defineComponent({
  name: 'App',
  components: {
    WeatherCard,
    SettingsPage
  },
  data(){
    return {
      locations: [] as Array<string>,
      showSettings: false as boolean,
      defaultLocationName: '' as string
    }
  },
  created(){
    if (navigator.geolocation && !locationsStorage){
      navigator.geolocation.getCurrentPosition(this.addDefaultLocation, this.executeOnFailure)
    }

    if (locationsStorage){
      this.locations = JSON.parse(locationsStorage)
    }
  },
  methods: {
    changeViewState():void{
      let locationsStorage = localStorage.getItem('locations')
      // dirty hack before vuex with localStorage solution
      // local storage is not reactive without top string

      this.showSettings = !this.showSettings

      if (locationsStorage){
        this.locations = JSON.parse(locationsStorage)
      }
    },
    async addDefaultLocation(position:any):Promise<any>{
      const lat = position.coords.latitude
      const lon = position.coords.longitude

      const defaultCoordsQuery = `${this.$store.state.url_base_default_location}reverse?lat=${lat}&lon=${lon}&limit=5&appid=${this.$store.state.api_key}`
      const userCoordsData = await fetch(defaultCoordsQuery)

      if (userCoordsData.ok){
        this.defaultLocationName = await userCoordsData.json().then(function(res) {
          if (res.name){
            return res.name
          }
          return res[0].name
        })
            .catch((e) => {
              console.error('app - adding default location - json()', e)
            })

        const defaultLocationQuery = `${this.$store.state.url_base}weather?q=${this.defaultLocationName}&units=metric&APPID=${this.$store.state.api_key}`
        const userLocationData = await fetch(defaultLocationQuery)

        if (userLocationData.ok){
          this.locations.push(this.defaultLocationName)
          localStorage.setItem('locations', JSON.stringify(this.locations))
        } else {
          console.error('app - user coords - no corresponding data for this coords', lat, lon, this.defaultLocationName)
        }

      } else {
        console.error('app - adding default coords - fetching stage')
      }
    },
    executeOnFailure():void{
      console.error('app - no navigator support in browser')
    }
  }
});
</script>

<style lang="scss" scoped>
.view-changer-icon {
  margin: 10px;
}

</style>