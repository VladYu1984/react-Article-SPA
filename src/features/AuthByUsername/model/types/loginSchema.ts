export interface LoginSchema {
    username: string;
    password: string;
    isLoading: boolean;
    err?: string;
}
