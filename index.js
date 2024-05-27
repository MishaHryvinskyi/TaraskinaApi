// const fs = require('fs/promises');

// const filePath = './data.txt';

// const fileOperation = async ({ action, data }) => {
//     switch (action) {
//         case "read":
//             const result = await fs.readFile(filePath, 'utf-8');
//             console.log(result);
//             break;
//         case "add":
//             const append = await fs.appendFile(filePath, data);
//             console.log(append);
//         case "replace":
//             const replace = await fs.writeFile(filePath, data);
//             console.log(replace);
//         case "rename":
//             const rename = await fs.rename(filePath, './псєчий.txt')
//             console.log(rename);
//         case "remove":
//             const remove = await fs.unlink(filePath)
//             console.log(remove)
//         default:
//             console.log("Хрен зна");
//             break;    
//     }
// }

// fileOperation({ action: 'read' });
// // fileOperation({ action: 'add', data: " Hellow" });
// // fileOperation({ action: 'replace', data: "Псєчий смрад" })
// fileOperation({ action: 'remove' });
