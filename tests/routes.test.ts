import * as mocha from 'mocha';
import * as chai from 'chai';
import chaiHttp = require('chai-http');

import { Mlipia } from '../src/server';

chai.use(chaiHttp);
let app
const expect = chai.expect;

Mlipia.launch().then()
describe('baseRoute', () => {

  it('should be json', () => {
    return chai.request(app).get('/')
      .then(res => {
        expect(res.type).to.eql('application/json');
      });
  });

  it('should have a message prop', () => {
    return chai.request(app).get('/')
      .then(res => {
        expect(res.body.message).to.eql('Hello World!');
      });
  });

});