import omnipay from './';

(function() {
  const payment = omnipay('epayco', {
    apiKey: 'PUBLIC_KEY',
    privateKey: 'PRIVATE_KEY',
    lang: 'ES',
    test: true
  });
  var credit_info = {
    "card[number]": "4575623182290326",
    "card[exp_year]": "2017",
    "card[exp_month]": "07",
    "card[cvc]": "123"
  }
  payment.card(credit_info, (token, err) => {
    console.log(token, err);
  });
})();