export const listQuestions = {
	Demographic: [
		{
			question: 'What gender are you',
			possibleAnswer: ['Male', 'Female', 'Others'],
		},
		{
			question: 'Which region of Malaysia are you',
			possibleAnswer: [
				'North (Kedah, P.Pinang or Perlis)',
				'East Cost',
				'Central',
				'Borneo',
				'South',
			],
		},
		{
			question: 'Age Range',
			possibleAnswer: ['21-30', '31-40'],
		},
		{
			question: 'Household income',
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
				"I'm quite knowledgeble",
				"I'm very knowledgeble",
			],
		},
	],
	'Financial Management': [
		{
			question:
				'I have a bank checking account (or credit union share draft account) with which to pay bills',
			possibleAnswer: ['Yes', 'No'],
		},
		{
			question:
				'I have enough money each month to pay my rent/mortgage and other household expenses?',
			possibleAnswer: ['Always', 'Usually', 'Sometimes', 'Seldom', 'Never'],
		},
		{
			question: 'I have enough money to pay for an emergency, such as a large car repair.',
			possibleAnswer: ['Always', 'Usually', 'Sometimes', 'Seldom', 'Never'],
		},
		{
			question:
				'I have written financial goals with a date and dollar cost (e.g., $10,000 for a car in four years).',
			possibleAnswer: ['Always', 'Usually', 'Sometimes', 'Seldom', 'Never'],
		},
		{
			question: 'I have a written plan (budget) for spending and/or saving my money.',
			possibleAnswer: ['Always', 'Usually', 'Sometimes', 'Seldom', 'Never'],
		},
		{
			question: 'I keep organized financial records and can find important documents easily.',
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
				'I have at least three months’ expenses set aside in a readily accessible account (e.g., money market mutual fund).',
			possibleAnswer: ['Always', 'Usually', 'Sometimes', 'Seldom', 'Never'],
		},
		{
			question: 'I increase my savings when I receive a salary increase.',
			possibleAnswer: ['Always', 'Usually', 'Sometimes', 'Seldom', 'Never'],
		},
		{
			question: 'I increase my savings when I receive a salary increase. (duplicate)',
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
			question:
				'Less than 20 percent of my monthly take-home pay goes to my credit cards, student loans, and car payments.',
			possibleAnswer: ['Always', 'Usually', 'Sometimes', 'Seldom', 'Never'],
		},
		{
			question: 'I pay credit card bills in full to avoid interest charges.',
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
