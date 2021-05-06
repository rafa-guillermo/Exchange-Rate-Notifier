# Exchange Rate Notifier

### Deployment: 
- Copy all files to a new Google Apps Script project
- Save project

### Usage:
- Configure parameters in `config.js` to match your criteria
- Create a Time-based trigger with frequency of your choosing at which you wish to check the exchange rate

### Configuration:
The list of configuration parameters are as follows:

- `baseCurrency`: The currency to which exchange rates are relative to. For example, if 1 EUR = X USD, EUR is the base currency
- `secondaryCurrency`: The currency value you want to obtain in terms of your base currency
- `desiredValue`: The threshold value of the secondary currency for which you wish to receive notifications
- `emails`: List of emails to receive notifications, takes an array form of `["a@domain.com", "b@domain.com"]`
- `mobileNumbers`: List of mobile numbers to receive notification, with country codes. Takes an array form of `["+111111111", "+222222222"]`
- `emailNotifications`: Flag for turning email notifications on and off
- `smsNotifications`: Flag for turning SMS notifications on and off
