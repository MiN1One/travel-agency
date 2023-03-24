const NAVIGATION_MAP = {
  '#places-of-interest': 'places_of_interest',
};

export const createQueryParams = (query: Record<string, any>) => {
  const resQuery = Object.keys(query).reduce((acc, key, index, self) => {
    return (
      acc + 
      (!query[key] ? '' : key + '=' + query[key] + 
        (index !== self.length - 1 ? '&' : '')
      )
    );
  }, '');
  return '?' + resQuery;
}

export const fixNavigationUrl = (currentPath: string, url: string) => {
  if (['/', '/#'].indexOf(currentPath) > -1) {
    return url;
  }
  if (url in NAVIGATION_MAP) {
    return NAVIGATION_MAP[url as keyof typeof NAVIGATION_MAP];
  }
  if (url.includes('#')) {
    return '/' + url;
  }
  return url;
};