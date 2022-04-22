import {
  JourneyCompleted,
  JourneyCreated as JourneyCreatedEvent,
  ShowUp as ShowUpEvent,
  ShowUpClub,
} from "../generated/ShowUpClub/ShowUpClub";
import { ShowUp, Journey, User } from "../generated/schema";
import { BigInt, Bytes } from "@graphprotocol/graph-ts";

export function handleShowUp(event: ShowUpEvent): void {
  const entity = new ShowUp(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  );
  entity.journeyId = event.params.journeyId;
  entity.value = event.params.value;
  entity.note = event.params.note;

  entity.blockTimestamp = event.block.timestamp;
  entity.transactionHash = event.transaction.hash;

  entity.save();

  const journey = Journey.load(event.params.journeyId.toString())!;
  const user = loadOrCreateUser(journey.creator, event.block.timestamp);
  user.showUps = user.showUps + BigInt.fromString("1")
  user.save();
}

export function handleJourneyCreated(event: JourneyCreatedEvent): void {
  const journey = ShowUpClub.bind(event.address);

  const journeyEntity = new Journey(event.params.id.toString());
  journeyEntity.creator = event.params.creator;
  journeyEntity.journeyId = event.params.id;
  journeyEntity.description = journey.getJourney(event.params.id).description;
  journeyEntity.createdTransactionHash = event.transaction.hash;
  journeyEntity.save();

  const user = loadOrCreateUser(journeyEntity.creator, event.block.timestamp);
  const journeysCreated = user.journeys
  user.journeys = user.journeys + BigInt.fromString("1")
  user.save();
}

export function handleJourneyCompleted(event: JourneyCompleted): void {
  const id = event.params.id.toString();
  const journey = Journey.load(id)!;
  journey.completedBlockTimestamp = event.block.timestamp;
  journey.completedTransactionHash = event.transaction.hash;
  journey.save();

  const user = loadOrCreateUser(journey.creator, event.block.timestamp);
  const journeysCompleted = user.journeysCompleted
  user.journeysCompleted = user.journeysCompleted + BigInt.fromString("1")
  user.save();
}

function loadOrCreateUser(address: Bytes, timestamp: BigInt): User {
  const id = address.toHexString();
  const user = User.load(id);

  if (user == null) return newUser(id, timestamp);

  return user;
}

function newUser(id: string, timestamp: BigInt): User {
  const user = new User(id);
  const zero = BigInt.fromString("0");
  user.journeys = zero
  user.journeysCompleted = zero
  user.showUps = zero
  user.createdBlockTimestamp = timestamp;

  return user;
}
