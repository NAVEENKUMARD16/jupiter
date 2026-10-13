const fs = require('fs');

function inspectReport(file) {
  if (!fs.existsSync(file)) return;
  console.log('=== FILE:', file, '===');
  const report = JSON.parse(fs.readFileSync(file, 'utf8'));
  const items = report.lighthouseResult.audits['color-contrast']?.details?.items || [];
  console.log('Total items:', items.length);
  items.forEach((it, i) => {
    console.log(`${i+1}. Snippet: ${it.node?.snippet}`);
    console.log(`   Selector: ${it.node?.selector}`);
    console.log(`   Explanation: ${it.node?.explanation}`);
  });
}

inspectReport('pagespeed-report-mobile.json');
inspectReport('pagespeed-report-desktop.json');
