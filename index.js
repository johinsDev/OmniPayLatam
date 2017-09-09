import epayco from './lib/epayco';

const getaway = {
	epayco: epayco
};

export default function(type, config){
  if(getaway[type.toLowerCase()] instanceof Function) {
  return new getaway[type.toLowerCase()](config);
  } else {
    throw new Error('Unrecognized type -> ' + type);
  }
}
