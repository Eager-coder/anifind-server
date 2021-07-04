import nodemailer from "nodemailer"

const sendEmail = async (recipientEmail: string, subject: string, text: string, html: string) => {
	let transporter = nodemailer.createTransport({
		service: "hotmail",
		auth: {
			user: "Turan_S1225@hbsh.nis.edu.kz",
			pass: "Oq$KEtAP",
		},
	})
	let mailOptions = {
		from: '"AniFind " <Turan_S1225@hbsh.nis.edu.kz>',
		to: recipientEmail,
		subject,
		text,
		html,
	}
	return await transporter.sendMail(mailOptions)
}
export default sendEmail
