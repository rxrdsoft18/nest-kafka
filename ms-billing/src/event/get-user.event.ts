export class GetUserEvent {
  constructor(public readonly userId: string) {}

  toString() {
    return JSON.stringify(this);
  }
}
