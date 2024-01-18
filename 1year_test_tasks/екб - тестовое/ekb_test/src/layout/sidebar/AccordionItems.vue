<template>
  <div class="accordion-item">
            <span
                class="accordion-button collapsed"
                data-bs-toggle="collapse"
                :data-bs-target="'#' + targetId"
            >
              <i :class="icon"></i>

              {{ items }}
            </span>

    <div :id="targetId" class="accordion-collapse collapse">
      <div class="accordion-body">
        <span v-for="page in pages">
          {{page.name}}
        </span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  // dirty hack
  computed: {
    targetId(){
      return this.items.replace(" ", "")
    }
  },
  props: {
    items: {
      required: true,
      type: String
    },
    icon: {
      required: true,
      type: String
    },
    pages: {
      required: true,
      type: Array
    }
  }
}
</script>

<style lang="scss" scoped>
.accordion-item {
  border: 0;
  font-size: 1rem;
  cursor: pointer;

  i {
    width: 20px;
    margin-right: 10px;
  }

  .accordion-button {
    border-radius: 15px;
    padding: 10px;
  }

  .accordion-button:not(.collapsed)::after {
    background-image: var(--bs-accordion-btn-icon);
  }

  .accordion-button:focus {
    box-shadow: none;
  }

  .accordion-button:not(.collapsed) {
    background-color: var(--main-color);
    border-radius: 15px;
    color: black;
  }

  .accordion-body {
    padding: 0;
  }

  .accordion-body span {
    display: block;
    padding-top: 10px;
    padding-bottom: 10px;
    padding-left: 40px;
  }
}
</style>