import { Group } from './group.enum';

export class Bookmark {
  constructor(
    public id: number,
    public name: string,
    public url: string,
    public group: Group
  ) { }
}


