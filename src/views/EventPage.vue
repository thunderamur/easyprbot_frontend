<template>
  <div class="container py-3">
    <event-filter />
    <event-list />
  </div>
</template>

<script>
import { GET_EVENTS } from '@/store/actions/event.js'

import EventList from '@/components/EventList.vue'
import EventFilter from '@/components/EventFilter.vue'

export default {
  name: 'EventPage',
  components: {
    'event-list': EventList,
    'event-filter': EventFilter
  },
  created() {
    this.$store.dispatch(GET_EVENTS)
  }
}
</script>
