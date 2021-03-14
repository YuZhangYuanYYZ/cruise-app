export const filterAgents = (agents) => {
  switch (agents.renderSelect) {
    case 'all':
      return agents.items;
    case 'physical':
      return agents.items.filter((item) => item.type === 'physical');
    case 'virtual':
      return agents.items.filter((item) => item.type === 'virtual');
    default:
      return agents.items;
  }
};
