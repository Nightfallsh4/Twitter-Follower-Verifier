"use client"
import Image from "next/image"
import styles from "./page.module.css"
import { headers } from "next/headers"

export default function Home() {
	async function twitter() {
		const clientId = process.env.NEXT_PUBLIC_TWITTER_CLIENT_ID
		const url = `https://twitter.com/i/oauth2/authorize?response_type=code&client_id=${clientId}&redirect_uri=http://localhost:3000&scope=tweet.read%20users.read%20follows.read%20offline.access&state=state&code_challenge=challenge&code_challenge_method=plain`

		try {
			const response = await fetch(url, {
				method: "POST",
				headers: {
					"Content-Type": "application/x-www-form-urlencoded",
				},
			})

			console.log(response)
		} catch (error) {
			console.error(error)
		}
	}

  
	return (
		<main className={styles.main}>
			<div>
				<div>
					<a
						href="https://twitter.com/TokenShield_io?ref_src=twsrc%5Etfw"
						className="twitter-follow-button"
						data-show-count="false"
					>
						Follow @TokenShield_io
					</a>
					<script
						async
						src="https://platform.twitter.com/widgets.js"
						charSet="utf-8"
					></script>
				</div>
				<button onClick={twitter}>Verify Follow</button>
			</div>
		</main>
	)
}
