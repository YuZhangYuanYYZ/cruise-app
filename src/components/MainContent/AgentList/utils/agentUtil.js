export function deleteResource(itemId, resourceIndex, agents) {
  const newAgents =
    agents &&
    agents.map((agent) => {
      if (agent.id === itemId) {
        const newResources = agent.resources.filter(
          (resource, index) => index !== resourceIndex
        );
        return { ...agent, resources: newResources };
      } else {
        return agent;
      }
    });
  return newAgents && newAgents.filter((agent) => agent.id === itemId)[0];
}

export const filterAgents = (agents) => {
  const { items, renderSelect } = agents;
  switch (renderSelect) {
    case 'all':
      return items;
    case 'physical':
      return items.filter((item) => item.type === 'physical');
    case 'virtual':
      return items.filter((item) => item.type === 'virtual');
    default:
      return items;
  }
};
