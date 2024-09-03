// 1
type DeepReadonly<T> = {
    readonly [K in keyof T]: T[K] extends object ? DeepReadonly<T[K]> : T[K];//Я зробив це :( extends object ? DeepReadonly<T[K]> : T[K] )аби перевіряло чи є якийсь ключ об'єктом і потім дає його ключам readonly
  };
  // _________________________________________
// 2
  type DeepRequireReadonly<T> = {
    readonly [K in keyof T]-?: T[K] extends object ? DeepRequireReadonly<Required<T[K]>> : T[K];
  };
  //   _________________________________________
// 3
  type UpperCaseKeys<T> = {
     [K in keyof T as Uppercase<K & string>]: T[K];
  };


//   _________________________________________
// 4
  type AddPropertyDescriptor<T> = {
    value:T
    writable?: boolean;
    configurable?: boolean;
    enumerable?: boolean;
  }

  type ObjectToPropertyDescriptor<T> = {
    [K in keyof T]: AddPropertyDescriptor<T[K]>;
  };
  