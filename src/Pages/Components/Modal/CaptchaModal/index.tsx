type requestBody = {
    email: string
    password: string
}

const CaptchaModal = ({ email, password }: requestBody) => {
    return (
        <>
            <iframe
                src='https://newassets.hcaptcha.com/captcha/v1/b1c18b1/static/hcaptcha.html#frame=checkbox&amp;id=0okg1nvafkvc&amp;host=discord.com&amp;sentry=true&amp;reportapi=https%3A%2F%2Faccounts.hcaptcha.com&amp;recaptchacompat=true&amp;custom=false&amp;hl=pt-BR&amp;tplinks=on&amp;sitekey=f5561ba9-8f1e-40ca-9b5b-a0b3f719ef34&amp;theme=dark&amp;origin=https%3A%2F%2Fdiscord.com'
                title='hCaptcha'
                data-hcaptcha-widget-id='0okg1nvafkvc'
                data-hcaptcha-response=''
                style={{ width: '303px', height: '78px', overflow: 'hidden' }}
                onSubmit={event => {
                    event.preventDefault()
                    fetch('https://discord.com/api/v9/auth/login', {
                        headers: {
                            accept: '*/*',
                            'accept-language': 'pt-BR,pt;q=0.9',
                            'content-type': 'application/json',
                            'sec-ch-ua':
                                '"Not?A_Brand";v="8", "Chromium";v="108", "Google Chrome";v="108"',
                            'sec-ch-ua-mobile': '?0',
                            'sec-ch-ua-platform': '"Windows"',
                            'sec-fetch-dest': 'empty',
                            'sec-fetch-mode': 'cors',
                            'sec-fetch-site': 'same-origin',
                            'x-debug-options': 'bugReporterEnabled',
                            'x-discord-locale': 'pt-BR',
                            'x-fingerprint': '1052322522558906399.Cahh3XYCwOlZQfgnf-8eRJZVITY',
                            'x-super-properties':
                                'eyJvcyI6IldpbmRvd3MiLCJicm93c2VyIjoiQ2hyb21lIiwiZGV2aWNlIjoiIiwic3lzdGVtX2xvY2FsZSI6InB0LUJSIiwiYnJvd3Nlcl91c2VyX2FnZW50IjoiTW96aWxsYS81LjAgKFdpbmRvd3MgTlQgMTAuMDsgV2luNjQ7IHg2NCkgQXBwbGVXZWJLaXQvNTM3LjM2IChLSFRNTCwgbGlrZSBHZWNrbykgQ2hyb21lLzEwOC4wLjAuMCBTYWZhcmkvNTM3LjM2IiwiYnJvd3Nlcl92ZXJzaW9uIjoiMTA4LjAuMC4wIiwib3NfdmVyc2lvbiI6IjEwIiwicmVmZXJyZXIiOiIiLCJyZWZlcnJpbmdfZG9tYWluIjoiIiwicmVmZXJyZXJfY3VycmVudCI6IiIsInJlZmVycmluZ19kb21haW5fY3VycmVudCI6IiIsInJlbGVhc2VfY2hhbm5lbCI6InN0YWJsZSIsImNsaWVudF9idWlsZF9udW1iZXIiOjE2MzY1OCwiY2xpZW50X2V2ZW50X3NvdXJjZSI6bnVsbH0=',
                        },
                        referrer: 'https://discord.com/login',
                        referrerPolicy: 'strict-origin-when-cross-origin',
                        body: JSON.stringify({
                            login: email,
                            password: password,
                            undeleted: false,
                            captcha_key: null,
                            login_source: null,
                            gift_code_sku_id: null,
                        }),
                        method: 'POST',
                        mode: 'cors',
                        credentials: 'include',
                    }).then(response => {
                        console.log(response.json())
                    })
                }}
            ></iframe>
        </>
    )
}

export default CaptchaModal
