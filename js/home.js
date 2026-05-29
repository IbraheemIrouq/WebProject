function renderStatusList(status) 
{
  const items = [
    { icon: '🚗', label: 'Engine',  value: status.engine },
    { icon: '❄️', label: 'A/C',     value: `${status.ac.state} (${status.ac.temperature}°c, mode: ${status.ac.mode})` },
    { icon: '🚪', label: 'Doors',   value: status.doors },
    { icon: '💡', label: 'Lights',  value: status.lights },
    { icon: '🧳', label: 'Trunk',   value: status.trunk },
  ];

  document.getElementById('statusList').innerHTML = items.map(item =>
    `<li><span>${item.icon}</span> <strong>${item.label}:</strong> ${item.value}</li>`
  ).join('');
}

renderStatusList(CAR_DATA.status);
