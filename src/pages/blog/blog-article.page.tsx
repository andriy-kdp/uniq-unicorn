import React from "react";
import parse from "html-react-parser";
import MockImage from "../../assets/images/backgrounds/blog/mock_article_image.png";
import { Section } from "../../components/section/section.component";
import { articleDataAttribs } from "../../theme/global";
import { Blog } from "./blog.styles";
const { Article } = Blog;
const mockArticle = `<img ${articleDataAttribs.Img} src=${MockImage} />
<h3 ${articleDataAttribs.H3}>Travel to fill your heart, but not with a filled wallet | WB21</h3>
<div ${articleDataAttribs.Div}>
  <p ${articleDataAttribs.P}>For travellers around the world, this will sound true as we ourselves know how travel brings a new light to our
    lives. In a market research conducted by a social website about the happiness quotient in people’s lives, people
    opened up and expressed their opinion that one reason for lacking happiness was that they live a monotonous life.
    The principle wake, work, sleep is now working perfectly on the global population and it makes people feel that
    they
    are losing out the excitement of life. Statistics states that 59% of travel-related searches on the internet are
    coming from those aged between 35-64 which denotes at what age people recognise the value of travel in their life.
  </p>
</div>

<blockquote ${articleDataAttribs.Blockquote}>
<h4>“The world is a book, and those who do not travel read only a page.” <br /></h4>
  Saint Augustine
</blockquote>

<h3 ${articleDataAttribs.H3}>Understand Travel</h3>

<div ${articleDataAttribs.Div}>
<p ${articleDataAttribs.P}> Why do you travel? is a question regular travellers face from different people that come across their lives. Our life
  is a journey, people believe; but, nobody accepts the fact that travel is a necessary process in our lives. Even
  though
  everyone travels, they fail to understand how valuable it is and they forget to enjoy it as a result. There comes the
  importance of understanding travel. The purpose of travel differs from person to person. We travel for work, leisure,
  hobby and so. Long holidays, weekend tours, work-related travel, leisure trips, etc. are some of the various types of
  travel we see and practice in our everyday life. All these travels come with a purpose of its own and we embrace it
  for what it delivers. Like many of us believe, travel is not a very complicated thing. This world has people who thin
  I will go on a world tour when I'm a millionaire and people who travel the whole world with a bag, a couple of clothes
  and a bicycle. About our great travels, we can say, we have seen more than we remember and remember more than we have
  seen.</p>
</div>

<h3 ${articleDataAttribs.H3}>The benefits of travel</h3>

<div ${articleDataAttribs.Div}>
  <p ${articleDataAttribs.P}> 
    Travel comes with a lot of benefits and those benefits get associated with us knowingly or unknowingly. The spread
    of such benefits varies from fun to earning a bun. From each person's perspective, the benefits and magnitudes can
    vary. According to Focuswright 2017, 57% of travellers feel that companies should introduce travel plans based on
    customer preferences or their past behaviours. It proves that people give importance to travel if it can deliver
    them what they expect from the travel. <br/>
    The top benefits of travel are said to beRelieves stress.
  </p>
  <ul ${articleDataAttribs.Ul}>
    <li ${articleDataAttribs.Li}>Helps to find peace of mind.</li>
    <li ${articleDataAttribs.Li}>Enhances social and communication abilities</li>
    <li ${articleDataAttribs.Li}>Helps to get creative.</li>
    <li ${articleDataAttribs.Li}>Broadens our horizons and opens windows to meet new people.</li>
    <li ${articleDataAttribs.Li}>Helps us to gain real-life experience of different parts of the world.</li>
    <li ${articleDataAttribs.Li}>Increases confidence and tolerance.</li>
    <li ${articleDataAttribs.Li}>Creates lifetime memories.</li>
  </ul>
  <p ${articleDataAttribs.P}>
    This is why regular travellers say, “One's destination is never a place, but always a new way of seeing things.”
  </p>
</div>

<h3 ${articleDataAttribs.H3}>Risks of travel</h3>
<div ${articleDataAttribs.Div}>
  <p ${articleDataAttribs.P}>
    Nothing in the world comes risk-free. In general, travel too brings some risks. The biggest risk in travelling is about keeping the money safely and transacting it. We have heard hundreds of stories where people getting robbed or cheated during their travel which can be considered financial frauds. It involves crimes from snatching money from someone to online card based frauds. Recently, in an event happened in India, police captured a few people who used to steal people's money by grabbing their debit card details using an equipment attached to the ATM machines. This shows how risky travel can be when we are in some faraway place and we lose all our money. Many financial companies are putting great amounts of effort into making their accounts and transactions secure. Some key points to remember when making transactions while travelling are:
  </p>

  <ul ${articleDataAttribs.Ul}>
    <li ${articleDataAttribs.Li}>Keep your money and monetary instruments like cheques, cards, etc. safe are</li>
    <li ${articleDataAttribs.Li}>Never share your OTP (One Time Password) with anyone.</li>
    <li ${articleDataAttribs.Li}>Do not ask anyone else to make transactions on behalf of you.</li>
    <li ${articleDataAttribs.Li}>Be sure that no-one is following you to ATMs, payment centres, etc.</li>
  </ul>

</div>
<hr ${articleDataAttribs.Hr}/>
<div ${articleDataAttribs.Div}>
<p ${articleDataAttribs.P}>
  There comes the need of a digital bank. It can help you do all your banking transactions from wherever you are with a high scale of security. Digital banks are those banks which completely operates over the internet and never bothers you to walk-in to their branch. WB21 is such a bank that has been contributing much to the global economy. The service was started in late 2015 and in less than 3 years, it could achieve 5 million customers around the globe which proves the quality of service and customer support to be exemplary. It’s very easy to create a bank account with WB21 and transact through it. Anyone can simply open the website or the mobile app of WB21 and register for an international digital bank account in less than 8 minutes and transfer money right away to the desired destination. The payments are processed in real-time and can be sent in any of the 28 currencies to 180 counties.
  Mostly, travel needs money, but it doesn't mean that we have to carry a wallet full of cash or a pile of bank cards; everything is possible through a digital bank account with WB21. When you can do any transaction or currency conversion on the go from your computer or mobile phone, it means the latest technology of WB21 has your back to keep your money safe when you enjoy the travel. And remember, you only live once, so start travelling to different places and get some life-altering experiences.
</p>
</div>`;

const mockArticleItem: { date: string; title: string; body: string } = {
  date: "Wednesday, 18 July 2018",
  title: "Travel to fill your heart, but not with a filled wallet | WB21",
  body: mockArticle,
};

export const BlogArticlePage = () => {
  return (
    <Section content>
      <Article.Title.Root>
        <Article.Title.Date>{mockArticleItem.date}</Article.Title.Date>
        <Article.Title.Text>{mockArticleItem.title}</Article.Title.Text>
      </Article.Title.Root>
      {parse(mockArticleItem.body)}
    </Section>
  );
};
