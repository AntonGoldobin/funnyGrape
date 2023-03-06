import { Config } from '../types/types'
import { schedule, scheduleOnce } from '../modules/schedule'

import categoryIds from './youtube-categories'
import { getBase64ThumbnailLogo } from './utils'

export const start = () => {
	const config: Config = {
		scheduleRepeats: 'all',
		cron: '0 */24 * * *',
		channelName: 'nba-doge',
		//Type of content
		contentType: 'tiktok',
		//Youtube configs
		youtubeLoginToken: JSON.parse(process.env.YOUTUBE_LOGIN_TOKEN),
		youtubeSecret: JSON.parse(process.env.YOUTUBE_SECRET),
		youtubeVideoTitle: 'NBA compilations from TikTok #shorts',
		youtubeVideoDescription:
			'Subscribe and watch the newest shorts founded by the NBA Doge',
		youtubeVideoTags: [
			'basketball',
			'nba',
			'sports',
			'ballislife',
			'football',
			'k',
			'lebronjames',
			'basket',
			'lakers',
			'sport',
			'nike',
			'bball',
			'nbabasketball',
			'basketballneverstops',
			'jordan',
			'baseball',
			'hoops',
			'lebron',
			'dunk',
			'basketballislife',
			'nfl',
			'soccer',
			'nbaplayoffs',
			'basketballtraining',
			'kobebryant',
			'kobe',
			'fitness',
			'michaeljordan',
			'basketballplayer',
			'explorepage',
		],
		categoryId: categoryIds.Sports,
		// youtubeClientSecret: '../raccoon-youtube-secret.json',
		videoOnly: true,

		//TikTok configs
		tiktokMocked: process.env.TIKTOK_MOCKED && !!+process.env.TIKTOK_MOCKED,
		tiktok_key: process.env.TIKTOK_KEY,
		tiktok_keyword: 'nba compilation',

		isAdult: false,
		thumbnailLogo: getBase64ThumbnailLogo(),
	}

	process.env.SCHEDULE === 'true' ? schedule(config) : scheduleOnce(config)
}
