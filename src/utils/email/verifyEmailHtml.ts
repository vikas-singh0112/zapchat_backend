export default function verifyEmailHtml(url: string) {
	return `
    <div style="background-color: #000c13; padding: 64px 20px; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; min-height: 100%; text-align: center;">
      <div style="background-color: #041620; max-width: 400px; margin: 0 auto; padding: 32px; border-radius: 16px; border-top: 1px solid #0c3d5a; box-shadow: 0 10px 25px -5px rgba(0, 12, 19, 0.7), 0 8px 10px -6px rgba(0, 12, 19, 0.7); text-align: left;">
        
        <div style="text-align: center; margin-bottom: 24px;">
          
          <img src="https://res.cloudinary.com/get-your-api/image/upload/v1784283495/w3ksltwc4e58rhogjxsv.svg"
               width="80"
               height="80"
               alt="ZapChat Logo"
               style="display: block; margin: 0 auto 16px auto; border: 0;" />

          <h1 style="color: #f0f9fe; font-size: 32px; font-weight: 700; margin: 0; padding: 0; letter-spacing: -0.5px; line-height: 40px;">
            Verify your <span style="color: #ff5e00;">email</span>
          </h1>
        </div>

        <div style="margin-bottom: 24px;">
          <p style="color: #f0f9fe; font-size: 15px; line-height: 22px; margin: 0; opacity: 0.8;">
            Thanks for signing up to ZapChat. Please confirm your email address by clicking the button below.
          </p>
        </div>

        <div style="margin-bottom: 24px;">
          <a href="${url}"
             style="background-color: #ff5e00;
                    color: #000c13;
                    padding: 12px 24px;
                    text-decoration: none;
                    border-radius: 8px;
                    font-weight: 700;
                    font-size: 15px;
                    display: block;
                    text-align: center;
                    letter-spacing: -0.2px;">
            Verify Email
          </a>
        </div>

        <div style="border-bottom: 2px solid rgba(12, 61, 90, 0.3); margin-bottom: 24px;"></div>

        <div style="margin-bottom: 12px;">
          <p style="color: #f0f9fe; font-size: 12px; line-height: 18px; margin: 0; opacity: 0.5;">
            If the action button fails, copy and paste this link structure directly into your web browser client:
          </p>
        </div>
        <div style="word-break: break-all;">
          <a href="${url}" style="color: #4bb4ab; font-size: 12px; text-decoration: none; font-weight: 500;">
            ${url}
          </a>
        </div>

      </div>
    </div>
  `
}