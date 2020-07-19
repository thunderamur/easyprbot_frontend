import Vue from 'vue'

import backendApi from '@/gateways/backend-api.js'
import {
  CREATE_EVENT,
  DELETE_EVENT,
  GET_EVENTS,
  GET_TYPES,
  PATCH_EVENT,
  SET_GET_ROW
} from '../actions/event.js'

const state = () => ({
  types: [],
  events: [],
  getRow: ''
})

const actions = {
  [GET_TYPES]: async ({ commit }) => {
    const response = await backendApi.get('/eventtypes/')
    commit(GET_TYPES, response.data)
  },
  [GET_EVENTS]: async ({ state, commit }) => {
    const response = await backendApi.get(`/events/${state.getRow}`)
    commit(GET_EVENTS, response.data)
  },
  [PATCH_EVENT]: async (context, event) => {
    return await backendApi.patch(`/events/${event.id}/`, event)
  },
  [DELETE_EVENT]: async (context, id) => {
    return await backendApi.delete(`/events/${id}/`)
  },
  [CREATE_EVENT]: async (context, event) => {
    return await backendApi.post(`/events/`, event)
  },
  [SET_GET_ROW]: ({ commit }, getRow) => {
    commit(SET_GET_ROW, getRow)
  }
}

const mutations = {
  [GET_EVENTS]: (state, events) => {
    Vue.set(state, 'events', events)
  },
  [GET_TYPES]: (state, types) => {
    Vue.set(state, 'types', types)
  },
  [SET_GET_ROW]: (state, getRow) => {
    Vue.set(state, 'getRow', getRow)
  }
}

export default {
  state,
  actions,
  mutations
}
