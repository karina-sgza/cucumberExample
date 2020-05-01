import {Then} from 'cucumber';

Then('the user is in the {string} page', function(title){
  expect(browser.getTitle()).to.equal(title);
});
Then('the user should be at {string}', function(title){
  expect(browser.getTitle()).to.equal(title);
});
