export type DataRiesgo = {
	year: number;
	issued: number;
	received: number;
	total: number;
};

export type DataAdminUser = {
	username: string;
	fullname: string;
	email: string;
	isAdmin: boolean;
	isBilling: boolean;
	isPayroll: boolean;
	isIssued: boolean;
	isReceived: boolean;
};
