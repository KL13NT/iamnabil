---
title: Streamlining Courseware Maintenance as Code
path: streamlining-courseware-maintenance-as-code
cover: https://images.unsplash.com/photo-1606761568499-6d2451b23c66?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop
date: 2023-01-21
description: "Courseware as Code is the process of producing courseware from
  code. In this article I talk about how I build the Courseware as Code Action.
  "
lang: en
category: education
---
Courseware as Code is a revolutionary approach to designing, creating, and maintaining course content and all related assets. According to the Army Cyberschool, "Leveraging applicable aspects of the software development lifecycle to courseware facilitates discussions of suggested changes amongst faculty, provides transparency in updates, enables custom workﬂows based on the complexity of course content, and allows faculty, students, and workforce members to identify issues and contribute Content."

## Motivation

The idea stood out to me when I was applying during the Google Summer of Code 2021 round. I had come across a GitLab Education Program called [Courseware as Code and GitLab]. The project idea instantly caught my attention because I struggled heavily with the course content I was provided during my student years. 

As I wrote in 2021: 

> I'm tired of having to deal with outdated knowledge in the courses I'm enrolled in. I'm tired of having no way of contributing to the course I'm taking, nor a choice in how content  is presented to me.

This prompted me to create a project that provides a number of values for everyone involved. 

## Values

I designed this project how I envisioned it 2 years ago. Transparency, humbleness, appreciating collaboration, and support are the pillars of my vision with this project.

- Transparency in admitting your mistakes as a course maintainer and letting the
  history of your changes be visible to the world.
- Humbleness in accepting that you can make mistakes, and in accepting help and
  contribution from students who may be decades younger than you and ages less
  experienced than you.
- Appreciating collaboration in showing how grateful you are that maintainers
  and students are putting in the effort to improve the courseware, and in
  providing a healthy environment for collaboration between maintainers and
  students alike.
- Support in providing the help needed in order for others to contribute comfortably
  to courses you maintain, and in creating a community of respect. This meant
  the world to me and I'm sure millions of other students as well.

## How it Works

![how it works graph](https://github.com/KL13NT/courseware-as-code-action/raw/main/docs/2023-01-20-0109.png)

The action works by downloading a NextJS template, moving the markdown
collections into the template directory, and executing `next build && next export` to
export static assets in the output directory.

Why not just a template repo with NextJS and everything else in one repo? Because I wanted to make the source repo for course content as friendly as possible. I didn't want a student or instructor to be pushed away by a complicated repository with tons of config files and source TypeScript modules.

I also wanted this project to be as customizable as possible. Having the action the way it is allows me to extend it later to allow for custom NextJS templates, a completely different workflow, etc. 

This decision allowed me to keep my assumptions slim to none and therefore have an easily customisable solution. This is a raw attempt and is not the best way something like this could be built, but it's a positive step towards my vision.

## Where Can I Try It?

You can explore the source code and all the documentation on the [repository]. I welcome your feedback with a warm smile. If you're a student wishing to try this project out do tell your instructors! You can create a repo from the template [example] to try things out.

Ping me on [Twitter], [Facebook], and [Discord] to tell me how it goes!

## Become a Sponsor

I invest a lot of my personal time and energy to maintain this project ([and
others!](https://github.com/KL13NT/)). If you'd like to sponsor me I have a
[GitHub Sponsors] profile up!


[courseware as code and gitlab]: https://gitlab.com/gitlab-com/marketing/community-relations/education-program/general/-/issues/88
[repository]: https://github.com/KL13NT/courseware-as-code-action
[example]: https://github.com/KL13NT/courseware-as-code-example
[twitter]: https://twitter.com/kl13nt
[facebook]: https://www.facebook.com/kl13nt/
[discord]: https://discord.com/users/238009405176676352
[github sponsors]: https://github.com/sponsors/KL13NT