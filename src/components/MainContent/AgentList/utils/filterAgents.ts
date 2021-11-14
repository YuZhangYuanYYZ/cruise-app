import { Agent } from '../../types';
type Items = Array<Agent>;
type Agents = { items: Items; renderSelect: string };
export const filterAgents = (agents: Agents) => {
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
