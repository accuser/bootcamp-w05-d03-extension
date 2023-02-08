// This is the subject of our test
const Lion = require("./Lion.js");

// Lion constructor creates a new instance of Lion

describe("Lion", () => {
  beforeAll(() => {
    simba = new Lion("Simba", 38);
  });

  describe("constructor", () => {
    // `it` is an alias for `test`
    it("creates a new instance of Lion", () => {
      expect(simba).toBeInstanceOf(Lion);
    });

    it("initialises the name property", () => {
      expect(simba).toHaveProperty("name");
      expect(simba.name).toBe("Simba");
    });

    it("initialises the age property", () => {
      expect(simba).toHaveProperty("age");
      expect(simba.age).toBe(38);
    });
  });

  // Lion sound() returns a sound
  describe("sound()", () => {
    it("returns a sound for a young lion", () => {
      let youngSimba = new Lion("Simba", 10);

      let theSound = youngSimba.sound();

      expect(theSound).toBe("roar.");
    });

    it("returns a sound for an adult lion", () => {
      let adultSimba = new Lion("Simba", 38);

      let theSound = adultSimba.sound();

      expect(theSound).toBe("Roar!");
    });
  });
});
