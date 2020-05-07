import React from "react";
import { Box } from "@material-ui/core";

const data = [
        {
            title: "What is Solid?",
            content: `It is an open source project, created by Tim Berners-Lee, that aims to achieve a complete, 
            decentralized web allows users to decide where to store their own data.`,
        },
        {
            title: "What is a Pod?",
            content: `A Pod is where data is stored on the Web with Solid. (see quote). A user may store their data in one Pod or several Pods, 
            and applications read and write data into the Pod depending on the authorisations granted by the user or users associated to that Pod.`,
        },
        {
            title: "Where are my routes saved?",
            content: `All your routes, as well as the media files associated with them are stored in your own Pod. When you disconnect from our app,
            no data is stored on our servers.`,
        },
        {
            title: "Can I store any number of routes in my Pod?",
            content: `Yes, you can store any number of routes that you want in your Pod. To store a route, you can do it manually in
            your Pod, or you can use our app to create or even import some.`,
        },
        {
            title: "My routes doesn't seem to load. Why is that?",
            content: `If you have a big number of routes associated to your account, you may experience load times bigger than usual. 
            Don't worry about that, if you wait enough, you will be able to see all your routes.`,
        },
        {
            title: "I can't see all my routes listed. What is the reason?",
            content: `ViaDeEn3B1's app only works with routes that comply with ViadeSpec's standard. This means that the application can only list 
            JSON-LD routes that are correctly built.`,
        },
        {
            title: "When I try to import a route, I get an error. Why is that?",
            content: `You can only import GPX, JSON and JSON-LD routes. Those files may contain some errors, so they get rejected and ignored
            when trying to import them.`,
        },
        {
            title: "I can't import my GPX route. Why?",
            content: `Our GPX-import system is optimized specially for achieving interoperability with Strava's routes. This doesn't mean that
            you can only import files that come from Strava, but you may encounter some problems if your GPX file has an strange internal structure.`,
        },
    ];

export default function FaqQuestions() {
    return (
        <div>
            <Box fontSize="h4.fontSize" fontWeight="fontWeightBold">Frequently asked questions (FAQ)</Box>
            <div>
                {data.map((question) => (
                  <div style={{marginTop:'2rem'}}>
                      <Box fontSize="h6.fontSize" fontWeight="fontWeightMedium">{question.title}</Box>
                      <Box>{question.content}</Box>
                  </div>
                ))}
            </div>
        </div>
    )
}
