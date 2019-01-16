import Renderable from '../render/renderable';

export default interface Rule<
  RequiredInput,
  OptionalInput,
  Result extends Renderable
> {
  readonly namespace: string;
  readonly name: string;

  compile(requiredInput: RequiredInput, optionalInput: OptionalInput): Result;
}