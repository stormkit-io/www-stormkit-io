---
title: Monitoring system using Stormkit and Supabase
description: Learn how to monitor your website's URL status using Stormkit and Supabase. Easy to set up and cost-efficient, this powerful tool can send notifications to Discord, track historical data, and more. Check out the source code now!
date: 2023-01-24
---

As IT professionals, we know how important it is to have web services that we can rely on for our applications. One way to make sure that these services are always available and working properly is by keeping an eye on the status of our URLs.

Let's design a url monitoring system to do exactly that using [Stormkit](https://www.stormkit.io/) and [Supabase](https://supabase.com/). As the first version, our application periodically checks the status of your URLs, and sends notifications if any issues arise.


We will use Stormkit to host our dashboard and create an api endpoint which will check given url and save status code to Supabase which is an open-source firebase alternative built on top of PostgreSQL. Supabase also can broadcast changes of your tables, we will utilise this feature and connect our dashboard to changes that are made to url statues by Stormkit.

<sk-article-image
    src="blog/monitoring/overall.png"
    alt="responsibilities of stormkit and supabase"
    class="bg-blue-50 mt-8"></sk-article-image>


Let's start with designing our data model, for our first version adding two tables to Supabase will be sufficient enough. First table we will create is called websites which will have two columns one is the keep url and other one is the keep latest http status code

<sk-article-image
    src="blog/monitoring/monitors.png"
    alt="websites table"
    class="bg-blue-50 mt-8"></sk-article-image>

The second table we'll create is used to keep settings that we can tweak for our application. For now, we'll just add a "notifications" key that holds a webhook URL to post notifications to a Discord channel.

<sk-article-image
    src="blog/monitoring/settings.png"
    alt="settings table"
    class="bg-blue-50 mt-8"></sk-article-image>

Let's create an [api endpoint](https://www.stormkit.io/docs/features/writing-api) that will be invoked periodically by Stormkit’s [trigger function feature](https://www.stormkit.io/docs/features/trigger-functions). State diagram below shows how that endpoint works but feel free to [check out the code](https://github.com/stormkit-io/uptime-example/blob/main/api/index.ts).

<sk-article-image
    src="blog/monitoring/flow.png"
    alt="flow of api endpoint"
    class="bg-blue-50 mt-8"></sk-article-image>

After we've implemented and tested our logic locally, it's time for deployment. All we have to do is push our code to the git providers Stormkit supports and connect our repo with Stormkit. We'll also need to configure environment variables that the Supabase SDK needs to fetch data.

Once our code is deployed to Stormkit, we can configure a trigger function(beta) with a body that will send HTTP requests at a given interval. We can list our endpoints by going into deployments, clicking "..." on the right side, and checking the manifest file.

We're almost there! Now, we need to prepare our basic dashboard and connect it with Supabase. Supabase gives us CRUD endpoints for each table we created, so we don't have to do anything extra to load data for the first time when we load our page. Take a look at [the code](https://github.com/stormkit-io/uptime-example/blob/main/src/App.tsx#L28) for more details. After a bit of React, we'll have a page that looks like this:

<sk-article-image
    src="blog/monitoring/dashboard.png"
    alt="basic dashboard for status page"
    class="bg-blue-50 mt-8"></sk-article-image>

Final piece of the puzzle is to get live updates to our basic dashboard. There are multiple ways to do that but the most efficient way is to be able to listen to changes and update our view when they occur. Lucky Supabase allows us to subscribe to table events, so if we subscribe to any update/insert/delete event in the monitors page we can update our view whenever link status changes or link is removed.

In conclusion, the URL monitoring system that we have designed using Stormkit and Supabase is a powerful and efficient tool for keeping track of the status of your important services. The system is easy to set up, quick to get up and running, and cost-efficient. It offers a user-friendly interface, and its integration of JavaScript in Stormkit makes it a versatile solution that can be customised to suit your specific needs. The use of Supabase, an open-source firebase alternative built on top of PostgreSQL, adds to the robustness of the system and the ability to notify users via Discord makes the system even more convenient.

There are several future improvements that could be made to our url monitoring tool to make it even more powerful. For example, keeping and displaying historical data would allow you to track the performance of your urls over time, and it can be useful for identifying patterns or trends. Pinging urls with given payloads would allow you to test the functionality of your web services more thoroughly. Integrating the system with other tools such as Slack, PagerDuty, etc., would allow you to receive notifications in different ways.

You can find [source code here](https://github.com/stormkit-io/uptime-example/).
