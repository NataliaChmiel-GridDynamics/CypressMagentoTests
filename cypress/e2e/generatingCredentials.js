import { faker } from "@faker-js/faker";

//Faker generated credentials
export const password = faker.internet.password({ length: 20 });
export const accountFakerCredentials = {
	firstName: faker.person.firstName(),
	lastName: faker.person.lastName(),
	email: faker.internet.email(),
	password: password,
	confirmPassword: password,
};

//User regular credentials
export const passwordUser = "UserPassword1!2?";
export const accountUserCredentials = {
	firstNameUser: "Jane",
	lastNameUser: "Doe",
	emailUser: "user@yahoo.com",
	passwordUser: passwordUser,
	confirmPasswordUser: passwordUser,
};

//User new address
export const userNewAddress = {
	telephoneNumber: 102345678,
	streetAddress: "5000 Executive Parkway, Suite 520",
	cityAddress: "San Ramon",
	regionAddress: "California",
	postalCode: "94583",
};

//Share wishlist credentials
export const shareWishlistCredentials = {
	emailAddress: faker.internet.email(),
	message: faker.lorem.paragraph(),
};

//Review of items
export const itemsReview = {
	summary: faker.lorem.sentence(),
	review: faker.lorem.paragraph(5),
};
