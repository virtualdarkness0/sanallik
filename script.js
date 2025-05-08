function ipSorgula() {
  const ip = document.getElementById('ipInput').value;
  const output = document.getElementById('ipSonuc');
  output.textContent = `IP sorgulandı: ${ip}\n(Simüle edildi - API entegrasyonu yapılabilir)`;
}

function telSorgula() {
  const tel = document.getElementById('telInput').value;
  const output = document.getElementById('telSonuc');
  output.textContent = `Telefon doğrulandı: ${tel}\n(Simüle edildi - API entegrasyonu yapılabilir)`;
}

function mailSorgula() {
  const mail = document.getElementById('mailInput').value;
  const output = document.getElementById('mailSonuc');
  output.textContent = `E-posta doğrulandı: ${mail}\n(Simüle edildi - API entegrasyonu yapılabilir)`;
}
