const coverColor = document.getElementById('coverColor');
const menu = document.getElementById('menu');


const get_message = `PlanGenius`;
const textParagh = `Unleash Your 
Business Potential with 
Customized Plans and PDF Printing.`;

document.getElementById('textTop').innerHTML = get_message;
document.getElementById('textPar').innerHTML = textParagh;

const _bPost = `Latest Buzz`
document.getElementById('blogPost').innerHTML = _bPost;

const _bPost1 = `Choose Wisely`
document.getElementById('blogPost1').innerHTML = _bPost1;

const textContent = `New Feature Alert: PDF Printing Enabled!`;
document.getElementById('textcontent').innerHTML = textContent;

const textContent1 = `User Success Story: Sarah's Startup Soars High!`;
document.getElementById('textcontent1').innerHTML = textContent1;

const textContent2 = `Upcoming Event: Business Plan Workshop`;
document.getElementById('textcontent2').innerHTML = textContent2;

const textContent3 = `Exclusive Offer: Upgrade to Premium for Pro Templates!`;
document.getElementById('textcontent3').innerHTML = textContent3;

const para1 = `Today`;
const para2 = `Exciting news! 
You can now print your meticulously crafted business plans in PDF
 format with a single click.`;
document.getElementById('para1').innerHTML = para1;
document.getElementById('para2').innerHTML = para2;

const para3 = `Yesterday`;
const para4 = `Sarah used BizGen to create her business plan 
and now her startup is taking off like a rocket!`;
document.getElementById('para3').innerHTML = para3;
document.getElementById('para4').innerHTML = para4;

const para5 = `Tomorrow`;
const para6 = `Join us tomorrow for an interactive workshop 
on creating killer business plans that attract investors!`;
document.getElementById('para5').innerHTML = para5;
document.getElementById('para6').innerHTML = para6;

const para7 = `Next Week`;
const para8 = `Upgrade to our Premium plan and 
unlock a treasure trove of professionally designed templates 
to elevate your business plans.`;
document.getElementById('para7').innerHTML = para7;
document.getElementById('para8').innerHTML = para8;

const _cardPlans = {
    card1: "Starter",
    card2: "Standard",
    card3: "Premium",
    card4: "Ultimate"
};
const _cardContents = {
    card1: `Get started with essential features to 
          kickstart your business planning journey`,
    card2: `Upgrade to unlock advanced tools and 
           templates for crafting top-notch business strategies.`,
    card3: `Go all-in with exclusive access to premium features 
            and personalized support for your business success.`,
    card4: `Unleash the full potential of BizGen with unlimited features, 
            priority support, and 
            VIP perks for your business empire.`
};

document.getElementById('cardPlans').innerHTML = _cardPlans.card1;
document.getElementById('cardPlan1').innerHTML = _cardPlans.card2;
document.getElementById('cardPlan2').innerHTML = _cardPlans.card3;
document.getElementById('cardPlan3').innerHTML = _cardPlans.card4;
document.getElementById('parText').innerHTML = _cardContents.card1;
document.getElementById('parText1').innerHTML = _cardContents.card2;
document.getElementById('parText2').innerHTML = _cardContents.card3;
document.getElementById('parText3').innerHTML = _cardContents.card4;


const _cardQuestionGrid = {
    card0: "FAQs",
    card1: "How to Get Started?",
    card2: "Can I Print Plans?",
    card3: "What's the Purpose?",
    card4: "Need Assistance?",
    card5: "Why Choose Us?"
};

const _cardAnsGrids = {
    card1: `Embark on your entrepreneurial journey by 
            signing up and creating a unique user profile.`,
    card2: `Absolutely! Print your meticulously crafted 
            business plans in PDF format with ease`,
    card3: `Empower yourself to generate innovative business 
            plans tailored to your vision.`,
    card4: `Our support team is always ready to guide you 
            through any challenges you may face`,
    card5: `Join a community of forward-thinkers and 
            revolutionize the way you approach business planning.`
};
document.getElementById('questiontitle').innerHTML = _cardQuestionGrid.card0;
document.getElementById('cardqueTopic1').innerHTML = _cardQuestionGrid.card1;
document.getElementById('cardAnswer1').innerHTML = _cardContents.card1;







