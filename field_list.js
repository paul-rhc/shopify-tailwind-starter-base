const fs = require('fs');

fs.readFile('./metafields_working.json', 'utf8', (err, data) => {
  if (err) {
    console.error('Error reading file:', err);
    return;
  }
  try {
    const jsonData = JSON.parse(data);

    jsonData.forEach((fieldGroup) => {
      //console.log(`Key: ${fieldGroup.key}, Name: ${fieldGroup.name}`);
      console.log(fieldGroup.name, `:`, fieldGroup.key, `,`);
    });
  } catch (parseError) {
    console.error('Error parsing JSON:', parseError);
  }
});
