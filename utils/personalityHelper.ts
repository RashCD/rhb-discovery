export type typePersonalityTypes = keyof typeof personalityTypes;

export const personalityTypes = {
	novice: {
		icon: '/novice.png',
		title: 'Novice',
		sub: 'You need lots of help, but don’t despair. It is never too late to take action to improve your finances',
		description: [
			{
				title: 'Financial Management',
				sub: 'Start by setting financial goals and creating a budgets. This will help you understand where your money is going and where you can cut back to save more.',
			},
			{
				title: 'Insurance and Estate Planning',
				sub: 'Start by understanding the different types of insurance coverage available, such as health, auto, and home insurance.',
			},
			{
				title: 'Saving/Investing',
				sub: 'Start by setting savings and investments goals and creating a budget as well as learning about the basics of investing, such as the difference between stocks and bonds.',
			},
			{
				title: 'Credit',
				sub: 'Start by understanding how credit works and the importances of having a good credit score. This will help you make informed decisions about using credit in the future.',
			},
			{
				title: 'Shopping',
				sub: 'Start by creating a budget and determining your needs and wants when it comes to shopping. This will help you make informed decisions about your purchases and avoid impulse buying.',
			},
		],
	},
	advance: {
		icon: '/advance.png',
		title: 'Advance Beginner',
		sub: 'You are headed for financial difficulty. Now is the time to take action to reverse the trend.',
		description: [
			{
				title: 'Financial Management',
				sub: 'Start considering different savings and investment options offered by your bank, such as savings accounts and CDs, and learn about the benefits and drawbacks of each.',
			},
			{
				title: 'Insurance and Estate Planning',
				sub: 'Make sure you have adequate life insurance coverage to provide for your loved ones in case of your unexpected death.',
			},
			{
				title: 'Saving/Investing',
				sub: 'Start setting aside a specific amount of money each month to build an emergency fund with 3-6 months’ worth of living expenses. This will give you a safety net in case of unexpected events, such as job loss.',
			},
			{
				title: 'Credit',
				sub: 'Make sure to pay all your bills and loans on time especially high-interest debt, such as credit card balances.',
			},
			{
				title: 'Shopping',
				sub: 'Start comparing prices and products to ensure you are getting the best value for your money.',
			},
		],
	},
	competent: {
		icon: '/competent.png',
		title: 'Competent',
		sub: 'You are doing a fair job of managing your finances and have taken some steps in the right direction.',
		description: [
			{
				title: 'Financial Management',
				sub: 'Start developing a relationship with a financial advisor at your bank who can help you create a comprehensive financial plan.',
			},
			{
				title: 'Insurance and Estate Planning',
				sub: 'Consider purchasing disability insurance to protect your income in case you become unable to work due to injury or illness.',
			},
			{
				title: 'Saving/Investing',
				sub: 'Start investing in a diversified portfolio of low-cost index funds to build wealth over time and protect against market volatility.',
			},
			{
				title: 'Credit',
				sub: 'Begin to actively monitor your credit score and check for errors on your credit report. Dispute any errors you find with the credit bureau.',
			},
			{
				title: 'Shopping',
				sub: 'Start considering the long-term value and durability of products when making a purchase, rather than just focusing on the initial cost.',
			},
		],
	},
	proficient: {
		icon: '/proficient.png',
		title: 'Proficient',
		sub: 'You are doing a good job and are above average in managing your finances.',
		description: [
			{
				title: 'Financial Management',
				sub: 'Consider taking advantage of other financial services offered by your bank, such as online banking, mobile banking, and financial planning tools to manage your money more effectively.',
			},
			{
				title: 'Insurance and Estate Planning',
				sub: 'Start planning for your estate by creating a will and potentially setting up a trust. This will ensure that your assets are distributed according to your wishes after your death.',
			},
			{
				title: 'Saving/Investing',
				sub: 'Start automating your savings by setting up automatic transfers to a savings account on a regular basis and start considering alternative investments such as real estate, private equity, or venture capital.',
			},
			{
				title: 'Credit',
				sub: 'Start actively working on improving your credit score by paying down high-interest debt and limiting new credit applications.',
			},
			{
				title: 'Shopping',
				sub: 'Start looking for deals and discounts, such as sales or coupons, to save money on your purchases consider developing a savings plan and setting aside money for future purchases, such as holiday shopping or back to school shopping.',
			},
		],
	},
	expert: {
		icon: '/expert.png',
		title: 'Expert',
		sub: 'You are in excellent financial shape. Keep up the good work! Let’s how you can grow more with us.',
		description: [
			{
				title: 'Financial Management',
				sub: 'Continuously educate yourself on the financial management, tax strategies, estate planning and latest financial products and services offered by your bank and stay informed about financial market trends and regulations.',
			},
			{
				title: 'Insurance and Estate Planning',
				sub: 'Continuously educate yourself on different insurance options and estate planning strategies, such as tax-efficient ways to pass on your wealth to future generations.',
			},
			{
				title: 'Saving/Investing',
				sub: 'Continuously educate yourself on different savings/investments strategies, financial products, such as tax-advantaged savings accounts and the benefits of compounding interest, market trends, and opportunities for diversification.',
			},
			{
				title: 'Credit',
				sub: 'Continuously educate yourself on how credit scoring works, the different types of credit products available, and strategies to maintain a good credit score over time.',
			},
			{
				title: 'Shopping',
				sub: 'Continuously educate yourself on different shopping strategies, such as smart bargaining, understanding pricing strategies, and identifying high-quality products.',
			},
		],
	},
};
