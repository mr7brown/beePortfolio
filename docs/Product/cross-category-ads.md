---
sidebar_label: "How cross-category ads improve reach for coffee advertisers"
sidebar_position: 3
tags: [Data Analytics, Amazon, Advertising]
---

# How cross-category ads improve reach for coffee advertisers

:::note Note:

Here is a [link to the published article](https://advertising.amazon.com/en-us/library/research/coffee-marketing/?ref_=a20m_us_libr) on Amazon's Advertising site.

:::

Advertisers currently use Amazon Ads performance metrics to view and optimize their return on ad spend. They especially optimize for, and advertise to, audiences who’ve previously purchased from and shopped for their product or product’s category. However, many advertisers are unaware that this is not the only way to grow their business with Amazon Ads. In fact, we find that advertisers may be missing opportunities to reach more customers by not accounting for customers’ propensity to shop across multiple categories.

In this study of purchases between January and February 2020, we surface the best cross-category audiences for coffee brands selling on Amazon.fr. To perform our analysis, we employ a machine learning algorithm based on cross-category queries and purchases across 110 subcategories in the Grocery, Beauty, and Health and Personal Care verticals.

We find three ways coffee advertisers on Amazon.fr can reach the correct audiences and potentially increase sales, which we explore in greater detail in this article.

## Coffee advertisers can reach in-market customers

On Amazon.fr there are 16 Grocery categories, with Beverages being the largest in terms of total sales. For Beverages, we find that the majority (46%) of customers enter through Coffee.

### 46% of Amazon.fr Beverage customers enter the category through Coffee products

![new-to-brand customers](/img/coffee1.png)

## Coffee advertisers can reach new customers in adjacent categories with high purchase overlap

We also find that in-market customers are not the only entry point. One way to reach more customers is to advertise to audiences browsing in adjacent subcategories, who have a high propensity to purchase coffee.

For example, we find that adjacent subcategory shoppers of Tea, Hot Chocolate/Cocoa, and Soft Drinks & Mixers are more than 3.5x as likely to browse for Coffee and 2.7x to 5.8x times more likely to purchase Coffee than the average customer on Amazon.fr.

![new-to-brand customers](/img/coffee2.png)

Further, we find that more than 51% of Beverage shoppers browse for coffee on Amazon.fr at least once per month, and more than 63% of Beverage shoppers purchased coffee at least once per month between 2020 and 2021. This means that many customers who are purchasing adjacent beverage products are also browsing for and purchasing coffee.

![new-to-brand customers](/img/coffee3.png)

Coffee advertisers can reach customers in non-adjacent categories with high purchase overlap
Similar to adjacent Coffee subcategories, we find that there is potential for advertisers to reach Coffee customers in non-adjacent categories on Amazon.fr. In one example, we find that more than 18% of the Household and Personal Care category shoppers also shop for “coffee” (3x higher than the average Amazon customer), and 4% of Household and Personal Care customers make a purchase (2x higher than the average Amazon customer).

![new-to-brand customers](/img/coffee4.png)

---

![new-to-brand customers](/img/coffee5.png)

We also find that that there are subcategories within Health and Personal Care that over-index in search and purchase frequency. For example, the Face and Multivitamins search likelihood is 3.5x to 3.7x higher than the average Amazon.fr customer, which is similar to the percentages of adjacent subcategories: Tea, Hot Chocolate/Cocoa, and Soft Drinks & Mixers. Purchase probabilities are also higher, ranging from 1.2x to 1.8x higher than the average Amazon.fr customer.

A final note is on the number of Health and Personal Care buyers versus Coffee buyers. There are 20x more customers browsing for Health and Personal Care products than there are Coffee buyers on Amazon.fr.

## Conclusion

As seen in this analysis, there are multiple ways Coffee advertisers can potentially reach more customers. We recommend that advertisers in the Coffee category on Amazon.fr continue advertising to audiences browsing and purchasing their product or related products within the category. We also recommend that advertisers look to reach new audiences with a high propensity to purchase coffee, such as Tea, Hot Chocolate/Cocoa, and Soft Drinks & Mixers consumers; as well as select non-coffee-related products such as multivitamins and facial care.

## Methodology

This analysis begins by examining browse and buy behaviors across Amazon.fr categories within the Grocery, Beauty, and Health and Personal Care verticals. To find the best cross-selling opportunities, we employ a data-mining algorithm to identify cross-category selling/searching patterns instead of relying on simple descriptive data, such as repeat purchase rate.

To perform our study we conduct two analyses:

1. Apriori analysis for purchase. This analysis examines the associated subcategories of purchases. The analysis proves that cross-category promotions represent an important opportunity for conversion based cross-category campaigns.
2. Apriori analysis for queries. This analysis examines associated, overlapping, subcategories that customers tend to search for. The analysis focuses on upper-funnel measurement to demonstrate Amazon Ads’ omnichannel impact through cross-category selling.

:::tip Note:

Note: In Apriori analysis, the most important metric is “lift,” which is different from the “lift” often referred to in the advertising industry. To avoid confusion driven by the intended audience of this article, including many professionals in the advertising industry, the author describes the term “lift” as “probability increase of purchase/query.”

:::

## Apriori analysis for purchase

Based on business input and computing power constraints, we include orders and queries from the following four top-selling categories: Beverage, Condiments, Spreads & Cooking, Skin Care, and Nutrition and Wellness. They are composed of 110 subcategories. We group orders into subcategory buckets, transform them into the transactional format, and then apply the Apriori algorithm to mine association rules among the subcategories. In the algorithm, all orders from one customer measured as a single transaction or one basket of products. The algorithm yields a list of more than one thousand rules, and we filter only to select the rules that: contain Coffee as the constant, have a purchase probability increase (lift) that is equal to or greater than 1.2, and a confidence (relative frequency) that is equal to or greater than 5%.

We then use the chi-square test to validate the lift result for the selected rules. We conduct a two-by-two chi-square test for each set of rules with one degree of freedom and an alpha of 0.05. We recommend advertisers to start with subcategories that have statistically significant lift for cross-category selling/searching.

To find the most representative result and avoid influence from seasonality or behavior change due to unusual, one-off 2020 events, we analyze transactions from six time periods across 2019 and 2020. Each period includes a two-month interval. The present study only covers formal results from January 2020 through February 2020; results from the other five periods are used only for validation. We select the period from January 2020 through February 2020 as the main period from which we seek to discover insights for three reasons:

This period is more recent than other periods in 2019, which we expect will make it more relevant to the current market.
We did not want the result to be influenced by behavior change due to unusual, one-off 2020 events.
Results are consistent across six independent studies. Specifically, six out of the seven rules are the same across 2020 results, and five out of the seven rules are consistent across 2019 and 2020 results.
As a result, we found that cross-category purchase behavior is consistent across the six periods we studied. Hence, the result of this paper is based on data ranging from January to February in 2020.

## Apriori analysis for queries

Because the result from purchase data only tells what categories customers like to purchase together on Amazon, we conduct an upper-funnel-focused measurement to demonstrate Amazon Ads’ an omnichannel impact. To achieve this, we apply the same methodology with the query data analysis to find an awareness-focused association. We pull all queries from the seven associated subcategories for the twelve-month study period, apply the Apriori algorithm, and conduct a chi-square test for validation. As a result, the association rules are consistent with the search dataset and prove that there is an opportunity to build awareness through cross-category promotion.
