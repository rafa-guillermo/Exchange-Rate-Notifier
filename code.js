function getComparisonValue() {
  const string = `?access_key=${apiKey}&base=${baseCurrency}&symbols=${secondaryCurrency}`
  const response = UrlFetchApp.fetch(`${endpoint}${string}`)
  const value = parseFloat(JSON.parse(response)["rates"][secondaryCurrency])
  
  console.log(value)
  return value
}

function sendNotificationEmail(value) {  
  if (value < desiredValue) {
    var subject = `${secondaryCurrency} Alert!`
    var body = `1 ${baseCurrency} is currently ${value} ${secondaryCurrency}.`
    MailApp.sendEmail(emails.join(","), subject, body)
  }
  return 
}

function sendSMS(value) {
  const url = `${baseUrl}/Accounts/${twilioAccSID}/Messages.json`
  console.log(url)
  for (let i = 0; i < mobileNumbers.length; i++) {  
    const payload = {
      "To": mobileNumbers[i],
      "Body" : `1 ${baseCurrency} is currently ${value} ${secondaryCurrency}.`,
      "From" : twilioNumber
    }
    const options = {
      "method": "post",
      "payload": payload,
      "headers": {
        "Authorization" : "Basic " + Utilities.base64Encode(`${twilioAccSID}:${twilioAuthToken}`)
      }
    }
    console.log(JSON.stringify(options))
    const response = UrlFetchApp.fetch(url, options)
  }  
}

function main() {
  const value = getComparisonValue()
  emailNotifications ? sendNotificationEmail(value) : null
  smsNotifications ? sendSMS(value) : null
  console.log(`The value is ${value}`)
}
