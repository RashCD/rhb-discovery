export const listQuestions = {
	Demographic: [
		{
			question: 'What gender are you',
			possibleAnswer: ['Male', 'Female', 'Others'],
		},
		{
			question: 'Which region of Malaysia are you',
			possibleAnswer: ['Northern', 'East Cost', 'Central', 'South', 'Borneo'],
		},
		{
			question: 'Age Range',
			possibleAnswer: ['21-30', '31-40', '41-50', '51-60', '61 & above'],
		},
		{
			question: 'Income range',
			possibleAnswer: [
				'Below RM3,000',
				'3,000-4,999',
				'5,000-6,999',
				'7,000-9,999',
				'10,000 and above',
			],
		},
		{
			question: 'How much do you know about financial',
			possibleAnswer: [
				'I do not know at all',
				'I only know a little',
				"I'm quite knowledgeable",
				"I'm very knowledgeable",
			],
		},
	],
	'Financial Management': [
		{
			question:
				'I have written financial goals with a date and Ringgit cost (e.g., RM 30000 for down payment for house).',
			possibleAnswer: ['Always', 'Usually', 'Sometimes', 'Seldom', 'Never'],
		},
		{
			question: 'I have a written plan (budget) for spending and/or saving my money.',
			possibleAnswer: ['Always', 'Usually', 'Sometimes', 'Seldom', 'Never'],
		},
		{
			question: 'I have control on my money.',
			possibleAnswer: ['Always', 'Usually', 'Sometimes', 'Seldom', 'Never'],
		},
	],
	'Saving/Investment': [
		{
			question:
				'I save regularly for long-term financial goals, such as education for my children, a house, or retirement.',
			possibleAnswer: ['Always', 'Usually', 'Sometimes', 'Seldom', 'Never'],
		},
		{
			question:
				'I have a personal investment account for retirement (other than an employee pension)',
			possibleAnswer: ['Always', 'Usually', 'Sometimes', 'Seldom', 'Never'],
		},
		{
			question:
				'I have money spread across more than one type of investment (e.g., stocks, bonds, mutual funds, CDs).',
			possibleAnswer: ['Always', 'Usually', 'Sometimes', 'Seldom', 'Never'],
		},
	],
	'Insurance & Estate Planning': [
		{
			question:
				'I have insurance to cover “big” unexpected expenses, such as a hospital bill or disability',
			possibleAnswer: ['Always', 'Usually', 'Sometimes', 'Seldom', 'Never'],
		},
		{
			question: 'I have a current will?',
			possibleAnswer: ['Yes', 'No'],
		},
	],
	Credit: [
		{
			question: 'I know my credit score',
			possibleAnswer: ['Yes', 'No'],
		},
		{
			question:
				'I have enough money each month to pay my rent/mortgage and other household expenses.',
			possibleAnswer: ['Always', 'Usually', 'Sometimes', 'Seldom', 'Never'],
		},
		{
			question:
				'Less than 20 percent of my monthly income goes to my credit (e.g., credit cards, student loans, car payments and etc).',
			possibleAnswer: ['Always', 'Usually', 'Sometimes', 'Seldom', 'Never'],
		},
	],
	Shopping: [
		{
			question: 'I comparison shop for major purchases by checking at least three sources. ',
			possibleAnswer: ['Always', 'Usually', 'Sometimes', 'Seldom', 'Never'],
		},
		{
			question: 'I avoid impulse purchases and do not use shopping as a form of recreation.',
			possibleAnswer: ['Always', 'Usually', 'Sometimes', 'Seldom', 'Never'],
		},
	],
};

export const questionTitle = ['Demographic'];
