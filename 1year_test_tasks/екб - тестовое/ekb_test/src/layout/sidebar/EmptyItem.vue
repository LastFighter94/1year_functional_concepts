<template>
  <div class="accordion-item">
    <div :class="activeItem ? 'empty-item active' : 'empty-item'">
      <div>
        <i :class="icon"></i><span>{{item.name}}</span>
      </div>
      <span v-if="msgCounter" class="msg-counter">{{msgCounter}}</span>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    item: {
      required: true,
      type: Object
    },
    activeItem: {
      type: Boolean
    },
    msgCounter: {
      type: String
    },
    icon: {
      required: true,
      type: String
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

  .empty-item, .message {
    padding: 10px;
    display: flex;
    justify-content: space-between;
  }

  .empty-item {
    .msg-counter {
      color: red;
    }
  }
}
</style>