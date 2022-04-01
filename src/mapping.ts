import {
  AttemptCreated as AttemptCreatedEvent,
  JourneyCreated as JourneyCreatedEvent,
  ShowUpClub
} from "../generated/ShowUpClub/ShowUpClub"
import { AttemptCreated, Journey, JourneyCreated } from "../generated/schema"

export function handleAttemptCreated(event: AttemptCreatedEvent): void {
  let entity = new AttemptCreated(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.creator = event.params.creator
  entity.attemptId = event.params.id
  entity.save()
}

export function handleJourneyCreated(event: JourneyCreatedEvent): void {
  let entity = new JourneyCreated(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.creator = event.params.creator
  entity.journeyId = event.params.id
  entity.save()


  const journey = ShowUpClub.bind(event.address)

  let journeyEntity = new Journey(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  journeyEntity.creator = event.params.creator
  journeyEntity.journeyId = event.params.id
  journeyEntity.description = journey.getJourney(event.params.id).description
  journeyEntity.save()
}
