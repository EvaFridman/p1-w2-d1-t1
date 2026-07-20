const habits = [
    { name: 'чтение', count: 3 },
    { name: 'зарядка', count: 5 },
    { name: 'английский', count: 1 },
];

function addHabit(name) {
    const habitExists = habits.some(habit => habit.name === name); 
    if (habitExists) return "такая уже есть";
    habits.push({ name, count: 0 });
    return "добавлено";
}

function markDone(name) {
    const habit = habits.find(habit => habit.name === name); 
    if (!habit) return "такой нет";
    habit.count++;
    return "счетчик привычки обновлен"
}

function getList() {
    return [...habits];
}

function getTop() {
    if(habits.length === 0) return "привычек пока нет";
    const maxCountHabit = habits.toSorted((a, b) => b.count - a.count);
    return maxCountHabit[0];
}

module.exports = { addHabit, markDone, getList, getTop };