function renderTelemetry(t) 
{
  const items = [
    { label: 'Location',           value: t.location,          unit: ''     },
    { label: 'Distance from Home', value: t.distanceFromHome,  unit: 'km'   },
    { label: 'Speed',              value: t.speed,             unit: 'km/h' },
    { label: 'Engine Temp',        value: t.engineTemp,        unit: '°C'   },
    { label: 'Oil Temp',           value: t.oilTemp,           unit: '°C'   },
    { label: 'Fuel Level',         value: t.fuelLevel,         unit: '%'    },
    { label: 'Next Service',       value: t.nextService,       unit: ''     },
  ];

  document.getElementById('telemetryGrid').innerHTML = items.map(item => `
    <div class="telemetry-item">
      <div class="telemetry-label">${item.label}</div>
      <div class="telemetry-value">${item.value}</div>
      <span class="telemetry-unit">${item.unit}</span>
    </div>
  `).join('');
}

renderTelemetry(CAR_DATA.telemetry);
