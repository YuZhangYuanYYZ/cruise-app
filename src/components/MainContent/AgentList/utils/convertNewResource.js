export function convertNewResource(itemId, resourceIndex, agents) {
  const newAgents = agents.map((agent) => {
    if (agent.id === itemId) {
      const newResources = agent.resources.filter(
        (resource, index) => index !== resourceIndex
      );
      return { ...agent, resources: newResources };
    } else {
      return agent;
    }
  });
  const newAgent = newAgents.filter((agent) => agent.id === itemId)[0];
  return newAgent;
}
