<template>
  <div>
    <div v-for="event in events" :key="`event_card_${event.id}`" class="card my-3">
      <div class="card-body">
        <h5 class="card-title">
          {{ event.title
          }}<span class="badge badge-secondary ml-3">{{ getEventType(event.type).name }}</span>
        </h5>
        <p class="card-text">{{ event.description }}</p>
        <button type="button" class="btn btn-warning mr-3" @click="editEvent(event)">
          Редактировать
        </button>
        <button type="button" class="btn btn-danger mr-3" @click="removeEvent(event.id)">
          Удалить
        </button>
      </div>
    </div>
    <button type="button" class="btn btn-primary btn-lg" @click="createEvent">Создать</button>
    <b-modal id="eventForm" title="Событие" size="md" centered no-fade hide-footer>
      <event-form :event="event" @updateEvent="updateEvent"></event-form>
    </b-modal>
  </div>
</template>

<script>
import { GET_EVENTS, DELETE_EVENT } from '@/store/actions/event.js'

import EventForm from './EventForm.vue'

export default {
  name: 'EventList',
  components: {
    'event-form': EventForm
  },
  model: {
    prop: 'events',
    event: 'input'
  },
  data() {
    return {
      event: {}
    }
  },
  computed: {
    events() {
      return this.$store.state.event.events
    }
  },
  methods: {
    createEvent() {
      this.event = {}
      this.$bvModal.show('eventForm')
    },
    editEvent(event) {
      this.event = event
      this.$bvModal.show('eventForm')
    },
    updateEvent() {
      this.$bvModal.hide('eventForm')
    },
    removeEvent(id) {
      this.$bvModal
        .msgBoxConfirm('Хотите удалить событие?', {
          title: 'Вы уверены?',
          size: 'sm',
          okVariant: 'danger',
          okTitle: 'Удалить',
          cancelTitle: 'Отмена',
          centered: true,
          noFade: true
        })
        .then(value => {
          if (!value) return
          this.$store.dispatch(DELETE_EVENT, id)
          this.$store.dispatch(GET_EVENTS)
        })
    },
    getEventType(url) {
      return this.$store.state.event.types.filter(type => type.url == url)[0]
    }
  }
}
</script>
