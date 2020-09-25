import { from } from 'rxjs'
import { map } from 'rxjs/operators'

const mockEvents = [
  {
    date: new Date('2020-09-16'),
    embedLink:
      'https://publish.twitter.com/?query=https%3A%2F%2Ftwitter.com%2Futjs%2Fstatus%2F1306297756944756736&widget=Tweet',
  },
]

export function getEvents1$(scale) {
  return from([mockEvents]).pipe(
    map((events) => {
      return events.map((e) => {
        return { ...e, x: scale(e.date) }
      })
    }),
  )
}
