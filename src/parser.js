export const parser = (data) => {
  const parser = new DOMParser()
  const parsed = parser.parseFromString(data, 'application/xml');
  const items = [...parsed.getElementsByTagName('item')];
  const feedItems = items.map((item) => {
    const newItem = {
      title: item.querySelector('title').textContent,
      link: item.querySelector('link').textContent,
      description: item.querySelector('description').textContent,
    };
    return newItem;
  });
  return {
    title: parsed.querySelector('title').textContent,
    description: parsed.querySelector('description').textContent,
    items: feedItems,
  };

}