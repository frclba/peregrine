# Script Author: Martin Beck
# Medium Article Follow-Along: https://medium.com/better-programming/how-to-scrape-tweets-with-snscrape-90124ed006af

# Pip install the command below if you don't have the development version of snscrape 
# !pip install git+https://github.com/JustAnotherArchivist/snscrape.git

# Run the below command if you don't already have Pandas
#!pip install pandas

# Imports
import snscrape.modules.twitter as sntwitter
import pandas as pd

# Below are two ways of scraping using the Python Wrapper.
# Comment or uncomment as you need. If you currently run the script as is it will scrape both queries
# then output two different csv files.

# Query by username
# Setting variables to be used below
maxTweets = 3000

# Creating list to append tweet data to
tweets_list1 = []

# Using TwitterSearchScraper to scrape data 
for i,tweet in enumerate(sntwitter.TwitterSearchScraper('from:fernand0aguilar').get_items()):
    if i>maxTweets:
        break
    without_mentions = tweet.content.split("@", 1)[0]
    without_links = without_mentions.split("https://", 1)[0]
    tweets_list1.append([without_links])

# Creating a dataframe from the tweets list above
tweets_df1 = pd.DataFrame(tweets_list1, columns=['Tweet Content'])

# Display first 5 entries from dataframe
tweets_df1.head()

# Export dataframe into a CSV
tweets_df1.to_csv('user-tweets.csv', sep=';', index=False)
