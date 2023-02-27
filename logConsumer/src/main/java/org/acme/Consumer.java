package org.acme;

import org.eclipse.microprofile.reactive.messaging.Incoming;
import javax.enterprise.context.ApplicationScoped;

@ApplicationScoped
public class Consumer {

    @Incoming("log4j2-in")
    public void receive(String log) {
        System.out.println("Received log "+log);

        //Now do stuff with the log
        //possibilities could be sent to logstash, or to a database
        //or to a file
        //or to a queue


    }

}