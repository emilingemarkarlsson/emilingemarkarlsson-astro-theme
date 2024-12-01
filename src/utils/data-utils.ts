import { type CollectionEntry } from 'astro:content';
import { slugify } from './common-utils';

// Sort items by publish date (descending)
export function sortItemsByDateDesc(itemA: CollectionEntry<'blog' | 'projects'>, itemB: CollectionEntry<'blog' | 'projects'>) {
    return new Date(itemB.data.publishDate).getTime() - new Date(itemA.data.publishDate).getTime();
}

// Get all unique tags with their counts
export function getAllTags(posts: CollectionEntry<'blog' | 'projects'>[]) {
    const tagMap = {};

    posts.forEach((post) => {
        (post.data.tags || []).forEach((tag) => {
            const slug = slugify(tag);
            if (!tagMap[slug]) {
                tagMap[slug] = { name: tag, slug, count: 0 };
            }
            tagMap[slug].count++;
        });
    });

    return Object.values(tagMap).sort((a, b) => a.name.localeCompare(b.name));
}

// Get posts/projects by a specific tag slug
export function getPostsByTag(posts: CollectionEntry<'blog' | 'projects'>[], tagSlug: string) {
    return posts.filter((post) => (post.data.tags || []).map(slugify).includes(tagSlug));
}