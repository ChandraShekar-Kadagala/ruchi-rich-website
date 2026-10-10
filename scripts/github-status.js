import { execSync } from 'child_process';

console.log('--- GitHub Status ---');
try {
  const status = execSync('git status', { encoding: 'utf-8' });
  console.log(status);
} catch (error) {
  console.error('Failed to get git status:', error.message);
}
