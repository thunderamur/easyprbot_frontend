<template>
  <div>
    <form @submit.prevent="submit">
      <div class="form-group">
        Заголовок: <input type="text" v-model="title" class="form-control" />
      </div>
      <div class="form-group">
        Дата начала, больше чем: <input type="text" v-model="start_time__gt" class="form-control" />
      </div>
      <div class="form-group">
        Дата начала, меньше чем: <input type="text" v-model="start_time__lt" class="form-control" />
      </div>
      <button type="submit" class="btn btn-primary">Найти</button>
    </form>
  </div>
</template>

<script>
import { SET_GET_ROW, GET_EVENTS } from '@/store/actions/event.js'

export default {
  name: 'EventFilter',
  data() {
    return {
      title: '',
      start_time__lt: '',
      start_time__gt: ''
    }
  },
  computed: {
    getRow() {
      return `?title__icontains=${this.title}&start_time__gt=${this.start_time__gt}&start_time__lt=${this.start_time__lt}`
    }
  },
  methods: {
    submit() {
      this.$store.dispatch(SET_GET_ROW, this.getRow)
      this.$store.dispatch(GET_EVENTS)
    }
  }
}
</script>
