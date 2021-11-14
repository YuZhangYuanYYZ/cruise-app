import { filterAgents, deleteResource } from './agentUtil';
const AGENT_NAME = 'agent_name';
const IP = '192.168.1.80';
const LOCATION = '/var/lib/cruise-agent';
describe('filterAgents', () => {
  const items = [
    {
      name: AGENT_NAME,
      os: 'windows',
      status: 'building',
      type: 'virtual',
    },
    {
      name: 'bjstdmngbdr15.thoughtworks.com',
      os: 'suse',
      status: 'idle',
      type: 'physical',
    },
  ];
  test('return all agents when type is all', () => {
    const agents = {
      renderSelect: 'all',
      items: items,
    };
    const result = filterAgents(agents);
    expect(result).toBe(agents.items);
  });

  test('return physical agents when type physical', () => {
    const agents = {
      renderSelect: 'physical',
      items: items,
    };
    const result = filterAgents(agents);
    expect(result).toStrictEqual([
      {
        name: 'bjstdmngbdr15.thoughtworks.com',
        os: 'suse',
        status: 'idle',
        type: 'physical',
      },
    ]);
  });

  test('return virtual agents when type is virtual', () => {
    const agents = {
      renderSelect: 'virtual',
      items: items,
    };
    const result = filterAgents(agents);
    expect(result).toStrictEqual([
      {
        name: AGENT_NAME,
        os: 'windows',
        status: 'building',
        type: 'virtual',
      },
    ]);
  });
});

describe('deleteResource', () => {
  test('retun a new agent when given itemId ,resourceIndex and agents', () => {
    const itemId = 1;
    const resourceIndex = 1;
    const agents = [
      {
        name: AGENT_NAME,
        os: 'windows',
        status: 'building',
        type: 'virtual',
        ip: IP,
        location: LOCATION,
        resources: ['Firefox', 'Chrome'],
        id: 1,
      },
      {
        name: AGENT_NAME,
        os: 'windows',
        status: 'building',
        type: 'virtual',
        ip: IP,
        location: LOCATION,
        resources: ['Firefox'],
        id: 2,
      },
    ];
    const newAgent = {
      name: AGENT_NAME,
      os: 'windows',
      status: 'building',
      type: 'virtual',
      ip: IP,
      location: LOCATION,
      resources: ['Firefox'],
      id: 1,
    };
    expect(deleteResource(itemId, resourceIndex, agents)).toEqual(newAgent);
  });
  test('retun null when given itemId ,resourceIndex but no agents', () => {
    const itemId = 1;
    const resourceIndex = 1;
    expect(deleteResource(itemId, resourceIndex)).toEqual(null);
  });

  test('retun null when given agents ,resourceIndex but no itemId', () => {
    const agents = [
      {
        name: AGENT_NAME,
        os: 'windows',
        status: 'building',
        type: 'virtual',
        ip: IP,
        location: LOCATION,
        resources: ['Firefox', 'Chrome'],
        id: 1,
      },
      {
        name: AGENT_NAME,
        os: 'windows',
        status: 'building',
        type: 'virtual',
        ip: IP,
        location: LOCATION,
        resources: ['Firefox'],
        id: 2,
      },
    ];
    const resourceIndex = 1;
    expect(deleteResource(null, resourceIndex, agents)).toEqual(undefined);
  });
  test('retun null when given agents ,itemId , but no resourceIndex', () => {
    const agents = [
      {
        name: AGENT_NAME,
        os: 'windows',
        status: 'building',
        type: 'virtual',
        ip: IP,
        location: LOCATION,
        resources: ['Firefox', 'Chrome'],
        id: 1,
      },
      {
        name: AGENT_NAME,
        os: 'windows',
        status: 'building',
        type: 'virtual',
        ip: IP,
        location: LOCATION,
        resources: ['Firefox'],
        id: 2,
      },
    ];
    const itemId = 1;
    expect(deleteResource(itemId, null, agents)).toEqual({
      id: 1,
      ip: IP,
      location: LOCATION,
      name: AGENT_NAME,
      os: 'windows',
      resources: ['Firefox', 'Chrome'],
      status: 'building',
      type: 'virtual',
    });
  });
}); //should return undefined or agent?????
