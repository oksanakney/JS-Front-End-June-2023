function solve (input) {
  const ticketLines = Number(input.shift());
  const tickets = input.slice(0, ticketLines);
  const commands = input.slice(ticketLines);

  const board = tickets.reduce((acc, curr) => {
    const [assignee, taskId, title, status, points] = curr.split(':')

      if (!acc.hasOwnProperty(assignee)) {
        acc[assignee] = [];
      }

      acc[assignee].push ({ taskId, title, status, points: Number(points)});

      return acc;
    }, {});

    const commandRunner = {
        'Add New': addNewTask,
        'Change Status': changeTaskStatus,
        'Remove Task': removeTask,
    }

    commands.forEach(command => {
        const [commandName, ...rest] = command.split(':');
        commandRunner[commandName](...rest);
    });

    const todoPoints = calculateTotalForStatus('ToDo');
    const inProgressPoints = calculateTotalForStatus('In Progress');
    const reviewPoints = calculateTotalForStatus('Code Review');
    const donePoints = calculateTotalForStatus('Done');

    console.log(`Todo: ${todoPoints}pts`);
    console.log(`In Progress: ${inProgressPoints}pts`);
    console.log(`Code Review: ${reviewPoints}pts`);
    console.log(`Done Points: ${donePoints}pts`);

    if (donePoints >= todoPoints + inProgressPoints + reviewPoints) {
        console.log("Sprint was successful!");
    } else {
        console.log("Sprint was unsuccessful...");
    }

    function addNewTask(assignee, taskId, title, status, points) {
      if (!board.hasOwnProperty(assignee)) {
        console.log(`Assigne ${assignee} does not exist on the board!`);
        return;
      }

      board[assignee].push({ taskId, title, status, points: Number(points) })

    }

    function changeTaskStatus(assignee, taskId, status) {
        if (!board.hasOwnProperty(assignee)) {
            console.log(`Assigne ${assignee} does not exist on the board!`);
            return;
        }

        const task = board[assignee].find(t => t.taskId === taskId)

        if (!task) {
            console.log(`Task with ID ${taskId} does not exist for ${assignee}!`);
            return;
        }
        task.status = status; // we se otrazi ponezhe rabotime po referencija

    }

    function removeTask(assignee, index) {
        if (!board.hasOwnProperty(assignee)) {
            console.log(`Assigne ${assignee} does not exist on the board!`);
            return;
        }

        if (index < 0 || index > board[assignee].length) {
            console.log("Index is out of range!");
            return;
        }

        board[assignee].splice(index, 1);

    }
    // complex logic
    function calculateTotalForStatus(status) {
        return Object.values(board).reduce((acc, curr) => {
            const boardTotal = curr
            .filter(t => t.status === status)
            .reduce((tasksTotal, task) => tasksTotal + task.points, 0);
            
            return acc + boardTotal;
          }, 0);  
    }
}
  
  solve ([
      '4',
      'Kiril:BOP-1213:Fix Typo:Done:1',
      'Peter:BOP-1214:New Products Page:In Progress:2',
      'Mariya:BOP-1215:Setup Routing:ToDo:8',
      'Georgi:BOP-1216:Add Business Card:Code Review:3',
      'Add New:Sam:BOP-1237:Testing Home Page:Done:3',
      'Change Status:Georgi:BOP-1216:Done',
      'Change Status:Will:BOP-1212:In Progress',
      'Remove Task:Georgi:3',
      'Change Status:Mariya:BOP-1215:Done',
      ]); 
  