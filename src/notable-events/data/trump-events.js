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
    date: new Date('2020-02-29'),
    type: 'UPDATE',
    update: [
      {
        text: 'FDA eases guidelines to encourage more testing',
        source:
          'https://www.whitehouse.gov/briefings-statements/statement-press-secretary-regarding-presidents-coronavirus-task-force/',
      },
    ],
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
    type: 'TWEET',
    date: new Date('2020-04-06'),
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
    type: 'UPDATE',
    date: new Date('2020-04-13'),
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
    date: new Date('2020-04-17'),
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
    date: new Date('2020-04-18'),
    source: 'https://twitter.com/realDonaldTrump/status/1240243188708839424',
    content:
      'I always treated the Chinese Virus very seriously, and have done a very good job from the beginning, including my very early decision to close the “borders” from China - against the wishes of almost all. Many lives were saved. The Fake News new narrative is disgraceful & false!',
  },
  {
    type: 'UPDATE',
    date: new Date('2020-04-18'),
    update: [
      {
        text: 'US senate reveals a $1 trillion economic stimulus package',
        source: 'https://www.wsj.com/articles/senate-republicans-prepare-third-coronavirus-measure-11584622892',
      },
    ],
  },
]

// pretty good starting point for trump https://www.poynter.org/fact-checking/2020/we-have-it-totally-under-control-a-timeline-of-president-donald-trumps-response-to-the-coronavirus-pandemic/
