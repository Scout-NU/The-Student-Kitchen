# Search Functionality

## How It Works

The search uses a **hybrid approach**:

1. **Current Page**: Always searched dynamically from the actual HTML content - no manual updates needed!
2. **Other Pages**: Uses `search-index.js` for cross-page search results

## Benefits

- **Current page is always up-to-date** - Make changes to any page and search will find them immediately
- **Cross-page search works** - Find content from other pages without visiting them
- **Low maintenance** - Only need to update the index when you want other pages' search results to reflect major changes

## When to Update search-index.js

You only need to update `search-index.js` if:
- You want search results from OTHER pages to reflect your changes
- You've made major content changes to multiple pages
- You've added new pages to the site

## Current Page Updates

**No action needed!** The current page is always searched dynamically, so any changes you make will be found immediately.

## Optional: Regenerating the Index

If you want to update the index for other pages, you can manually edit `search-index.js` or use a simple script. The index structure is:

```javascript
const searchIndex = [
    {
        page: 'filename.html',
        title: 'Page Title',
        content: [
            { text: 'Searchable text content', type: 'content-type' }
        ]
    }
];
```

