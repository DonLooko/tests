import baseAPI from '../baseAPI';

type SearchContactsParams = Partial<{
  limit: number;
  page: number;
  order: 'asc' | 'desc';
  search: string;
  sort: string;
  withShared: boolean;
  sortBy: 'frequency' | 'alphabet';
}>;

async function searchContacts(params?: SearchContactsParams) {
  const response = await baseAPI.get<any>('/contacts/search', {
    params: {
      with_shared: true,
      ...params,
    },
  });

  return response.data;
}

export function getContacts(params?: SearchContactsParams) {
  return searchContacts({
    limit: 20,
    ...params,
  }).then(({ data }) => data);
}

export const getRecentContacts = () =>
  searchContacts({
    sort: 'frequency',
    limit: 5,
  }).then(({ data }) => data?.items || []);
