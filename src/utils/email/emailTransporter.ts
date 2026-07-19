import nodemailer from 'nodemailer'

const email = process.env.USER_EMAIL!
const pass = process.env.USER_PASS!
export const EmailTransporter = nodemailer.createTransport({
	service: "gmail",
	auth: {
		user: email,
		pass: pass
	}
})

interface SendEmailConfigProps {
	receiver: string,
	subject: string,
	htmlContent: string
}

export function sendMailConfig({htmlContent,receiver,subject}:SendEmailConfigProps) {
	return {
		from: '"ZapChat Support" <zapchat.app@gmail.com>',
		to: receiver,
		subject: subject,
		html: htmlContent
	}
}