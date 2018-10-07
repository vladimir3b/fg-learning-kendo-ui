import { 
  IFriend, 
  IFullName, 
  GenderType 
} from './my-friend.interface';

class Name implements IFullName {
  constructor(
    public firstName: string = null,
    public middleName: string = null,
    public lastName: string = null
  ){}  
}

export class Friend implements IFriend {
  public constructor(
    public name: IFullName = new Name(),
    public age: number = null,
    public gender: GenderType = null,
    public address: string = null
  ) {}
}