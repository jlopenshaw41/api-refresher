const { Reader } = require("../src/models");
const { expect } = require("chai");
const request = require("supertest");
const app = require("../src/app");

decribe("/readers", () => {
  before(async () => {
    try {
      await Reader.sequelize.sync();
    } catch (err) {
      console.log(err);
    }
  });

  beforeEach(async () => {
    try {
      await Reader.destroy({ where: {} });
    } catch (err) {
      console.log(err);
    }
  });
});
