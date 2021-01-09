import { myContainer } from "#/inversify-tutorial/inversify.config";
import { TYPES } from "#/inversify-tutorial/types";
import { Warrior } from "#/inversify-tutorial/interfaces";

const ninja = myContainer.get<Warrior>(TYPES.Warrior);

test('should call methods', (): void => {
    expect(ninja.fight()).toEqual("cut!"); // true
    expect(ninja.sneak()).toEqual("hit!"); // true
});
