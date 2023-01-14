export enum LanguageType {
	English = 'English',
	Malay = 'Malay',
	Mandarin = 'Mandarin',
	Cantonese = 'Cantonese',
	Tamil = 'Tamil',
}

export enum FieldType {
	Saving = 'Saving',
	Loan = 'Loan',
	Insurance = 'Insurance',
	Investment = 'Investment',
}

export const sessionHelper = [
	{
		name: 'Muhammad Afiq',
		location: 'Selangor',
		language: [LanguageType.English, LanguageType.Malay],
		fields: [FieldType.Saving, FieldType.Insurance, FieldType.Loan],
		image: '/afiq.png',
	},
	{
		name: 'Brendan Lim',
		location: 'Kuala Lumpur',
		language: [LanguageType.English, LanguageType.Mandarin],
		fields: [FieldType.Investment, FieldType.Insurance, FieldType.Loan],
		image: '/brendan.png',
	},
	{
		name: 'Emely Chen',
		location: 'Pahang',
		language: [LanguageType.English, LanguageType.Malay, LanguageType.Mandarin],
		fields: [FieldType.Investment, FieldType.Insurance, FieldType.Loan],
		image: '/emely.png',
	},
	{
		name: 'Ikhwan Sani',
		location: 'Johore',
		language: [LanguageType.English, LanguageType.Malay],
		fields: [FieldType.Saving, FieldType.Insurance, FieldType.Loan],
		image: '/ikhwan.png',
	},
	{
		name: 'Syukri Lim',
		location: 'Negeri Sembilan',
		language: [LanguageType.English, LanguageType.Malay, LanguageType.Mandarin],
		fields: [FieldType.Insurance, FieldType.Loan],
		image: '/syuk.png',
	},
	{
		name: 'Ganeshwaran',
		location: 'Sarawak',
		language: [LanguageType.English, LanguageType.Malay, LanguageType.Tamil],
		fields: [FieldType.Saving, FieldType.Insurance, FieldType.Loan],
		image: '/ganesh.png',
	},
];
