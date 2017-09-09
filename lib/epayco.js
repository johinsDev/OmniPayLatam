import epyaco from 'epyaco-node';
import GetAway from './getAway';

export default class epyacoGetAway extends GetAway{
  constructor(config){
    super(config);
    this.setGetAway(epayco);
  } 
  
  card(credit_info, callback) {
    this.getProvider().token.create(credit_info)
    .then(function(token) {
        callback(token,null);
    })
    .catch(function(err) {
        callback(null,err);
    });
  }
}