export interface User {
    id: number
    username: string
    password?: string
    role?: number
    email: string
    adresse: string
    phone_number: string
}

export enum UserRole {
    ROLE_USER = 0,
    ROLE_ADMIN = 1
}

export interface UserUpdate {
    username: string
    email: string
    adresse: string
    phone_number: string
}