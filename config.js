/*
 * Configuration File for Currency Informer
 * ________________________________________
 * Only Change values in this file. Changing 
 * parameters in other files may result in
 * catastrophic failure, severe dehydration or
 * burning the pizza you left in the oven as
 * you stare at your code wondering why it all
 * went wrong
 */

// CURRENCY SETTINGS
// Normal 3-character codes apply.
// See https://www.iban.com/currency-codes

// The currency to which exchange rates are relative to. 
// (If 1 EUR = X USD, EUR is the base currency)
const baseCurrency = "EUR"

// The currency you wish to compare to the base
const secondaryCurrency = "USD"

// The desired converted value
const desiredValue = 1.23

// EMAIL SETTINGS

// Array list of emails to which the alerts should be sent
const emails = [
  "example@domain.com",
  "domain@example.com"
]

// SMS SETTINGS

// Array of phone numbers to which alerts should be sent
const mobileNumbers = [
  "+0000000000",
  "+1111111111"
]

// SMS and Email toggles
const emailNotifications = true
const smsNotifications = true
