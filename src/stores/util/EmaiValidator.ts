const regex = /^[\da-zA-Z]([-_.]?[\da-zA-Z])*@[\da-zA-Z]([-_.]?[\da-zA-Z])*(\.[a-zA-Z])*$/

type Email = {
    email: string
}

export function isValidEmail(email: Email): boolean {
    return regex.test(email.email)
}
