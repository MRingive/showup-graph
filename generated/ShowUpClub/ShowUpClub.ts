// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.

import {
  ethereum,
  JSONValue,
  TypedMap,
  Entity,
  Bytes,
  Address,
  BigInt
} from "@graphprotocol/graph-ts";

export class JourneyCompleted extends ethereum.Event {
  get params(): JourneyCompleted__Params {
    return new JourneyCompleted__Params(this);
  }
}

export class JourneyCompleted__Params {
  _event: JourneyCompleted;

  constructor(event: JourneyCompleted) {
    this._event = event;
  }

  get id(): BigInt {
    return this._event.parameters[0].value.toBigInt();
  }
}

export class JourneyCreated extends ethereum.Event {
  get params(): JourneyCreated__Params {
    return new JourneyCreated__Params(this);
  }
}

export class JourneyCreated__Params {
  _event: JourneyCreated;

  constructor(event: JourneyCreated) {
    this._event = event;
  }

  get creator(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get id(): BigInt {
    return this._event.parameters[1].value.toBigInt();
  }
}

export class ShowUp extends ethereum.Event {
  get params(): ShowUp__Params {
    return new ShowUp__Params(this);
  }
}

export class ShowUp__Params {
  _event: ShowUp;

  constructor(event: ShowUp) {
    this._event = event;
  }

  get journeyId(): BigInt {
    return this._event.parameters[0].value.toBigInt();
  }

  get value(): BigInt {
    return this._event.parameters[1].value.toBigInt();
  }

  get note(): string {
    return this._event.parameters[2].value.toString();
  }
}

export class ShowUpClub__getJourneyResultJourney_Struct extends ethereum.Tuple {
  get action(): i32 {
    return this[0].toI32();
  }

  get format(): i32 {
    return this[1].toI32();
  }

  get duration(): BigInt {
    return this[2].toBigInt();
  }

  get dailyValue(): BigInt {
    return this[3].toBigInt();
  }

  get description(): string {
    return this[4].toString();
  }

  get creator(): Address {
    return this[5].toAddress();
  }

  get charity(): Address {
    return this[6].toAddress();
  }

  get startDate(): BigInt {
    return this[7].toBigInt();
  }

  get currentValue(): BigInt {
    return this[8].toBigInt();
  }

  get fundsLocked(): BigInt {
    return this[9].toBigInt();
  }

  get completed(): boolean {
    return this[10].toBoolean();
  }
}

export class ShowUpClub__journeysResult {
  value0: i32;
  value1: i32;
  value2: BigInt;
  value3: BigInt;
  value4: string;
  value5: Address;
  value6: Address;
  value7: BigInt;
  value8: BigInt;
  value9: BigInt;
  value10: boolean;

  constructor(
    value0: i32,
    value1: i32,
    value2: BigInt,
    value3: BigInt,
    value4: string,
    value5: Address,
    value6: Address,
    value7: BigInt,
    value8: BigInt,
    value9: BigInt,
    value10: boolean
  ) {
    this.value0 = value0;
    this.value1 = value1;
    this.value2 = value2;
    this.value3 = value3;
    this.value4 = value4;
    this.value5 = value5;
    this.value6 = value6;
    this.value7 = value7;
    this.value8 = value8;
    this.value9 = value9;
    this.value10 = value10;
  }

  toMap(): TypedMap<string, ethereum.Value> {
    let map = new TypedMap<string, ethereum.Value>();
    map.set(
      "value0",
      ethereum.Value.fromUnsignedBigInt(BigInt.fromI32(this.value0))
    );
    map.set(
      "value1",
      ethereum.Value.fromUnsignedBigInt(BigInt.fromI32(this.value1))
    );
    map.set("value2", ethereum.Value.fromUnsignedBigInt(this.value2));
    map.set("value3", ethereum.Value.fromUnsignedBigInt(this.value3));
    map.set("value4", ethereum.Value.fromString(this.value4));
    map.set("value5", ethereum.Value.fromAddress(this.value5));
    map.set("value6", ethereum.Value.fromAddress(this.value6));
    map.set("value7", ethereum.Value.fromUnsignedBigInt(this.value7));
    map.set("value8", ethereum.Value.fromUnsignedBigInt(this.value8));
    map.set("value9", ethereum.Value.fromUnsignedBigInt(this.value9));
    map.set("value10", ethereum.Value.fromBoolean(this.value10));
    return map;
  }
}

export class ShowUpClub extends ethereum.SmartContract {
  static bind(address: Address): ShowUpClub {
    return new ShowUpClub("ShowUpClub", address);
  }

  getJourney(id: BigInt): ShowUpClub__getJourneyResultJourney_Struct {
    let result = super.call(
      "getJourney",
      "getJourney(uint256):((uint8,uint8,uint256,uint256,string,address,address,uint256,uint256,uint256,bool))",
      [ethereum.Value.fromUnsignedBigInt(id)]
    );

    return changetype<ShowUpClub__getJourneyResultJourney_Struct>(
      result[0].toTuple()
    );
  }

  try_getJourney(
    id: BigInt
  ): ethereum.CallResult<ShowUpClub__getJourneyResultJourney_Struct> {
    let result = super.tryCall(
      "getJourney",
      "getJourney(uint256):((uint8,uint8,uint256,uint256,string,address,address,uint256,uint256,uint256,bool))",
      [ethereum.Value.fromUnsignedBigInt(id)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(
      changetype<ShowUpClub__getJourneyResultJourney_Struct>(value[0].toTuple())
    );
  }

  getJourneyIds(): Array<BigInt> {
    let result = super.call("getJourneyIds", "getJourneyIds():(uint256[])", []);

    return result[0].toBigIntArray();
  }

  try_getJourneyIds(): ethereum.CallResult<Array<BigInt>> {
    let result = super.tryCall(
      "getJourneyIds",
      "getJourneyIds():(uint256[])",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigIntArray());
  }

  getJourneyIdsForUser(creator: Address): Array<BigInt> {
    let result = super.call(
      "getJourneyIdsForUser",
      "getJourneyIdsForUser(address):(uint256[])",
      [ethereum.Value.fromAddress(creator)]
    );

    return result[0].toBigIntArray();
  }

  try_getJourneyIdsForUser(
    creator: Address
  ): ethereum.CallResult<Array<BigInt>> {
    let result = super.tryCall(
      "getJourneyIdsForUser",
      "getJourneyIdsForUser(address):(uint256[])",
      [ethereum.Value.fromAddress(creator)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigIntArray());
  }

  journeys(param0: BigInt): ShowUpClub__journeysResult {
    let result = super.call(
      "journeys",
      "journeys(uint256):(uint8,uint8,uint256,uint256,string,address,address,uint256,uint256,uint256,bool)",
      [ethereum.Value.fromUnsignedBigInt(param0)]
    );

    return new ShowUpClub__journeysResult(
      result[0].toI32(),
      result[1].toI32(),
      result[2].toBigInt(),
      result[3].toBigInt(),
      result[4].toString(),
      result[5].toAddress(),
      result[6].toAddress(),
      result[7].toBigInt(),
      result[8].toBigInt(),
      result[9].toBigInt(),
      result[10].toBoolean()
    );
  }

  try_journeys(
    param0: BigInt
  ): ethereum.CallResult<ShowUpClub__journeysResult> {
    let result = super.tryCall(
      "journeys",
      "journeys(uint256):(uint8,uint8,uint256,uint256,string,address,address,uint256,uint256,uint256,bool)",
      [ethereum.Value.fromUnsignedBigInt(param0)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(
      new ShowUpClub__journeysResult(
        value[0].toI32(),
        value[1].toI32(),
        value[2].toBigInt(),
        value[3].toBigInt(),
        value[4].toString(),
        value[5].toAddress(),
        value[6].toAddress(),
        value[7].toBigInt(),
        value[8].toBigInt(),
        value[9].toBigInt(),
        value[10].toBoolean()
      )
    );
  }

  payments(dest: Address): BigInt {
    let result = super.call("payments", "payments(address):(uint256)", [
      ethereum.Value.fromAddress(dest)
    ]);

    return result[0].toBigInt();
  }

  try_payments(dest: Address): ethereum.CallResult<BigInt> {
    let result = super.tryCall("payments", "payments(address):(uint256)", [
      ethereum.Value.fromAddress(dest)
    ]);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }
}

export class ConstructorCall extends ethereum.Call {
  get inputs(): ConstructorCall__Inputs {
    return new ConstructorCall__Inputs(this);
  }

  get outputs(): ConstructorCall__Outputs {
    return new ConstructorCall__Outputs(this);
  }
}

export class ConstructorCall__Inputs {
  _call: ConstructorCall;

  constructor(call: ConstructorCall) {
    this._call = call;
  }
}

export class ConstructorCall__Outputs {
  _call: ConstructorCall;

  constructor(call: ConstructorCall) {
    this._call = call;
  }
}

export class CompleteJourneyCall extends ethereum.Call {
  get inputs(): CompleteJourneyCall__Inputs {
    return new CompleteJourneyCall__Inputs(this);
  }

  get outputs(): CompleteJourneyCall__Outputs {
    return new CompleteJourneyCall__Outputs(this);
  }
}

export class CompleteJourneyCall__Inputs {
  _call: CompleteJourneyCall;

  constructor(call: CompleteJourneyCall) {
    this._call = call;
  }

  get journeyId(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }
}

export class CompleteJourneyCall__Outputs {
  _call: CompleteJourneyCall;

  constructor(call: CompleteJourneyCall) {
    this._call = call;
  }
}

export class CreateJourneyCall extends ethereum.Call {
  get inputs(): CreateJourneyCall__Inputs {
    return new CreateJourneyCall__Inputs(this);
  }

  get outputs(): CreateJourneyCall__Outputs {
    return new CreateJourneyCall__Outputs(this);
  }
}

export class CreateJourneyCall__Inputs {
  _call: CreateJourneyCall;

  constructor(call: CreateJourneyCall) {
    this._call = call;
  }

  get action(): i32 {
    return this._call.inputValues[0].value.toI32();
  }

  get format(): i32 {
    return this._call.inputValues[1].value.toI32();
  }

  get duration(): BigInt {
    return this._call.inputValues[2].value.toBigInt();
  }

  get dailyValue(): BigInt {
    return this._call.inputValues[3].value.toBigInt();
  }

  get description(): string {
    return this._call.inputValues[4].value.toString();
  }

  get charity(): Address {
    return this._call.inputValues[5].value.toAddress();
  }
}

export class CreateJourneyCall__Outputs {
  _call: CreateJourneyCall;

  constructor(call: CreateJourneyCall) {
    this._call = call;
  }
}

export class ShowUpCall extends ethereum.Call {
  get inputs(): ShowUpCall__Inputs {
    return new ShowUpCall__Inputs(this);
  }

  get outputs(): ShowUpCall__Outputs {
    return new ShowUpCall__Outputs(this);
  }
}

export class ShowUpCall__Inputs {
  _call: ShowUpCall;

  constructor(call: ShowUpCall) {
    this._call = call;
  }

  get journeyId(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }

  get value(): BigInt {
    return this._call.inputValues[1].value.toBigInt();
  }

  get note(): string {
    return this._call.inputValues[2].value.toString();
  }
}

export class ShowUpCall__Outputs {
  _call: ShowUpCall;

  constructor(call: ShowUpCall) {
    this._call = call;
  }
}

export class WithdrawPaymentsCall extends ethereum.Call {
  get inputs(): WithdrawPaymentsCall__Inputs {
    return new WithdrawPaymentsCall__Inputs(this);
  }

  get outputs(): WithdrawPaymentsCall__Outputs {
    return new WithdrawPaymentsCall__Outputs(this);
  }
}

export class WithdrawPaymentsCall__Inputs {
  _call: WithdrawPaymentsCall;

  constructor(call: WithdrawPaymentsCall) {
    this._call = call;
  }

  get payee(): Address {
    return this._call.inputValues[0].value.toAddress();
  }
}

export class WithdrawPaymentsCall__Outputs {
  _call: WithdrawPaymentsCall;

  constructor(call: WithdrawPaymentsCall) {
    this._call = call;
  }
}
