import { Heebo, Manrope } from 'next/font/google'

export const manrope = Manrope({
    weight: ['300','400', '500', '600', '700', '800'],
    subsets: ['latin'],
    variable: "--heading-font",
    display: 'swap',
})
export const heebo = Heebo({
    weight: ['300','400', '500', '600', '700', '800'],
    subsets: ['latin'],
    variable: "--body-font",
    display: 'swap',
})
