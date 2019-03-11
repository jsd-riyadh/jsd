# ![](https://ga-dash.s3.amazonaws.com/production/assets/logo-9f88ae6c9c3871690e33280fcf557f33.png) Github Pages and Heroku

### Objectives

_After this lesson, students will be able to:_

- Understand what hosting is.
- Identify a program's needs in terms of host providers.
- Deploy to GitHub Pages.
- Deploy to Heroku.

### Preparation

_Before this lesson, students should already be able to:_

- Explain the back-end and the front-end development.
- use basic Git and GitHub commands and skills.
- Create an application utilizing Heroku.

>Note: Last class, we worked on building a single page app that integrated the Twitter API. Check with students to make sure that everyone is comfortable with the materials covered in the last class.

---

<a name = "opening"></a>
## Introduction (15 min)

So far everything we have developed has been developed _locally_, meaning what we've been building exists solely on our machines. Though we ultimately want to share our beautiful programs with the world, it is important to first develop our ideas in a local environment. Why do you think that is? For one, developing locally requires a lot less. For example, we don't even need an internet connection to be able to see our programs render! Also, why would we want to push brand spanking new code live to a production environment for all the world to see? Undoubtedly, we're going to want to make some changes and we don't need our users seeing every iteration of our thought process in their browsers. Yet, possibly the biggest reason programmers develop locally is for the mere fact that we can better control the environment we are working in. That is to say, it's easier to determine what allows the program to work as well as what is causing it issues. Once you _deploy_ your code into the world, your program enters a _production_ environment where more outside variables are bound to exist, variables we must account for in order to have a successful deployment. However, don't let the production world intimidate you, today's lesson seeks to take your skills to the next level as we learn to deploy and deploy well. By the end of this lesson you will be able to successfully push your code for the world to see and further, you'll understand the mechanics of how deployment and hosting work.

---

<a name = "introduction1"></a>
## Deployment Introduction

In the development process we eventually get to a point where we wish to share our program with the world. But how exactly do we go about sharing? As you probably already know, in order to make our applications accessible to any computer in the world we must put it online, the internet must _host_ our code. The process of serving our application to the internet for it to host is known as _deployment_. But before we get into the technicalities of deployment, we must first understand our hosting options so we know where to deploy to.

Over the time of this course we have come to learn how to build two different types of programs: static sites and applications. Every time we coded a program that consisted solely of HTML, CSS and JS we created a static web page. These _static sites_ are purely _front-end_ applications in the sense that their data is static, it's served once and never dynamically updated. Then, when we introduced Firebase to our programs we started to build full-stack _web applications_. In computing, a web app is defined as a client-server (front-end; back-end) software application where the client runs in the browser. In respect to what we've been building, the HTML, CSS and JS are considered the client, and Firebase would be considered the server-side.

The reason we need to differentiate between these types of programs, static sites and applications, is because there are a plethora of hosting options out there who are all best suited to host one of these types of programs, but not both. We will cover a host provider for each type.

---

<a name = "demo1"></a>
## Deploy with GitHub Pages - Demo

When it comes to hosting a simple static site, such as a portfolio site, GitHub Pages is an excellent option. When you originally created your GitHub account in the beginning of the course, GitHub provided you with some free hosting benefits. With your GitHub account, you are allowed to host one site per each organization you have with GitHub Pages for free!

The following steps which will show you how to host a static site via GitHub Pages. After the demo, you will then go ahead and use these steps to host your very first site!

The first step is to create a new repository in [GitHub](https://github.com/)

![](https://s3.amazonaws.com/f.cl.ly/items/0i070B2z0g281N1O121N/Image%202016-01-05%20at%207.59.14%20PM.png?v=f87cabf8)

Unlike other GitHub repos you may have made before, the repository name is not arbitrary and must follow a certain structure, `<username>.github.io`. If the first part of the repository doesn’t exactly match your username, it won’t work, so make sure to get it right.

Next, clone your repository. In your terminal, go to the folder path where you want to store your project, and clone the new repository:

`git clone https://github.com/username/username.github.io`

If you see the following warning, don't worry about it:

![](https://s3.amazonaws.com/f.cl.ly/items/0E2E1n21450j3W3X473K/Image%202016-01-05%20at%208.17.48%20PM.png?v=5debf067)

Our repository is currently empty but we'll now fill it up with code for our site.

Change directory into the repo's folder:

`cd username.github.io`

and add a view, `index.html`:

`touch index.html`

I'll go ahead and give `index.html` a simple `h1`:

```html
<!DOCTYPE html>
<html lang="en">
<head>
</head>
<body>
  <h1>Hello World!</h1>
</body>
</html>
```

Now that the site is at a point where we can see something let's "push to production" and have GitHub Pages host our view. Since GitHub knows we want our code hosted based off the repository name we provided, all we have to do to deploy is push our code to GitHub like we normally would and GitHub Pages will take care of the rest. Do you remember the three main steps in using git to push code from local (our machine) to remote (GitHub)?

1. Add modified files and prepare for staging: `git add -A`
2. Stage your newly modified code and log it with a message: `git commit -m 'first commit'`
3. Push your code to your remote repository in GitHub: `git push origin master`

**Note:** When you push for the first time you need to add the option `-u` (upstream) to set the initial direction of your push. The first push will look as follows, `git push -u origin master`.

**Tip:** To better remember the three commands, `add`, `commit` and `push`, it may help you to remember this acronym for `ACP`, "always creating programs".

And that's it! The code has been deployed and if you visit the site, whose name is the same as the repository name, in this case, asaldivar.github.io, you can see the code hosted!

![](https://s3.amazonaws.com/f.cl.ly/items/0d402V2b441K3O3u0v0E/Image%202016-01-05%20at%209.53.44%20PM.png?v=01751fc6)

---

<a name = "lab1"></a>
## Deploy with GitHub Pages: Independent Practice

Goal: Create a simple site with HTML, CSS & JS and deploy to Git Hub Pages.

Go ahead and take the next half an hour to create a simple site consisting of three files: HTML, CSS and JS. This can be anything from a basic portfolio to a bejeweled fan site. Just make sure there is some JS interactivity. Once you have something basic you'd like to share with the world, go ahead and deploy to GitHub Pages. Also, you must deploy twice!

This is meant to be an independent exercise, but feel free to ask/answer questions amongst your neighbors.

---

<a name = "demo2"></a>
## How Is This Working?!

So now that you know how to deploy a simple site to a hosting service, you may be asking yourself, how exactly does the hosting work? I pushed my code somewhere into the wild world of the "interwebs" but how is it existing in the beyond? In one word, servers.

> A server is a computer program or a machine that waits for requests from other machines or software (clients) and responds to them. The purpose of a server is to share data or hardware and software resources among clients. This architecture is called the client–server model. - wikipedia

In terms of web applications, the main purpose of a server is to listen to requests coming from clients (i.e. browsers) and upon each request the server responds with the appropriate resources to fulfill the request. This could be the server redirecting to a whole new page and/or just providing some more data to the user interface. When we pushed our code up to GitHub for GitHub Pages to host we essentially told GitHub Pages that we'd like to utilize their server to deliver our resources (HTML, CSS and JS). More specifically, we told GitHub Pages that whenever someone comes to `username.github.io` serve all the code from `username/username.github.io`.

This brings us to our next point. What if we built out a full-stack application that already has a server? In our last lesson we utilized the BEaaS, Firebase, to build an application. What does BEaaS stand for again? _ǝɔᴉʌɹǝs ɐ sɐ puǝ-ʞɔɐq_ With Firebase, we were given a back-end and with that, a server. Can you see where we're going with this? If we have an application that already has its own server, would it still be appropriate to use a hosting service, like GitHub Pages, that provides our program with a server? The answer is no. Let us now look into another hosting option that is better suited for full-stack applications, not static sites.

---
<a name = "demo3"></a>
## Deploy with Heroku

Heroku is one of the most widely used hosting services for web applications in the world and provides many useful features. It is not just a hosting service but an entire cloud platform service. What this means is that instead of just hosting your code it provides features such as:

- Instant Deployment with Git push - build of your application is performed by Heroku using your build scripts.
- Plenty of Add-on resources (applications, databases etc).
- Full Logging and Visibility - easy access to all logging output from every component of your app and each process (dyno).
- Environment variables, which allow you to store sensitive information (like API keys) separately from your code.

To summarize the benefits of Heroku in one line, Heroku gives you an environment where you just push code and some basic configuration and as a result get a running application.

> Note: This is a great time to remind students that they **should never push API keys/secrets or other sensitive information up to GitHub!** Students should be able to push their API credentials up to Heroku without incident, however, this is not conisidered a best practice. Consider showing students how to use environment variables (known as "config vars" in Heroku parlance) [using the Heroku dashboard](https://devcenter.heroku.com/articles/config-vars) as part of the below lesson on Heroku.

With that all said, let's go to [Heroku](https://www.heroku.com/) and sign up!

Now that you have signed up, let's talk about how we can utilize Heroku to host our applications. When thinking of Heroku, it is best to view it in the same way as you do GitHub. It is simply a _remote_, a.k.a. a cloud, you push your code up to for hosting purposes.

For example, if you run the command `git remote -v` you will be returned with the remote that your application is connected to:

![](https://s3.amazonaws.com/f.cl.ly/items/0x2d2R1r1S381I3M2o17/Image%202016-03-13%20at%2010.33.28%20AM.png?v=e4437e5c)

What this screenshot tells us, is that every time we push our code using the command `git push origin master` we are in fact pushing to the remote `https://github.com/generalassembly-studio/JS_Materials.git`. Relating this process to how we need to also be able to push our code to heroku in order for it be hosted, we can infer two things: we need to add a heroku remote to our app and we need a CLI that will allow us to work with our remote and heroku. Let's start with the latter.

To get a heroku CLI, go to the [heroku toolbelt site](https://toolbelt.heroku.com/) and download the heroku toolbelt which will give you the ability to run heroku specific commands in your terminal.

Once you've completed your download, it's time to set up your app to be hosted! The first step is to begin tracking your app in git which we have already done in the GitHub Pages portion of the lesson. However, if you were starting from scratch the steps would be:

```bash
$ cd <your app>
$ git init
$ git add -A
$ git commit -m '<your first commit message>'
```
Next, create your heroku application and connect its remote utilizing your brand new CLI:

```bash
$ heroku create
```

To verify that a heroku remote was created, simply run:

```bash
$ git remote -v
```

You should see something like:

```bash
heroku  https://git.heroku.com/falling-wind-1624.git (fetch)
heroku  https://git.heroku.com/falling-wind-1624.git (push)
```

When you create your application, heroku takes the liberty of creating a random name for the application. In this case, `falling-wind-1624`. To create AND name your app at the same time simply throw on your custom app name as a second argument, `heroku create <app name>`. You can verify that your heroku app was created by navigating to your [heroku dashboard](https://dashboard.heroku.com/apps) and looking for the app by its name. Go ahead and take a few minutes to explore the different features of your app.

Once your heroku app has been successfully created and a heroku remote instantiated, you can now push your code up to be hosted! The steps are extremely similar to pushing to GitHub:

1. stage your code; `git add -A`
2. add a commite message; `git commit -m <your message>`
3. push your code to your heroku remote; `git push heroku master`

And that's it! Your can open your app in the browser with the command, `heroku open`, or simply visit the URI, `<your app name>.herokuapp.com`.

One thing to always remember is that your Heroku and GitHub remotes are two totally separate clouds, so when you want to push to GitHub, push to Github, and when you want to push to Heroku push to Heroku.

**note:** If you are receiving an error when you run `git push heroku master` such as, `Heroku push rejected, no Cedar-supported app detected` you may have be experiencing a git issue. In order to get around this issue, you may need to remove your app's git connection and re-initialize git and heroku. This can be done with the following commands

```bash
$ rm -rf .git
$ git init
$ git add .
$ git commit -m "First commit"
$ heroku create --stack cedar
$ git push heroku master
```

---
<a name = "lab2"></a>
## Customize Your Heroku/Firebase Application: Independent Practice (35 min)

Now that you know how to generate a full-stack application with the Firebase and how to host it on Heroku, practice customizing the application! Technically, we have built a Firebase hosted server-side API that we've been pinging from our app's front-end, but ff you would like explore how to use Firebase solely on the server-side of this application feel free to checkout [this](https://www.npmjs.com/package/firebase) tutorial, but more importantly, take this time to practice what you've just learned and to customize your app. After you make some changes that you'd like to be reflected in production (in the browser) practicing running the proper commands to push the proper remotes from the app's path in your terminal.

---
<a name = "conclusion"></a>
## Conclusion (5 min)

Review class objectives and the following questions:

- Why would you want to use GitHub Pages over Heroku and vice versa?
- What's the difference between a static site and a web application?
- What is the purpose of a server?
- What should you never push up to GitHub?

