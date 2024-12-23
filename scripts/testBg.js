/* eslint-disable import/no-commonjs */

const { resolve } = require('path');
const { exec } = require('shelljs');
const { execSync } = require('child_process');

const workspace = resolve(__dirname, '..');
const scriptPath = resolve(workspace, 'scripts');
const demoPath = resolve(workspace, 'packages', 'taro-vantify-demo');
const host = '127.0.0.1';
const port = 10085;
const publicPath = '/OSSA';
const baseUrl = `http://${host}:${port}${publicPath}`;
const wait = (delay = 1000) => new Promise(_resolve => setTimeout(_resolve, delay));
const serverId = `__testServer__`;

(async () => {
  // 先构建项目
  console.log(`📦 构建项目...`);
  execSync(`npx pnpm --filter=taro-vantify-demo build:h5`, { encoding: 'utf-8' });
  const res = exec(
    `npx forever start ${resolve(scriptPath, 'simpleDevServer.js')} --id "${serverId}"`
  );
  await wait(5000);
  // 自行测试任务
  // 提交时运行自动化测试不需要生成视频，可以提升测试效率
  console.log(`🔍 执行测试任务`);
  const ret = exec(
    `npx cypress run --config baseUrl=${baseUrl},video=false --project ${demoPath}`,
    {
      encoding: 'utf-8',
    }
  );
  exec(`npx forever stop ${resolve(scriptPath, 'simpleDevServer.js')} --id "${serverId}"`);
  if (ret.code !== 0) {
    // 测试用例没有完全通过
    console.log(`🙅 测试用例没有完全通过，不允许提交`);
    process.exit(1);
  } else {
    console.log(`🎉 测试用例全部通过，允许提交`);
  }
})();
