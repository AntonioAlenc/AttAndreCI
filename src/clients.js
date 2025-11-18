let clients = [];
let id = 1;

export function getClients() {
  return clients;
}

export function addClient(data) {
  const newClient = { id: id++, ...data };
  clients.push(newClient);
  return newClient;
}

export function updateClient(clientId, data) {
  const index = clients.findIndex(c => c.id == clientId);
  if (index === -1) return null;

  clients[index] = { ...clients[index], ...data };
  return clients[index];
}

export function deleteClient(clientId) {
  const index = clients.findIndex(c => c.id == clientId);
  if (index === -1) return false;

  clients.splice(index, 1);
  return true;
}
