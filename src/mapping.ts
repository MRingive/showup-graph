import {
  JourneyCreated as JourneyCreatedEvent,
  ShowUp as ShowUpEvent,
  ShowUpClub
} from "../generated/ShowUpClub/ShowUpClub"
import { ShowUp, Journey, JourneyCreated } from "../generated/schema"

export function handleShowUp(event: ShowUpEvent): void {
  let entity = new ShowUp(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.journeyId = event.params.journeyId
  entity.value = event.params.value
  entity.note = event.params.note

  entity.blockTimestamp = event.block.timestamp

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

  const journeys = journey.getJourneyIds()

  let journeyEntity = new Journey(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  journeyEntity.creator = event.params.creator
  journeyEntity.journeyId = event.params.id
  journeyEntity.description = journey.getJourney(event.params.id).description
  journeyEntity.save()
}
