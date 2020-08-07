const undefinedReplacer = (key: string, value: any) =>
  typeof value === 'undefined' ? null : value;

const undefinedReviver = (key: string, value: any) =>
  value === null ? undefined : value;

export function serialiseObject(
  object: any,
  replacer?: (key: string, value: any) => any,
): string {
  const composedReplacer = (key: string, value: any) => {
    const replaced = replacer ? replacer(key, value) : value;
    return undefinedReplacer(key, replaced);
  };
  return JSON.stringify(object, composedReplacer);
}

export function deserialiseObject(
  sObject: string,
  reviver?: (key: string, value: any) => any,
): any {
  const composedReviver = (key: string, value: any) => {
    const replaced = reviver ? reviver(key, value) : value;
    return undefinedReviver(key, replaced);
  };
  return JSON.parse(sObject, composedReviver);
}

export function createJSONDeserialise<A, B>(deserialiseFn: (arg: A) => B) {
  return function (serialisedValue: string): B {
    const object = deserialiseObject(serialisedValue);
    return deserialiseFn(object);
  };
}

export function createJSONSerialise<A, B>(serialiseFn: (arg: A) => B) {
  return function (value: A): string {
    const object = serialiseFn(value);
    return serialiseObject(object);
  };
}