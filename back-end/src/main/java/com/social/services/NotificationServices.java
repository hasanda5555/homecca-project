package com.social.services;

import com.social.entities.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.MailException;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.stereotype.Service;

@Service
public class NotificationServices {

    private JavaMailSender javaMailSender;

    @Autowired
    public NotificationServices(JavaMailSender javaMailSender){
        this.javaMailSender = javaMailSender;
    }

    public void sendNotification(User user) throws MailException{

        //send email
        SimpleMailMessage mail = new SimpleMailMessage();

        mail.setTo(user.getUsername());
        mail.setFrom("gentoo5555@gmail.com");
        mail.setSubject("Hommeca Mail");
        mail.setText("This is test email from homeeca");

        javaMailSender.send(mail);

    }
}
