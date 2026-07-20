const store = require('./store');
const parseArgs = require('./parseArgs');
const { command, argument } = parseArgs(process.argv);

switch (command) {
    case 'add':
        console.log(store.addHabit(argument));
        break;

    case 'done':
        console.log(store.markDone(argument))
        break;

    case 'list':
        const list = store.getList();
        list.forEach(habit => {
            console.log(`${habit.name}: ${habit.count}`);
        });
        break;

    case 'top':
        const top = store.getTop();
        if (typeof top === 'string') {
            console.log(top);
        } else {
            console.log(`${top.name}: ${top.count}`);
        }
        break;

    default:
        console.log(`доступные команды: add, done, list, top`)
        break;
}