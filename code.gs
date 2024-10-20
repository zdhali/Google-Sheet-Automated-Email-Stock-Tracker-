function sendEmail() {
  var stockData = getData();
  var body = getEmailText(stockData);
  var htmlBody = getEmailHtml(stockData);
  
  MailApp.sendEmail({
    to: "<YOUREMAILHERE>",
    subject: "Stock update",
    body: body,
    htmlBody: htmlBody
  });
}


function getEmailHtml(stockData) {
  var htmlTemplate = HtmlService.createTemplateFromFile("Template.html");
  htmlTemplate.stocks = stockData;
  var htmlBody = htmlTemplate.evaluate().getContent();
  return htmlBody;
}


function getEmailText(stockData) {
  var text = "";
  stockData.forEach(function(stock) {
    text = text + stock.name + "\n" + stock.ticker + "\n" + stock.price + "\n" + stock.closing + "\n" + stock.chgpct + "\n-----------------------\n\n";
  });
  return text;
}


/**
 * @OnlyCurrentDoc
 */
function getData() {
  var values = SpreadsheetApp.getActive().getSheetByName("Data").getRange("Stocks").getValues();
  values.shift(); //remove headers
  var stocks = [];
  values.forEach(function(value) {
    var stock = {};
    stock.name = value[0];
    stock.ticker = value[1];
    stock.price = value[2];
    stock.closing = value[3];
    stock.chgpct = value[4];
    stocks.push(stock);
  })
  //Logger.log(JSON.stringify(stocks));
  return stocks;
}
