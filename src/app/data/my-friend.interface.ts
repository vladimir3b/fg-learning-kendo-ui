type GenderType = 'male' | 'female';

interface IFullName {
  firstName: string;
  middleName: string;
  lastName: string;
}

interface IFriend {
  name: IFullName;
  age: number;
  gender: GenderType;
  address: string
}

export {
  GenderType,
  IFullName,
  IFriend
}