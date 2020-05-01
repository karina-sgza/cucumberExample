class EnroutePage{
	contactUsButton(){
		return $('.btn-blue');
	}
	nameInput(){
		return $('.your-name .wpcf7-validates-as-required');
	}
	emailInput(){
		return $('.wpcf7-validates-as-email');
	}
	subjectInput(){
		return $('.your-subject .wpcf7-form-control');
	}
	messageInput(){
		return $('.wpcf7-textarea');
	}
	sendButton(){
		return $('/html//main[@id=\'main\']/article/div[@class=\'entry-content\']//div[@role=\'form\']/form[@action=\'/contact/#wpcf7-f23-p17-o1\']//input[@value=\'Send\']');
	}

}
module.exports = new EnroutePage();

	
