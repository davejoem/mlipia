import * as mocha from 'mocha';
import * as chai from 'chai';
import chaiHttp = require('chai-http');

import { Wims } from '../server';

chai.use(chaiHttp);
const app
const expect = chai.expect;

Wims.launch().then()
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