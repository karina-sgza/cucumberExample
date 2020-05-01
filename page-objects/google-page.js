class GooglePage {
  searchBox() {
    return $('#tsf > div:nth-child(2) > div.A8SBwf > div.RNNXgb > div > div.a4bIc > input');
  }
  firstLink(){
    return $('//div[@class="r"]/a/h3');
  }
}

module.exports = new GooglePage();