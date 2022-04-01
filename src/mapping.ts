import {
  AttemptCreated as AttemptCreatedEvent,
  JourneyCreated as JourneyCreatedEvent
} from "../generated/ShowUpClub/ShowUpClub"
import { AttemptCreated, JourneyCreated } from "../generated/schema"

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
}
