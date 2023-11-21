const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

const doubleNumber = numbers.map(e => e * 2);
console.log(doubleNumber);

// Same with forEach
const doubleNumber2 = [];
numbers.forEach(e => {
    doubleNumber2.push(e * 2);
});
console.log(doubleNumber2);

const companies = [
    { name: 'Company One', category: 'Finance', start: 1981, end: 2004 },
    { name: 'Company Two', category: 'Retail', start: 1992, end: 2008 },
    { name: 'Company Three', category: 'Auto', start: 1999, end: 2007 },
    { name: 'Company Four', category: 'Retail', start: 1989, end: 2010 },
    { name: 'Company Five', category: 'Technology', start: 2009, end: 2014 },
    { name: 'Company Six', category: 'Finance', start: 1987, end: 2010 },
    { name: 'Company Seven', category: 'Auto', start: 1986, end: 1996 },
    { name: 'Company Eight', category: 'Technology', start: 2011, end: 2016 },
    { name: 'Company Nine', category: 'Retail', start: 1981, end: 1989 },
];

// Create an array of company name
const companyName = companies.map(e => e.name);
console.log(companyName);

// Create an array with just company and category
const companyInfo = companies.map(c => `${c.name} | ${c.category}`);
console.log(companyInfo);

// Create an arry of objects with name and the lengh of each company in years
const companyYears = companies.map(c => (
    { name: c.name, length: c.end - c.start + ' years ' }
));
console.log(companyYears);

// Chain map methods
const sqrtTripple = numbers
    .map(n => Math.sqrt(n))
    .map(sqrt => sqrt * 3)
    .map(v => v.toFixed(2));

console.log(sqrtTripple);

// Chaining different method
let earlyCompanies = companies
    .filter(company => company.start >= 1980 && company.end <= 2005)
    .map(filterdCompany => filterdCompany.name);
console.log(earlyCompanies);

// company that existed for more than 10 years and company name starts with 'S'
const companyYears2 = companies
    .map(c => ({ name: c.name, length: c.end - c.start}))
    .filter(c => c.length > 10)
    .map(c => c.name)
    .map(name => name.split(' ')[1])
    .filter(name => name.startsWith('S'));

console.log(companyYears2);

