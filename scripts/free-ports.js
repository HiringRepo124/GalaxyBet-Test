const { execSync } = require('child_process');

const PORTS = [9030, 5173];

function freePort(port) {
  try {
    if (process.platform === 'win32') {
      const result = execSync(`netstat -ano | findstr :${port}`, {
        encoding: 'utf8',
      });

      const pid = result.trim().split(/\s+/).pop();

      if (pid) {
        execSync(`taskkill /PID ${pid} /F`);
        console.log(`Freed port ${port}`);
      }
    } else {
      const pid = execSync(`lsof -ti:${port}`, {
        encoding: 'utf8',
      }).trim();

      if (pid) {
        execSync(`kill -9 ${pid}`);
        console.log(`Freed port ${port}`);
      }
    }
  } catch {
    console.log(`Port ${port} is already free`);
  }
}

PORTS.forEach(freePort);