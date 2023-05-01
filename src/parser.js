// Simple parser function to format search term to return the desicred subreddit

export const parser = (term) => {
    return term.replaceAll(/[" ", "'"]/g, "");
};