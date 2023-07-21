const Pet = require('../src/pet');

describe('constructor', () => {
  it('returns an object', () => {
    expect(new Pet('Fido')).toBeInstanceOf(Object);

  });
});

it('sets the name property', () => {
  const pet = new Pet('Fido');
  expect(pet.name).toEqual('Fido');
});

describe('isAlive', () => {
  const pet = new Pet('Fido');
  expect(pet.age).toEqual(0);
  expect(pet.hunger).toEqual(0);
  expect(pet.fitness).toEqual(10);
});

describe('growUp', () => {
  it('increments the age by 1 and return ', () => {
    const pet = new Pet('Fido');

    pet.growUp();
    expect(pet.age).toEqual(1);
  });

  it('throws an error if the pet is not alive', () => {
    const pet = new Pet('Fido');

    pet.age = 30;

    expect(() => pet.growUp()).toThrow('Your pet is no longer alive :(');
  });
});

it('has a initial age of 0', () => {
  const pet = new Pet('Fido');
  expect(pet.age).toEqual(0);
});

it('has an inital hunger of 0', () => {
  const pet = new Pet('Fido');
  expect(pet.hunger).toEqual(0);
});

it('has an inital fitness of 10', () => {
  const pet = new Pet('Fido');
  expect(pet.fitness).toEqual(10);
});

describe('walk', () => {
  it('increases fitness by 4 to a maximum of 10', () => {
    const pet = new Pet('Fido');

    pet.fitness = 8;
    pet.walk();

    expect(pet.fitness).toEqual(10);
  });
  
  it('throws an error if the pet is not alive', () => {
    const pet = new Pet('Fido');

    pet.age = 30;

    expect(() => pet.walk()).toThrow('Your pet is no longer alive :(');
  });
});

describe('feed', () => {
  it('decreases the hunger level by 3 to a minimum of 0', () => {
    const pet = new Pet('Fido');

    pet.hunger = 3;
    pet.feed();

    expect(pet.hunger).toEqual(0);

  });

  it('throws an error if the pet is not alive', () => {
    const pet = new Pet('Fido');

    pet.age = 30;

    expect(() => pet.feed()).toThrow('Your pet is no longer alive :(');
  });
});

describe('checkUp', () => {
  it('throws an error if the pet is not alive', () => {
    const pet = new Pet('Fido');

    pet.age = 30;

    expect(() => pet.checkUp()).toThrow('Your pet is no longer alive :(');
  });

  it('returns a string to tell you what the pet needs', () => {
    const pet = new Pet('Fido');

    pet.fitness = 3;
    expect(console.log('I need a walk'));

    pet.fitness = 6;
    expect(console.log('I feel great!'));

    pet.hunger = 5;
    expect(console.log('I am hungry'));

    pet.hunger = 1;
    expect(console.log('I feel great'));
  });
});