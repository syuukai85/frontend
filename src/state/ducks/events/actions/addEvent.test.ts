import * as addEvent from './addEvent'
import { ActionTypes } from '../types'
import { Event } from 'typescript-fetch-api'

describe('addEvent', () => {
  it('eventが正常に渡されて来た時に正しいobjectを返すか', () => {
    const event: Event = { title: 'a', capacity: 1, holdStartDate: new Date(), holdEndDate: new Date() }
    expect(addEvent.default.addEvent(event)).toStrictEqual({
      event,
      type: ActionTypes.REQUEST_ADD_EVENT,
      isLoading: true
    })
  })
})
