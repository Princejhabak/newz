export const LANGUAGES = [
    {
      key: "ar",
      value: "Arabic" 
    },
    {
      key: "de",
      value: "German" 
    },
    {
      key: "en",
      value: "English" 
    },
    {
      key: "es",
      value: "Spanish" 
    },
    {
      key: "fr",
      value: "French" 
    },
    {
      key: "he",
      value: "Hebrew" 
    },
    {
      key: "it",
      value: "Italian" 
    },
    {
      key: "nl",
      value: "Dutch" 
    },
    {
      key: "no",
      value: "Norwegian" 
    },
    {
      key: "pt",
      value: "Portuguese" 
    },
    {
      key: "ru",
      value: "Russian" 
    },
    {
      key: "se",
      value: "Swedish" 
    },
    {
      key: "zh",
      value: "Chinese" 
    }
]

export const CATEGORIES = [
    {
        key: 'general',
        value: 'General',
        checked: false
    },
    {
        key: 'business',
        value: 'Business',
        checked: false
    },
    {
        key: 'entertainment',
        value: 'Entertainment',
        checked: false
    },
    {
        key: 'health',
        value: 'Health',
        checked: false
    },
    {
        key: 'science',
        value: 'Science',
        checked: false
    },
    {
        key: 'sports',
        value: 'Sports',
        checked: false
    },
    {
        key: 'technology',
        value: 'Technology',
        checked: false
    },
]

export const COUNTRIES = [
    {
        value: 'Australia',
        key: 'au',
        checked: false
    },
    {
        value: 'Canada',
        key: 'ca',
        checked: false
    },
    {
        value: 'China',
        key: 'cn',
        checked: false
    },
    {
        value: 'France',
        key: 'fr',
        checked: false
    },
    {
        value: 'India',
        key: 'in',
        checked: false
    },
    {
        value: 'Japan',
        key: 'jp',
        checked: false
    },
    {
        value: 'United States',
        key: 'us',
        checked: false
    },
]

export const SORT_BY = [
    {
        key: 'published_desc',
        value: 'Date (newest)',
        checked: true
    },
    {
        key: 'published_asc',
        value: 'Date (oldest)',
        checked: false
    },
    {
        key: 'popularity',
        value: 'Popularity',
        checked: false
    }
]

export const SPORTS_DATA = {
  pagination: {
    limit: 25,
    offset: 0,
    count: 25,
    total: 10000
  },
  data: [
    {
      author: "Edward Sutelan",
      title: "Yankees Aroldis Chapman sent to the IL with an infection that developed after he got a leg tattoo",
      description: "It just hasnt been Chapmans year.",
      url: "https://www.sportingnews.com/us/mlb/news/yankees-aroldis-chapman-il-infection-tattoo/ojuhsqo5w920xsbony0m9eu5",
      source: "Sporting News",
      image: "https://library.sportingnews.com/2022-08/Aroldis-Chapman-082722-Getty-FTR.jpg",
      category: "sports",
      language: "en",
      country: "us",
      published_at: "2022-08-28T03:33:31+00:00"
    },
    {
      author: "",
      title: "Pagan's brutal recollection of Blues tenure",
      description: "Denis Pagan says his decision to coach Carlton is the biggest regret of his incredible career",
      url: "https://www.theage.com.au/sport/afl/pagans-brutal-recollection-of-blues-tenure-20220828-p5bdcy.html?ref=rss&utm_medium=rss&utm_source=rss_sport",
      source: "The Age",
      image: "https://static.ffx.io/images/$width_800%2C$height_450/t_crop_fill/q_86%2Cf_jpg/e5b7167b1432f7dfcc48013964f258dee94165fb",
      category: "sports",
      language: "en",
      country: "au",
      published_at: "2022-08-28T03:32:03+00:00"
    },
  ]
}