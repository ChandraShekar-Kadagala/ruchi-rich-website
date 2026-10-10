import { execSync } from 'child_process';
import readline from 'readline';

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

console.log('--- GitHub Sync ---');

try {
  // Check working tree status
  const status = execSync('git status --porcelain', { encoding: 'utf-8' });
  if (!status.trim()) {
    console.log('Working tree is clean. Nothing to sync.');
    process.exit(0);
  }

  console.log('Changes detected:');
  console.log(status);

  rl.question('Enter a commit message (or press Enter for default "update: auto sync"): ', (msg) => {
    const commitMsg = msg.trim() || 'update: auto sync';
    
    try {
      console.log('Staging changes...');
      execSync('git add .');
      
      console.log(`Committing: "${commitMsg}"`);
      execSync(`git commit -m "${commitMsg}"`);
      
      console.log('Pushing to remote...');
      execSync('git push -u origin HEAD');
      
      console.log('Sync complete!');
    } catch (err) {
      console.error('Error during sync:', err.message);
    } finally {
      rl.close();
    }
  });

} catch (error) {
  console.error('Failed to check git status:', error.message);
  rl.close();
}
