export type User = {
    id?: string;
    fullName: string;
};

export type SigninInput = {
    rfc: string;
    email: string;
    password: string;
};
export type DataUser = {
    id: string;
    name: string;
    rfc: string;
    email: string;
    roles: string[];
    token: string;
};
