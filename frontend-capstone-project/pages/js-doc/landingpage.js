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
const para4 = `Sarah used BizGenius to create her business plan 
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

document.getElementById('cardqueTopic2').innerHTML = _cardQuestionGrid.card2;
document.getElementById('cardAnswer2').innerHTML = _cardContents.card2;

document.getElementById('cardqueTopic3').innerHTML = _cardQuestionGrid.card3;
document.getElementById('cardAnswer3').innerHTML = _cardContents.card3;

document.getElementById('cardqueTopic4').innerHTML = _cardQuestionGrid.card4;
document.getElementById('cardAnswer4').innerHTML = _cardContents.card4;

document.getElementById('cardqueTopic5').innerHTML = _cardQuestionGrid.card5;
document.getElementById('cardAnswer5').innerHTML = _cardAnsGrids.card5;



// toggle the menubar list items with the underlay color

document.addEventListener('DOMContentLoaded', function(){
        const hamburger = document.getElementById('hamburger');
        const underlay = document.getElementById('underlay');


        function toggleunderlayColor(){
                underlay.classList.toggle('open');
      
                
        };

        hamburger.addEventListener('click', toggleunderlayColor);

});

        const underlay = document.getElementById('underlay');

        function myunderlay(){
                underlay.classList.toggle('open');
        };


const menu = document.getElementById('menu');

// function removeMenu(){
//         menu.style.display = 'none';
// }







const _blogRatings = {
        card1: "100K+",
        card2: "Happy Entrepreneurs",
        card3: "99%",
        card4: "Satisfaction Rate",
        card5: "1M+",
        card6: "Business Plans Created"
    };
document.getElementById('rating1').innerHTML = _blogRatings.card1;
document.getElementById('rating2').innerHTML = _blogRatings.card2;
document.getElementById('rating3').innerHTML = _blogRatings.card3;
document.getElementById('rating4').innerHTML = _blogRatings.card4;
document.getElementById('rating5').innerHTML = _blogRatings.card5;
document.getElementById('rating6').innerHTML = _blogRatings.card6;

const _makePlanning = {
        card1: "Start Planning Today",
        card2: "Craft your dream business plan and print it in PDF format.",
    };
document.getElementById('makePlan1').innerHTML = _makePlanning.card1;
document.getElementById('makePlanPar').innerHTML = _makePlanning.card2;

const _userFeedbacks = {
        card0: "Raving",
        card1: "This app changed my business game! I'm unstoppable now.",
        card2: "Diana Clementine",
        card3: "Unbelievable results! My profits soared after using this app.",
        card4: "Omar Louis",
        card5: "I never knew planning could be this fun and effective!",
        card6: "Rocky Raymond "
    };
document.getElementById('titleRep').innerHTML = _userFeedbacks.card0;
document.getElementById('userRep1').innerHTML = _userFeedbacks.card1;
document.getElementById('userName1').innerHTML = _userFeedbacks.card2;
document.getElementById('userRep2').innerHTML = _userFeedbacks.card3;
document.getElementById('userName2').innerHTML = _userFeedbacks.card4;
document.getElementById('userRep3').innerHTML = _userFeedbacks.card5;
document.getElementById('userName3').innerHTML = _userFeedbacks.card6;
document.getElementById('mediaCont').innerHTML = "Join Our Social Business Network";

const  items1 = document.getElementById('items1');
// const  items2 = document.getElementById('items2');
// const  items3 = document.getElementById('items3');
// const  items4 = document.getElementById('items4');
const  input = document.getElementById('input');

input.addEventListener('click', () => {
        menu.classList.toggle('active');
})

document.getElementById('LoginBar').addEventListener('click', () => {
        window.location.href = 'login.html';
        return;
});







