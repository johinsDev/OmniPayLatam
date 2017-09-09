import _ from 'lodash';

export default class GetAway{
  constructor(_config){
    this._config = {};
    this._getaway = {};
    _.assign(this._config, _config);
  }

  getProvider() {
    return this._getaway;
  }

  setGetAway(getaway) {
    this._getaway = getaway(this._config);
    return this;
  }
}