package com.social.services;

import com.social.entities.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.MailException;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.scheduling.annotation.Async;
import org.springframework.stereotype.Service;


import javax.mail.Message;
import javax.mail.internet.InternetAddress;
import javax.mail.internet.MimeMessage;
import org.springframework.mail.javamail.MimeMessagePreparator;

@Service
public class NotificationServices {

    @Autowired
    private JavaMailSender javaMailSender;


    @Async
    public void sendNotification(User user) throws MailException, Exception{

        //send email
        SimpleMailMessage mail = new SimpleMailMessage();

        mail.setTo(user.getUsername());
        mail.setFrom("musicsharelib@gmail.com");
        mail.setSubject("Thank you register with Homeeca");
        mail.setText("Thank you register with Homeeca");


        MimeMessage htmlMessage = javaMailSender.createMimeMessage();
        htmlMessage.setRecipient(Message.RecipientType.TO, new InternetAddress(user.getUsername()));
        htmlMessage.setFrom(new InternetAddress("musicsharelib@gmail.com"));
        htmlMessage.setContent("<h2>Thank you</h2> register with Homeeca","text/html");

        MimeMessagePreparator preparator = new MimeMessagePreparator() {

            public void prepare(MimeMessage mimeMessage) throws Exception {

                mimeMessage.setRecipient(Message.RecipientType.TO,
                        new InternetAddress(user.getUsername()));
                mimeMessage.setFrom(new InternetAddress("musicsharelib@gmail.com"));
                mimeMessage.setText(
                        "Dear " + user.getFullName() + " "
                                + ", <h2>thank you</h2> for register with Homeeca");
            }
        };

        javaMailSender.send(mail);
        javaMailSender.send(preparator);
        System.out.println("java mail sender : " + javaMailSender.toString());
    }
}
