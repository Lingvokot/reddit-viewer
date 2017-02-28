import APIOptions from '@r/api-client';
import { collections } from '@r/api-client';
const { PostsFromSubreddit } = collections;

export default function loadPosts(options = {}) {
	console.log('options: ' + JSON.stringify(options));
	return PostsFromSubreddit.fetch(APIOptions, 'all', options);
}