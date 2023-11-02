/** @type {import('next').NextConfig} */
const nextConfig = {
	async headers() {
		return [
			{
				source: '/:path*',
				headers: [{ key: 'referer-policy', value: 'no-referer' }],
			},
		]
	},
}

module.exports = nextConfig
