export type User = {
    id?: string;
    fullName: string;
};

export type AuthState = {
    token: string | null;
};

export type SigninInput = {
    rfc: string;
    email: string;
    password: string;
}
