// @ts-nocheck
import { Model } from '../src/Model';
import { MockGroup } from './MockGroup';
import { MockLocation } from './MockLocation';

export class MockPerson extends Model {
  static tableName = 'people';
  static casts = {
    age: 'number',
    isAdult: 'boolean',
  };

  location() {
    const MockLocationInstance = new MockLocation() as Model;
    return this.belongsTo(MockLocationInstance, 'locationId');
  }

  groups() {
    const MockGroupInstance = new MockGroup() as Model;
    return this.belongsToMany(MockGroupInstance, 'groups_people', 'personId', 'groupId');
  }
}