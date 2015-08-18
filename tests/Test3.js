module.exports = {
  'Demo test Google' : function (browser) {
    browser
      .url('http://172.27.59.81:5050/EmployeeApplicationSprint4-1.0-SNAPSHOT/jsp/add.jsp')
      .waitForElementVisible('body', 1000)
	  .assert.title('Employee Application')
	  .assert.visible('input')
	  .setValue('input[name=code]','1003')
	  .setValue('input[name=name]','harshy')
	  .setValue('input[name=city]','lahore')
	  .waitForElementVisible('button[id=SubmitEmployee]', 3000)
	  .click('button[id=SubmitEmployee]')
	  
      
      .end();
  }
};
