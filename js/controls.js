const controls = [
  { id: 'engine',     label: 'Toggle Engine',      iconOn: '🟢', iconOff: '⚙️',  statusOn: 'running',   statusOff: 'off',        active: false },
  { id: 'ac',         label: 'Turn A/C On',         iconOn: '❄️', iconOff: '🔴',  statusOn: 'on',        statusOff: 'off',        active: false },
  { id: 'doors',      label: 'Lock/Unlock Doors',   iconOn: '🔓', iconOff: '🔒',  statusOn: 'unlocked',  statusOff: 'locked',     active: false },
  { id: 'headlights', label: 'Headlights On/Off',   iconOn: '☀️', iconOff: '🌙',  statusOn: 'lights on', statusOff: 'lights off', active: false },
  { id: 'trunk',      label: 'Open/Close Trunk',    iconOn: '📦', iconOff: '🧳',  statusOn: 'open',      statusOff: 'closed',     active: false },
  { id: 'horn',       label: 'Horn',                iconOn: '📣', iconOff: '🔔',  statusOn: 'honking',   statusOff: 'silent',     active: false },
];

function renderControls() 
{
  document.getElementById('controlsGrid').innerHTML = controls.map((ctrl, i) => `
    <div class="control-card ${ctrl.active ? 'active' : ''}" onclick="toggleControl(${i})">
      <h3>${ctrl.label}</h3>
      <div class="control-icon">${ctrl.active ? ctrl.iconOn : ctrl.iconOff}</div>
      <div class="control-status">${ctrl.active ? ctrl.statusOn : ctrl.statusOff}</div>
    </div>
  `).join('');
}

function toggleControl(index) 
{
  controls[index].active = !controls[index].active;
  renderControls();
  const ctrl = controls[index];
  showToast(`🚗 ${ctrl.label}: ${ctrl.active ? ctrl.statusOn : ctrl.statusOff}`);
}

function showToast(message) 
{
  const toast = document.getElementById('toast');
  toast.textContent = message;
  toast.classList.add('show');
  clearTimeout(toast._t);
  toast._t = setTimeout(() => toast.classList.remove('show'), 3000);
}

renderControls();
