export const trumpEvents = [
  {
    type: 'QUOTE',
    date: new Date('2020-01-22'),
    quote: `No. Not at all. And we have it totally under control. It’s one person coming in from China, and we have it under control. It’s — going to be just fine.`,
    source: 'CNBC',
    sourceLink:
      'https://www.cnbc.com/2020/01/22/cnbc-transcript-president-donald-trump-sits-down-with-cnbcs-joe-kernen-at-the-world-economic-forum-in-davos-switzerland.html',
  },
  {
    type: 'TWEET',
    date: new Date('2020-01-24'),
    source: 'https://twitter.com/realDonaldTrump/status/1220818115354923009',
    content:
      'China has been working very hard to contain the Coronavirus. The United States greatly appreciates their efforts and transparency. It will all work out well. In particular, on behalf of the American People, I want to thank President Xi!',
  },
  {
    date: new Date('2020-01-29'),
    type: 'UPDATE',
    update: [
      {
        text: 'Coronavirus response force task force',
        source:
          'https://www.whitehouse.gov/briefings-statements/statement-press-secretary-regarding-presidents-coronavirus-task-force/',
      },
    ],
  },
  {
    type: 'QUOTE',
    date: new Date('2020-01-30'),
    update: [
      {
        text: `Trump blocks travel from China`,
        source:
          'https://www.whitehouse.gov/presidential-actions/proclamation-suspension-entry-immigrants-nonimmigrants-persons-pose-risk-transmitting-2019-novel-coronavirus/',
      },
    ],
    quote: `We think we have it very well under control. We have very little problem in this country at this moment... we think it’s going to have a very good ending for it.`,
    sourceLink: `https://www.whitehouse.gov/briefings-statements/remarks-president-trump-usmca-celebration-american-workers-warren-mi/`,
    source: 'Trump Iowa Rally',
  },
  {
    type: 'QUOTE',
    date: new Date('2020-02-02'),
    quote: 'We pretty much shut it down coming in from China.',
    source: 'https://www.foxnews.com/travel/airlines-us-coronavirus-outbreak-travelers-china',
  },
  {
    type: 'QUOTE',
    date: new Date('2020-02-10'),
    quote: '"...you know, a lot of people think that [coronavirus] goes away in April with the heat."',
    source:
      'https://www.whitehouse.gov/briefings-statements/remarks-president-trump-white-house-business-session-nations-governors/',
  },
  {
    type: 'TWEET',
    date: new Date('2020-02-24'),
    update: [
      {
        text: `Trump Requests 1.25 billion in emergency funding`,
        source: 'https://www.politico.com/news/2020/02/24/trump-coronavirus-budget-request-117275',
      },
    ],
    content:
      'The Coronavirus is very much under control in the USA. We are in contact with everyone and all relevant countries. CDC & World Health have been working hard and very smart. Stock Market starting to look very good to me!',
    source: 'https://twitter.com/realDonaldTrump/status/1232058127740174339',
  },
  {
    type: 'QUOTE',
    date: new Date('2020-02-26'),
    update: [
      {
        text: `VP Mike Pence put in charge of task force`,
        source:
          'https://www.whitehouse.gov/briefings-statements/remarks-president-trump-vice-president-pence-members-coronavirus-task-force-press-conference/',
      },
      {
        text: `Trump claims media is conspiring with democrats to hype the coronavirus and rattle the markets.`,
        source: `https://twitter.com/realDonaldTrump/status/1232652371832004608?s=20`,
      },
      {
        text: `Trump claims coronavirus is "going very substantially down, not up."`,
        source:
          'https://www.whitehouse.gov/briefings-statements/remarks-president-trump-vice-president-pence-members-coronavirus-task-force-press-conference/',
      },
    ],
    quote: 'It is what it is.  We’re ready for it.  We’re really prepared.',
    source:
      'https://www.whitehouse.gov/briefings-statements/remarks-president-trump-vice-president-pence-members-coronavirus-task-force-press-conference/',
  },
  {
    type: 'QUOTE',
    date: new Date('2020-02-27'),
    quote: 'It’s going to disappear.  One day — it’s like a miracle — it will disappear.',
    source: 'https://www.whitehouse.gov/briefings-statements/remarks-president-trump-meeting-african-american-leaders/',
  },
  {
    type: 'TWEET',
    date: new Date('2020-03-06'),
    update: [
      {
        text: `Grand Princess cruise ship waits to dock off California coast`,
        source:
          'https://6abc.com/health/live-coronavirus-updates-grand-princess-cruise-ship-anchors-in-sf-bay/5996768/',
      },
      {
        text: `Trump says: "I would rather because I like the numbers being where they are. I don’t need to have the numbers double because of one ship."`,
        source:
          'https://www.washingtonpost.com/politics/2020/03/07/which-is-trump-more-worried-about-coronavirus-numbers-or-coronavirus-patients/',
      },
      {
        text: `Testing is in short supply`,
        source:
          'https://www.politifact.com/factchecks/2020/mar/11/donald-trump/donald-trumps-wrong-claim-anybody-can-get-tested-c/',
      },
    ],
    source: 'https://twitter.com/realDonaldTrump/status/1236975196642390022',
    content:
      'The Fake News Media and their partner, the Democrat Party, is doing everything within its semi-considerable power (it used to be greater!) to inflame the CoronaVirus situation, far beyond what the facts would warrant. Surgeon General, “The risk is low to the average American.”',
  },
  {
    type: 'TWEET',
    date: new Date('2020-03-09'),
    source: 'https://twitter.com/realDonaldTrump/status/1237027356314869761',
    content:
      'So last year 37,000 Americans died from the common Flu. It averages between 27,000 and 70,000 per year. Nothing is shut down, life & the economy go on. At this moment there are 546 confirmed cases of CoronaVirus, with 22 deaths. Think about that!',
  },
  {
    type: 'QUOTE',
    date: new Date('2020-03-10'),
    quote: `It will go away. Just stay calm. It will go away.`,
    source: 'whitehouse.gov',
    sourceLink:
      'https://www.whitehouse.gov/briefings-statements/remarks-president-trump-meeting-republican-senators-2/?utm_source=link&utm_medium=header',
  },
  {
    type: 'QUOTE',
    date: new Date('2020-03-13'),
    quote: `I don't take responsibility at all.`,
    source: 'Press Event in Rose Garden',
    sourceLink:
      'https://www.washingtonpost.com/video/politics/i-dont-take-responsibility-at-all-trump-says-on-lack-of-coronavirus-tests/2020/03/13/bfdbdf63-784c-4392-831e-29010ae3b1ac_video.html?itid=lk_inline_manual_37',
  },
  {
    type: 'UPDATE',
    date: new Date('2020-03-13'),
    update: [
      {
        text: `Trump declares national emergency`,
        source:
          'https://webcache.googleusercontent.com/search?q=cache:WJXrQ5xGXj0J:https://www.whitehouse.gov/briefings-statements/remarks-president-trump-vice-president-pence-members-coronavirus-task-force-press-conference-3/+&cd=1&hl=en&ct=clnk&gl=us',
      },
    ],
  },
  {
    type: 'UPDATE',
    date: new Date('2020-03-17'),
    update: [
      {
        text: `Trump requests a 2 week national quarantine - "we’re asking everyone to work at home, if possible, postpone unnecessary travel, and limit social gatherings to no more than 10 people."`,
        source:
          'https://www.whitehouse.gov/briefings-statements/remarks-president-trump-vice-president-pence-members-coronavirus-task-force-press-briefing-4/',
      },
      {
        text: `Trump falsely claims that the tests the WHO offered to the US are "...a bad test." - WHO had the tests validated by 3 independent labs`,
        source:
          'https://www.c-span.org/video/?470426-1/president-trump-urges-states-follow-coronavirus-guidelines&start=4920',
      },
    ],
  },
  {
    type: 'TWEET',
    date: new Date('2020-03-18'),
    source: 'https://twitter.com/realDonaldTrump/status/1240243188708839424',
    content:
      'I always treated the Chinese Virus very seriously, and have done a very good job from the beginning, including my very early decision to close the “borders” from China - against the wishes of almost all. Many lives were saved. The Fake News new narrative is disgraceful & false!',
  },
  {
    type: 'UPDATE',
    date: new Date('2020-03-18'),
    update: [
      {
        text: `Trump partially invokes defense production act. Stopping short of mandating production`,
        source: 'https://www.cnn.com/2020/03/18/politics/trump-defense-production-act-coronavirus/index.html',
      },
    ],
  },
  {
    type: 'UPDATE',
    date: new Date('2020-03-27'),
    update: [
      {
        text: `Trump Signs $2.2 Trillion emergency spending bill`,
        source: `https://www.whitehouse.gov/briefings-statements/remarks-president-trump-signing-h-r-748-cares-act/`,
      },
      {
        text: `Trump falsely claims that the tests the WHO offered to the US are "...a bad test." - WHO had the tests validated by 3 independent labs`,
        source:
          'https://www.c-span.org/video/?470426-1/president-trump-urges-states-follow-coronavirus-guidelines&start=4920',
      },
    ],
  },
  {
    type: 'QUOTE',
    date: new Date('2020-03-29'),
    quote: `Nothing would be worse than declaring victory before the victory is won.  That would be the greatest loss of all.`,
    source: 'Whitehouse.gov',
    sourceLink:
      'https://www.whitehouse.gov/briefings-statements/remarks-president-trump-vice-president-pence-members-coronavirus-task-force-press-briefing-14/',
  },
  {
    type: 'UPDATE',
    date: new Date('2020-03-30'),
    update: [
      {
        text:
          'Trump falsely claims that "We Inherited a broken test". Despite the fact that the CDC designed, validated, and deployed the test after Trump refused tests from the WHO',
        source: 'https://youtu.be/-iEhLe5G4RU?t=367',
      },
    ],
  },
  {
    type: 'UPDATE',
    date: new Date('2020-04-02'),
    update: [
      {
        text: `Trump expands useage of Defense Production Act`,
        source: 'https://www.politico.com/news/2020/04/02/trump-expands-dpa-order-162128',
      },
    ],
  },
  {
    type: 'UPDATE',
    date: new Date('2020-04-03'),
    update: [
      {
        text: `Trump says he won't wear a mask`,
        source: `https://www.nytimes.com/video/us/politics/100000007070943/trump-mask-coronavirus.html`,
      },
    ],
  },
  {
    type: 'UPDATE',
    date: new Date('2020-04-13'),
    update: [
      {
        text: `Trump claims legal right to overrule governor lockdowns`,
        source: 'https://twitter.com/atrupar/status/1249834213899206659',
      },
    ],
  },
  {
    type: 'UPDATE',
    date: new Date('2020-04-13'),
    update: [
      {
        text: `Trump claims total authority`,
        source: 'https://twitter.com/atrupar/status/1249834932513505280',
      },
    ],
  },
  {
    type: 'UPDATE',
    date: new Date('2020-04-14'),
    update: [
      {
        text: `Trump announces plans to halt funding to the World Health Organization.`,
        source: 'https://www.politico.com/news/2020/04/14/trump-world-health-organization-funding-186786',
      },
    ],
  },
  {
    type: 'UPDATE',
    date: new Date('2020-04-16'),
    update: [
      {
        text: `Trump releases guidelines on reopening the economy.`,
        source: 'https://www.whitehouse.gov/wp-content/uploads/2020/04/Guidelines-for-Opening-Up-America-Again.pdf',
      },
    ],
  },
  {
    type: 'UPDATE',
    date: new Date('2020-04-17'),
    update: [
      {
        text: `Trump tweets to "liberate" states, but only does so to states with democratic governors`,
        source: 'https://twitter.com/realdonaldtrump/status/1251168994066944003',
      },
    ],
  },
  {
    type: 'TWEET',
    date: new Date('2020-04-17'),
    source: 'https://twitter.com/realdonaldtrump/status/1251168994066944003',
    content: `LIBERATE MINNESOTA!`,
  },
  {
    type: 'TWEET',
    date: new Date('2020-04-17'),
    source: 'https://twitter.com/realdonaldtrump/status/1251169987110330372',
    content: `LIBERATE VIRGINIA, and save your great 2nd Amendment. It is under siege!`,
  },
  {
    type: 'UPDATE',
    date: new Date('2020-04-22'),
    update: [
      {
        text: `Trump claims it's too soon to re-open.`,
        source:
          'https://www.ajc.com/blog/politics/too-soon-trump-urges-kemp-reverse-coronavirus-rollback/bUQsnksgvm8vmrTQonrNtK/',
      },
    ],
  },
  {
    type: 'UPDATE',
    date: new Date('2020-04-23'),
    update: [
      {
        text: `Trump suggests treating Coronavirus by getting disinfectant and light inside the body.`,
        source: 'https://www.youtube.com/watch?v=zicGxU5MfwE&feature=emb_title',
      },
    ],
  },
  {
    type: 'UPDATE',
    date: new Date('2020-04-29'),
    update: [
      {
        text: `Trump administration allows federal lockdown order to end.`,
        source: 'https://www.politico.com/news/2020/04/29/end-of-social-distancing-rules-coronavirus-223505',
      },
    ],
  },
  {
    type: 'UPDATE',
    date: new Date('2020-05-03'),
    update: [
      {
        text: `Trump revises his death estimate to 75-100k.`,
        source: 'https://www.whitehouse.gov/briefings-statements/remarks-president-trump-fox-news-virtual-town-hall/',
      },
    ],
  },
  {
    type: 'QUOTE',
    date: new Date('2020-05-08'),
    quote: `All of them, not everyone would want to admit it, but they all view us as the world leader, and they're following us`,
    source: 'FOX',
    sourceLink: `https://twitter.com/atrupar/status/1258810288117297153`,
  },
  {
    type: 'UPDATE',
    date: new Date('2020-05-09'),
    update: [
      {
        text: `Although many states have yet to meet the minimum requirements for reopening based on the White House’s guidelines, Trump continues to push for the reopening of nonessential businesses, using the slogan “TRANSITION TO GREATNESS!”`,
        source: 'https://twitter.com/realDonaldTrump/status/1259153410756153350',
      },
    ],
  },
  {
    type: 'UPDATE',
    date: new Date('2020-05-09'),
    update: [
      {
        text: `Although many states have yet to meet the minimum requirements for reopening based on the White House’s guidelines, Trump continues to push for the reopening of nonessential businesses, using the slogan “TRANSITION TO GREATNESS!”`,
        source: 'https://twitter.com/realDonaldTrump/status/1259153410756153350',
      },
    ],
  },
  {
    type: 'UPDATE',
    date: new Date('2020-05-10'),
    update: [
      {
        text: `Trump attacks Obama H1N1 response`,
        source: 'https://twitter.com/realDonaldTrump/status/1259450328048709633',
      },
    ],
  },
  {
    type: 'UPDATE',
    date: new Date('2020-05-11'),
    update: [
      {
        text: `Trump claims that "We have met the moment and prevailed"`,
        source: 'https://twitter.com/AmerIndependent/status/1259943211243634694',
      },
    ],
  },
  {
    type: 'UPDATE',
    date: new Date('2020-05-18'),
    update: [
      {
        text: `Trump claims that "We have met the moment and prevailed"`,
        source: 'https://twitter.com/AmerIndependent/status/1259943211243634694',
      },
    ],
  },
  {
    type: 'UPDATE',
    date: new Date('2020-05-21'),
    update: [
      {
        text: `Trump claims "I was so early. I was earlier than anybody thought." in response to study`,
        source:
          'https://thehill.com/homenews/administration/498985-trump-calls-columbia-study-showing-effects-of-earlier-coronavirus',
      },
    ],
  },
  {
    type: 'UPDATE',
    date: new Date('2020-05-23'),
    update: [
      {
        text: `Trump goes golfing as US deaths near 100k`,
        source: 'https://www.cnn.com/2020/05/23/politics/trump-golf-course-sterling-virginia/index.html',
      },
    ],
  },
  {
    type: 'UPDATE',
    date: new Date('2020-05-23'),
    update: [
      {
        text: `Trump bans non-US citizens traveling from Brazil from entering the country`,
        source: 'https://thehill.com/homenews/administration/499399-trump-imposes-travel-restrictions-on-brazil',
      },
    ],
  },
  {
    type: 'UPDATE',
    date: new Date('2020-05-26'),
    update: [
      {
        text: `Trump praises himself for stopping travel from China early`,
        source: 'https://twitter.com/realDonaldTrump/status/1265301249630654467',
      },
    ],
  },
  {
    type: 'UPDATE',
    date: new Date('2020-07-11'),
    update: [
      {
        text: `Trump wears a mask in public for the first time`,
        source: 'https://www.foxnews.com/politics/trump-wears-face-mask-in-public-first-time-coronavirus',
      },
    ],
  },
  {
    type: 'TWEET',
    date: new Date('2020-10-01'),
    source: `https://twitter.com/realDonaldTrump/status/1311892190680014849`,
    content: `Tonight, @FLOTUS and I tested positive for COVID-19. We will begin our quarantine and recovery process immediately. We will get through this TOGETHER!`,
  },
]

// pretty good starting point for trump https://www.poynter.org/fact-checking/2020/we-have-it-totally-under-control-a-timeline-of-president-donald-trumps-response-to-the-coronavirus-pandemic/

// another source: https://www.politifact.com/article/2020/mar/20/how-donald-trump-responded-coronavirus-pandemic/
