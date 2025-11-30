const { execSync } = require('child_process');

const PORT = 3001;

console.log(`Checking for processes on port ${PORT}...`);

try {
  // Kill any process using port 3001 on Windows
  execSync(`netstat -ano | findstr :${PORT}`, { stdio: 'pipe' })
    .toString()
    .split('\n')
    .forEach(line => {
      const match = line.match(/LISTENING\s+(\d+)/);
      if (match) {
        const pid = match[1];
        try {
          execSync(`taskkill /F /PID ${pid}`, { stdio: 'pipe' });
          console.log(`✓ Killed process ${pid} on port ${PORT}`);
        } catch (e) {
          // Process might already be dead
        }
      }
    });
} catch (e) {
  console.log(`✓ Port ${PORT} is already free`);
}
