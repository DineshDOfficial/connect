export default function UsersPage() {
  const usersDiv = document.createElement('div');
  usersDiv.innerHTML = `
    <h2>Users</h2>
    <p>Manage users here.</p>
  `;
  return usersDiv;
}
