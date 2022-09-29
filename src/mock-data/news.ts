import Img1 from "../assets/backgrounds/news/mock_news_1.png";
import Img21 from "../assets/backgrounds/news/mock_news_2_1.png";
import Img22 from "../assets/backgrounds/news/mock_news_2_2.png";
import Img3 from "../assets/backgrounds/news/mock_news_3.png";

export const mockNews: {
  mc_news_id: string | number;
  mc_nws_img: string[];
  mc_nws_date: string;
  mc_nws_link_txt: string;
  mc_nws_paraone: string;
}[] = [
  {
    mc_news_id: "1",
    mc_nws_img: [Img1],
    mc_nws_date: "News August 1, 2018",
    mc_nws_link_txt: "WB21 launched Crypto Currency Trading System",
    mc_nws_paraone:
      "The future of blockchain technology is a bright one, thus WB21 announced today the launch of its Cryptocurrency trading system which enables customers to enjoy seamless integration of cryptocurrency with the features of online banking. The new feature that joined WB21’s array of services is giving every customer the opportunity to buy, sell, hold and transfer Bitcoins without limitation on amounts. It further enables customers to do an instant conversion of their cryptocurrency holdings into any of the 28 fiat currencies that WB21 is offering.",
  },
  {
    mc_news_id: "2",
    mc_nws_img: [Img21, Img22],
    mc_nws_date: "News April 22, 2018",
    mc_nws_link_txt: 'Global Banker Award 2018 awarded WB21 as "Best Innovation in Retail Banking"',
    mc_nws_paraone:
      "Frankfurt a. M., April 22, 2018: WB21, being one of the most prominent names in the global FinTech sector was awarded the Global Banker Award 2018 in the category 'Best Innovation in Retail Banking' in an event held in Frankfurt a. M., Germany. The award is given to exceptional Financial Institutions for revolutionary achievements in the industry. Witnessing the growth and innovation, this year, it was awarded to WB21.Since its establishment, WB21 has implemented innovations in the banking sector making banking operations simple and efficient. WB21's trademarked innovations ATAP and IRTP which facilitates fastest money transfer across the globe and its proprietary real time customer identification software Global KYC, allowing the company to identify clients from 180 countries when opening their bank accounts, in less than 8 minutes, has received a tremendous welcome from the world making the FinTech company evaluated at 9.8 Billion USD.'",
  },
  {
    mc_news_id: "3",
    mc_nws_img: [Img3],
    mc_nws_date: "News  May 28, 2018",
    mc_nws_link_txt: "5 Million Lives Redefined - WB21 acquires five Million customers in less than 3 years.",
    mc_nws_paraone:
      "Singapore, May 28, 2018: Creating a new history in the global financial sector, WB21 has acquired its 5 millionth customer. Working as a digital bank, the FinTech company which is currently evaluated at 9.8 Billion USD started its services in December 2015 and completed this milestone in less than 3 years. WB21 offers international bank accounts to individuals and businesses in 180 countries for 28 different currencies. Fastest cross-border payments and lowest banking fees are the two unique factors that enabled the company to have the fastest momentum of growth.",
  },
];
