export default function SettingsPage() {
  const settingsDiv = document.createElement('div');
  settingsDiv.innerHTML = `
    <h2>Settings</h2>
    <p>Adjust your settings here.</p>
  `;
  return settingsDiv;
}
