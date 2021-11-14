import { Agent } from '../../types';
export function convertNewResource(
  itemId: number,
  resourceIndex: number,
  agents: Agent[]
): Agent {
  const newAgents = agents.map((agent) => {
    if (agent.id === itemId) {
      const newResources = agent.resources.filter(
        (_, index) => index !== resourceIndex
      );
      return { ...agent, resources: newResources };
    } else {
      return agent;
    }
  });
  return newAgents.filter((agent) => agent.id === itemId)[0];
}
