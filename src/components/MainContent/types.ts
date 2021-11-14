export type Agent = {
  id: number;
  name: string;
  os: string;
  type: string;
  ip: string;
  status: string;
  resources: Array<string>;
  isFavorite: boolean;
};
