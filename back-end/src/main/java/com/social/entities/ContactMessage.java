package com.social.entities;


/*******************************************************************************
 * 2017, this is the user entity class ,
 * this class implements users details of the spring security framework
 *******************************************************************************/


import java.io.Serializable;

/**
 * Description of User.
 * 
 * @author Hasanda Fernando
 */
public  class ContactMessage implements Serializable {

	/**
	 * email of to address
	 */
	private String toAddress ;

	/**
	 * email of from address
	 */
	private String fromAddress ;

	/**
	 * Email subject
	 */
    private String subject;

    /**
	 * message body
	 */
    private String emailBody;

	public ContactMessage(){

	}

    public ContactMessage(String toAddress, String fromAddress, String subject, String emailBody){
    	this.toAddress=toAddress;
    	this.fromAddress= fromAddress;
    	this.subject=subject;
		this.emailBody=emailBody;
	}


	@Override
	public String toString() {
		return "[toAddress=" + toAddress + ", fromAddress=" + fromAddress + ", subject=" + subject + ", emailBody=" + emailBody +
				 "]";
	}

	public String getToAddress() {
		return toAddress;
	}

	public void setToAddress(String toAddress) {
		this.toAddress = toAddress;
	}

	public String getFromAddress() {
		return fromAddress;
	}

	public void setFromAddress(String fromAddress) {
		this.fromAddress = fromAddress;
	}

	public String getSubject() {
		return subject;
	}

	public void setSubject(String subject) {
		this.subject = subject;
	}

	public String getEmailBody() {
		return emailBody;
	}

	public void setEmailBody(String emailBody) {
		this.emailBody = emailBody;
	}


}
