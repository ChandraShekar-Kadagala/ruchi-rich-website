import { execSync } from 'child_process';
import fs from 'fs';
import path from 'path';

console.log('--- GitHub Auto-Watch Mode ---');
console.log('Warning: Watcher mode can create many commits and publish intermediate work.');
console.log('Press Ctrl+C to stop.');

const debounceDelay = 10000; // 10 seconds of inactivity before committing
let timeoutId = null;
let isSyncing = false;

const syncChanges = () => {
  if (isSyncing) return;
  
  try {
    const status = execSync('git status --porcelain', { encoding: 'utf-8' });
    if (!status.trim()) return;

    isSyncing = true;
    console.log('\nChanges detected. Syncing...');
    
    execSync('git add .');
    execSync('git commit -m "update: auto watcher sync"');
    execSync('git push origin HEAD');
    
    console.log('Sync complete at ' + new Date().toLocaleTimeString());
  } catch (error) {
    console.error('Error during auto-sync:', error.message);
  } finally {
    isSyncing = false;
  }
};

const handleFileChange = (eventType, filename) => {
  if (filename && (filename.includes('.git') || filename.includes('node_modules') || filename.includes('dist'))) {
    return; // Ignore excluded directories
  }

  clearTimeout(timeoutId);
  timeoutId = setTimeout(syncChanges, debounceDelay);
};

fs.watch('.', { recursive: true }, handleFileChange);
