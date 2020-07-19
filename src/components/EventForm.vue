<template>
  <form @submit.prevent="submit">
    <div class="form-group">
      Тип:
      <select v-model="eventLocal.type" class="form-control">
        <option v-for="type in types" :key="`type${type.id}`" :value="type.url">
          {{ type.name }}
        </option>
      </select>
    </div>
    <div class="form-group">
      Заголовок:
      <input type="text" v-model="eventLocal.title" class="form-control" />
    </div>
    <div class="form-group">
      Описание:
      <textarea v-model="eventLocal.description" class="form-control"></textarea>
    </div>
    <div class="form-group">
      Время начала:
      <input type="text" v-model="eventLocal.start_time" class="form-control" />
    </div>
    <button type="submit" class="btn btn-success">Сохранить</button>
  </form>
</template>

<script>
import { GET_EVENTS, PATCH_EVENT, CREATE_EVENT } from '@/store/actions/event.js'

export default {
  name: 'EventForm',
  props: {
    event: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      eventLocal: {
        id: 0,
        type: '',
        title: '',
        description: '',
        start_time: ''
      }
    }
  },
  created() {
    this.initEvent()
  },
  computed: {
    types() {
      return this.$store.state.event.types
    }
  },
  methods: {
    initEvent() {
      if (!this.event) return
      this.eventLocal = {
        id: this.event.id,
        type: this.event.type,
        title: this.event.title,
        description: this.event.description,
        start_time: this.event.start_time
      }
    },
    submit() {
      if (this.eventLocal.id) this.$store.dispatch(PATCH_EVENT, this.eventLocal)
      else this.$store.dispatch(CREATE_EVENT, this.eventLocal)
      this.$store.dispatch(GET_EVENTS)
      this.$emit('updateEvent')
    }
  }
}
</script>
