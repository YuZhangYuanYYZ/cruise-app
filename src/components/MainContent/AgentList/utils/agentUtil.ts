import { Agent } from '../../types';
export function deleteResource(
  itemId: number,
  resourceIndex: number,
  agents: Array<Agent>
): Agent {
  const newAgents =
    agents &&
    agents.map((agent: Agent) => {
      if (agent.id === itemId) {
        const newResources = agent.resources.filter(
          (_, index: number) => index !== resourceIndex
        );
        return { ...agent, resources: newResources };
      } else {
        return agent;
      }
    });
  return newAgents && newAgents.filter((agent) => agent.id === itemId)[0];
}

type Items = Array<Agent>;
type Agents = { items: Items; renderSelect: string };
export const filterAgents = (agents: Agents) => {
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
