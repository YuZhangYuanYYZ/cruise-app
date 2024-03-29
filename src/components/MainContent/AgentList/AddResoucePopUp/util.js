export function convertNewResource(itemId, newResourceName, agents) {
  const newAgents = agents.map((agent) => {
    if (agent.id === itemId) {
      const newResources = newResourceName
        .split(',')
        .map((name) => name.trim());
      return {
        ...agent,
        resources: [...agent.resources, ...newResources],
      };
    } else {
      return agent;
    }
  });
  return newAgents.filter((agent) => agent.id === itemId)[0];
}
