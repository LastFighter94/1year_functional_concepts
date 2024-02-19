<template>
      <div 
          class="app-wrapper"
          :class="data.main.temp > 16 ? 'app-wrapper-warm' : 'app-wrapper-cold'"
          v-if="data !== null && data !== undefined && data.cod === 200"
      >
          <div class="info-box">
              <h1>{{ data.name}}</h1>
              {{ data.sys.country }}

              <div class="info-box-coords">
                <p>X: {{ data.coord.lon }}</p>
                <p>Y: {{ data.coord.lat }}</p>
              </div>

              <div class="info-box-temp">
                <h1>Feels like {{ data.main.temp }} C</h1>
              </div>

              <div class="info-box-weather">
                <div>
                    <h1>{{ data.weather[0].main}}</h1>
                    <p>{{ data.weather[0].description}}</p>  
                </div>

                <div>
                    <h1>Pressure</h1>
                    <p>{{ data.main.pressure}}</p>
                </div>
                
                <div>
                    <h1>Humidity</h1>
                    <p>{{ data.main.humidity}}</p>
                </div>
              </div>
          </div>
      </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
    props: {
        location: {
            type: String,
            required: true
        }
    },
    data(){
      return {
        data: null as any
      }
    },
    mounted(){
      this.getWeatherInfo(this.location)
    },
    methods: {
      async getWeatherInfo(location:string):Promise<any> {
        const weatherCardQuery = `${this.$store.state.url_base}weather?q=${location}&units=metric&APPID=${this.$store.state.api_key}`
        const res = await fetch(weatherCardQuery)

        if (res.ok){
          this.data = await res.json().catch(e => console.error('weather card - json()'))
        } else {
          console.error('weather card - fetching')
        }
      }
    },
})
</script>

<style lang="scss">

.app-wrapper {
  border-radius: 15px;
  background-size: cover;
  background-position: center;
  transition: 0.4s;
  margin-bottom: 20px;
  text-align: center;

  &-cold {
  background-image: url('@/assets/images/cold-bg.jpg');
  }

  &-warm {
    background-image: url('@/assets/images/warm-bg.jpg');
  }

  .info-box {
    
    h1 {
      font-size: 1.5rem;
    }

    &-coords {
      p {
        font-style: italic;
      }
    }

    &-temp {
      h1 {
        font-size: 1.2rem;
      }
    }

    &-weather {
      display: flex;
      gap: 10px;
      justify-content: center;

      div {
        background-color:rgba(255, 255, 255, 0.85);
        box-shadow: 3px 6px rgba(0, 0, 0, 0.25);
        border-radius: 10px;
        font-size: 0.8rem;
        padding: 3px;

        h1 {
          font-size: 1rem;
        }
      }
    }
  }
}
</style>